<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ativar">Ativar Cor</button>
    <button id="desativar">Desativar Cor</button>

    <div id="retangulo" style="width:200px;height:100px;background:gray;"></div>

    <script>
        const ret = document.getElementById("retangulo");

        function azul() {
            ret.style.background = "blue";
        }

        ativar.onclick = () => ret.addEventListener("click", azul);
        desativar.onclick = () => ret.removeEventListener("click", azul);
    </script>

</body>

</html>
