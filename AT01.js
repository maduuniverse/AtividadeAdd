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

    <p id="texto">Clique aqui</p>

    <script>
        const p = document.getElementById("texto");

        function mensagem() {
            alert("Você clicou no parágrafo!");
        }

        document.getElementById("ativar").addEventListener("click", () => {
            p.addEventListener("click", mensagem);
        });

        document.getElementById("desativar").addEventListener("click", () => {
            p.removeEventListener("click", mensagem);
        });
    </script>
</body>

</html>
