<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ativar">Ativar Hora</button>
    <button id="desativar">Desativar Hora</button>

    <button id="mostrar">Mostrar Hora</button>

    <p id="hora"></p>

    <script>
        function exibirHora() {
            hora.textContent = new Date().toLocaleTimeString();
        }

        ativar.onclick = () => mostrar.addEventListener("click", exibirHora);
        desativar.onclick = () => mostrar.removeEventListener("click", exibirHora);
    </script>
</body>

</html>
