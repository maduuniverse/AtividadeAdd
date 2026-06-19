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

    <div id="personagem" style="width:50px;height:50px;background:black;position:absolute;">
    </div>

    <script>
        let x = 0;
        let y = 0;

        function mover(e) {
            if (e.key === "ArrowRight") x += 10;
            if (e.key === "ArrowLeft") x -= 10;
            if (e.key === "ArrowUp") y -= 10;
            if (e.key === "ArrowDown") y += 10;

            personagem.style.left = x + "px";
            personagem.style.top = y + "px";
        }

        ativar.onclick = () => document.addEventListener("keydown", mover);
        remover.onclick = () => document.removeEventListener("keydown", mover);
    </script>

</body>

</html>
