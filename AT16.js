<button id="ativar">Ativar</button>
<button id="botao">Clique</button>

<p id="contador">0</p>

<script>
let cont = 0;

function contar() {
    if(cont < 10) {
        cont++;
        contador.textContent = cont;
    } else {
        alert("Limite atingido.");
        botao.removeEventListener("click", contar);
    }
}

ativar.onclick = () => botao.addEventListener("click", contar);
</script>
