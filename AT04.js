<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ativar">Ativar Mouse</button>
    <button id="desativar">Desativar Mouse</button>

    <p id="coord"></p>

    <script>
        function mostrar(event) {
            document.getElementById("coord").textContent =
                `X: ${event.clientX} | Y: ${event.clientY}`;
        }

        document.getElementById("ativar").onclick = () => {
            document.addEventListener("mousemove", mostrar);
        };

        document.getElementById("desativar").onclick = () => {
            document.removeEventListener("mousemove", mostrar);
        };
    </script>
</body>

</html>
