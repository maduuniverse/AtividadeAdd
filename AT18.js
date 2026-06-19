<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="jogar">Perder Vida</button>

    <p id="vidas">5</p>

    <script>
        let vida = 5;

        function perderVida() {
            vida--;
            vidas.textContent = vida;

            if (vida <= 0) {
                alert("Game Over");
                jogar.removeEventListener("click", perderVida);
            }
        }

        jogar.addEventListener("click", perderVida);
    </script>
</body>

</html>
