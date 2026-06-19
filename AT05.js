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

    <p id="texto">Texto Original</p>

    <script>
        const texto = document.getElementById("texto");

        function alterar() {
            texto.textContent = "Texto Alterado!";
        }

        ativar.onclick = () => texto.addEventListener("click", alterar);
        remover.onclick = () => texto.removeEventListener("click", alterar);
    </script>

</body>

</html>
