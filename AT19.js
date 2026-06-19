<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ativar">Ativar</button>
    <button id="contar">Diminuir</button>

    <p id="numero">20</p>

    <script>
        let valor = 20;

        function diminuir() {
            if (valor > 0) {
                valor--;
                numero.textContent = valor;
            }

            if (valor === 0) {
                alert("Fim da Contagem");
                contar.removeEventListener("click", diminuir);
            }
        }

        ativar.onclick = () => contar.addEventListener("click", diminuir);
    </script>
</body>

</html>
