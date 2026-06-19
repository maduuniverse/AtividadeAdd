<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ativar">Ativar Evento</button>
    <button id="remover">Remover Evento</button>

    <h1 id="emoji">😀</h1>

    <script>
        const emoji = document.getElementById("emoji");

        function trocar() {
            emoji.textContent = "😎";
        }

        ativar.onclick = () => emoji.addEventListener("click", trocar);
        remover.onclick = () => emoji.removeEventListener("click", trocar);
    </script>
</body>

</html>
