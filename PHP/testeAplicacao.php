<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../CSS/aplicacaoTeste.css">
    <title>NexOS</title>
</head>
<body>
    <header>

    </header>
    <main>
        <div class="desktop">
            <button class="aplicationIcon" id="showNoteButton">
                <img src="../IMG/notes.png" alt="notes Icon" class="desktopIcon">
            </button>
            <div class="note-window" id="noteWindow">
                <div class="windowHeader" id="windowNote">
                    <button id="closeNoteButton">X</button>
                </div>
                <textarea name="textarea" id="textarea" cols="20" rows="10"></textarea>
            </div>
            <button class="aplicationIcon" id="icon02">
                2
            </button>
            <button class="aplicationIcon" id="icon03">
                3
            </button>
            <button class="aplicationIcon" id="icon04">
                4
            </button>
            <button class="aplicationIcon" id="icon05">
                5
            </button>
        </div>
    </main>
    <footer>
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
    </footer>
    <script src="../JS/mainTeste.js"></script>
</body>
</html>