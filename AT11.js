<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ativar">Ativar</button>
    <button id="remover">Remover</button>

    <h1 id="titulo">Título</h1>

    <script>
        const titulo = document.getElementById("titulo");

        function mudarCor() {
            titulo.style.color = "red";
        }

        ativar.onclick = () => titulo.addEventListener("click", mudarCor);
        remover.onclick = () => titulo.removeEventListener("click", mudarCor);
    </script>

</body>

</html>
