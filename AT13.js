<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ativar">Ativar</button>
    <button id="remover">Remover</button>

    <input type="text" id="campo">

    <p id="saida"></p>

    <script>
        const campo = document.getElementById("campo");

        function atualizar() {
            saida.textContent = campo.value;
        }

        ativar.onclick = () => campo.addEventListener("keyup", atualizar);
        remover.onclick = () => campo.removeEventListener("keyup", atualizar);
    </script>

</body>

</html>
