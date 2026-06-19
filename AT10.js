<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ativar">Ativar Teclado</button>
    <button id="desativar">Desativar Teclado</button>

    <p id="contador">0</p>

    <script>
        let teclas = 0;

        function contar() {
            teclas++;
            contador.textContent = teclas;
        }

        ativar.onclick = () => document.addEventListener("keydown", contar);
        desativar.onclick = () => document.removeEventListener("keydown", contar);
    </script>
</body>

</html>
