# Servidor web local ligero para compartir la PWA con la Xiaomi Pad 8 por Wi-Fi
$port = 8080
$localIp = (Get-NetIPAddress -AddressFamily IPv4 -InterfaceAlias "Wi-Fi*","Ethernet*","Ethernet" -ErrorAction SilentlyContinue | Where-Object { $_.IPAddress -notmatch '^127\.' -and $_.IPAddress -notmatch '^169\.254\.' } | Select-Object -First 1).IPAddress
if (-not $localIp) { $localIp = "localhost" }

Write-Host "==========================================================" -ForegroundColor Green
Write-Host " 🎓 Servidor Local - Inglés Sara PWA" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Green
Write-Host ""
Write-Host " 1. En este ordenador puedes abrir:" -ForegroundColor Yellow
Write-Host "    http://localhost:$port/index.html" -ForegroundColor White
Write-Host ""
Write-Host " 2. En la Xiaomi Pad 8 (conectada a la misma red Wi-Fi):" -ForegroundColor Yellow
Write-Host "    http://$($localIp):$port/index.html" -ForegroundColor Green
Write-Host ""
Write-Host " 💡 Para instalar como app en la tablet:" -ForegroundColor Cyan
Write-Host "    Abre ese enlace en Chrome, pulsa en los 3 puntos (⋮) y elige" -ForegroundColor Gray
Write-Host "    'Añadir a la pantalla de inicio' o 'Instalar aplicación'." -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Green
Write-Host " Pulsa Ctrl+C en esta ventana para detener el servidor." -ForegroundColor DarkGray
Write-Host ""

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://*:$port/")
try {
    $listener.Start()
} catch {
    # Si requiere permisos de admin para *, escucha en localhost
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()
    Write-Host "Nota: Escuchando en localhost:$port" -ForegroundColor Yellow
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".ico"  = "image/x-icon"
}

$baseDir = $PSScriptRoot

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($path)) { $path = "index.html" }

        $filePath = Join-Path $baseDir $path

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = $mimeTypes[$ext]
            if (-not $mime) { $mime = "application/octet-stream" }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.OutputStream.Close()
    } catch {
        # Error menor o cancelación de conexión
    }
}
