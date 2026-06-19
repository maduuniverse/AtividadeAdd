<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ligar">Ligar Alerta</button>
    <button id="desligar">Desligar Alerta</button>

    <img id="img" src="https://via.placeholder.com/150">

    <script>
        const img = document.getElementById("img");

        function alerta() {
            alert("Imagem clicada!");
        }

        ligar.onclick = () => img.addEventListener("click", alerta);
        desligar.onclick = () => img.removeEventListener("click", alerta);
    </script>


</body>

</html>
