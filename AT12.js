<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ativar">Ativar Registro</button>
    <button id="desativar">Desativar Registro</button>

    <button id="principal">Clique</button>

    <ul id="lista"></ul>

    <script>
        const principal = document.getElementById("principal");

        function registrar() {
            let li = document.createElement("li");
            li.textContent = "Clique";
            lista.appendChild(li);
        }

        ativar.onclick = () => principal.addEventListener("click", registrar);
        desativar.onclick = () => principal.removeEventListener("click", registrar);
    </script>

</body>

</html>
