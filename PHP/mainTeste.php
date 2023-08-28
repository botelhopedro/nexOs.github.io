<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/mainTeste.css">
    <title>NexOS</title>
</head>
<body>
    <div class="taskbar">
        <div class="start-menu">
            <button>Start</button>
            <a href="../PHP/testeAplicacao.php"> Aplicações </a>
            <a href="../PHP/mainTeste.php"> Home </a>
            <!-- Add Start menu content here -->
        </div>
        <div class="taskbar-icons">
            <!-- Add taskbar icons here -->
        </div>
    </div>
    <div class="desktop">
        <!-- Add desktop icons here -->
    </div>
    <div class="window" id="notepadWindow">
        <div class="window-header">
            <span>Notepad</span>
            <div class="window-buttons">
                <button class="minimize-button" onclick="minimizeWindow('notepadWindow')">_</button>
                <button class="close-button" onclick="closeWindow('notepadWindow')">X</button>
            </div>
        </div>
        <div class="window-content">
            <textarea rows="10" cols="30">This is a simple Notepad app.</textarea>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>