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

    <div id="caixa" style="width:100px;height:100px;background:red;"></div>

    <script>
        const caixa = document.getElementById("caixa");

        function aumentar() {
            caixa.style.width = "150px";
            caixa.style.height = "150px";
        }

        ativar.onclick = () => caixa.addEventListener("click", aumentar);
        remover.onclick = () => caixa.removeEventListener("click", aumentar);
    </script>
</body>

</html>
