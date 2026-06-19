<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ativar">Ativar</button>
    <button id="desativar">Desativar</button>

    <button id="gerar">Gerar Número</button>

    <p id="resultado"></p>

    <script>
        function gerarNumero() {
            let numero = Math.floor(Math.random() * 20) + 1;

            if (numero % 2 === 0) {
                resultado.textContent = numero + " - Número Aceito";
            } else {
                resultado.textContent = numero + " - Número Ignorado";
            }
        }

        ativar.onclick = () => gerar.addEventListener("click", gerarNumero);
        desativar.onclick = () => gerar.removeEventListener("click", gerarNumero);
    </script>
</body>

</html>
