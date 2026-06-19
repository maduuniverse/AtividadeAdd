<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button id="ativar">Ativar Cadastro</button>
    <button id="desativar">Desativar Cadastro</button>

    <input type="text" id="nome">
    <button id="cadastrar">Cadastrar</button>

    <ul id="lista"></ul>

    <script>
        let nomes = [];

        function cadastrarNome() {

            if (nomes.length < 5) {

                let nome = document.getElementById("nome").value;

                nomes.push(nome);

                lista.innerHTML = "";

                for (let i = 0; i < nomes.length; i++) {
                    let li = document.createElement("li");
                    li.textContent = nomes[i];
                    lista.appendChild(li);
                }

            } else {
                alert("Limite de cadastros atingido.");
                cadastrar.removeEventListener("click", cadastrarNome);
            }
        }

        ativar.onclick = () => cadastrar.addEventListener("click", cadastrarNome);

        desativar.onclick = () => cadastrar.removeEventListener("click", cadastrarNome);
    </script>
</body>

</html>
