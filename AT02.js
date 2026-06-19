<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="iniciar">Iniciar Clique</button>
    <button id="parar">Parar Clique</button>

    <div id="quadrado" style="width:100px;height:100px;background:gray;"></div>

    <script>
        const quadrado = document.getElementById("quadrado");

        function mudarCor() {
            quadrado.style.background = "green";
        }

        document.getElementById("iniciar").addEventListener("click", () => {
            quadrado.addEventListener("click", mudarCor);
        });

        document.getElementById("parar").addEventListener("click", () => {
            quadrado.removeEventListener("click", mudarCor);
        });
    </script>
</body>

</html>
