require('dotenv').config()
const http = require('http')

// HTML content as a string
const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Aplicación Web</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="logo">
                <div class="circle"></div>
                <div class="wave"></div>
            </div>
            <h1>¡Aplicación Desplegada!</h1>
            <p>Este sitio ha sido exitosamente desplegado con Render</p>
            <div class="animated-element"></div>
            <div class="buttons">
                <a href="#" class="button primary">Comenzar</a>
                <a href="#" class="button secondary">Más información</a>
            </div>
        </div>
    </div>
</body>
</html>`;

// CSS content as a string
const cssContent = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
}

.container {
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    text-align: center;
}

.card {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
    backdrop-filter: blur(8px);
    padding: 40px;
    transform: translateY(0);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
}

.logo {
    position: relative;
    height: 120px;
    width: 120px;
    margin: 0 auto 30px;
}

.circle {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(45deg, #6e8efb, #a777e3);
    animation: pulse 2s infinite;
}

.wave {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
    height: 40px;
    background: white;
    border-radius: 100%;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: #444;
}

p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #666;
}

.animated-element {
    width: 60px;
    height: 60px;
    background: linear-gradient(45deg, #6e8efb, #a777e3);
    margin: 20px auto;
    border-radius: 4px;
    animation: rotate 4s linear infinite;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

.button {
    padding: 12px 24px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.primary {
    background: linear-gradient(45deg, #6e8efb, #a777e3);
    color: white;
    box-shadow: 0 4px 15px rgba(106, 142, 251, 0.4);
}

.primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(106, 142, 251, 0.6);
}

.secondary {
    background: transparent;
    color: #6e8efb;
    border: 2px solid #6e8efb;
}

.secondary:hover {
    background-color: rgba(110, 142, 251, 0.1);
}

@keyframes pulse {
    0% {
        transform: translateX(-50%) scale(0.95);
        box-shadow: 0 0 0 0 rgba(106, 142, 251, 0.7);
    }
    70% {
        transform: translateX(-50%) scale(1);
        box-shadow: 0 0 0 15px rgba(106, 142, 251, 0);
    }
    100% {
        transform: translateX(-50%) scale(0.95);
        box-shadow: 0 0 0 0 rgba(106, 142, 251, 0);
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
        border-radius: 4px;
    }
    50% {
        transform: rotate(180deg);
        border-radius: 50%;
    }
    100% {
        transform: rotate(360deg);
        border-radius: 4px;
    }
}

@media (max-width: 768px) {
    .card {
        padding: 30px 20px;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    p {
        font-size: 1rem;
    }
    
    .buttons {
        flex-direction: column;
        gap: 15px;
    }
}`;

function requestController(req, res) {
  if (req.url === '/' || req.url === '/index.html') {
    // Serve the HTML content directly
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
  } else if (req.url === '/styles.css') {
    // Serve the CSS content directly
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(cssContent);
  } else {
    // Handle 404
    res.writeHead(404);
    res.end('Page not found');
  }
}

const server = http.createServer(requestController);

const PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
  console.log("Aplicación corriendo en: " + PORT);
});