<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ativar">Ativar Contador</button>
    <button id="desativar">Desativar Contador</button>

    <button id="principal">Clique</button>

    <p id="contador">0</p>

    <script>
        let total = 0;
        const principal = document.getElementById("principal");

        function contar() {
            total++;
            document.getElementById("contador").textContent = total;
        }

        document.getElementById("ativar").onclick = () => {
            principal.addEventListener("click", contar);
        };

        document.getElementById("desativar").onclick = () => {
            principal.removeEventListener("click", contar);
        };
    </script>

</body>

</html>
