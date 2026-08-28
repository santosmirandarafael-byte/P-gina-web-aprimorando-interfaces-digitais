const botoes = document.querySelectorAll("button");

        botoes.forEach(function(botao){
            let curtiu = false
            botao.addEventListener("click", botaoClicado);
            function botaoClicado(){
                console.log("fui clicado");
                let texto = botao.querySelector("span");
                if (curtiu === false){
                    texto.textContent++;
                    curtiu = true;
                }else{
                    texto.textContent--;
                    curtiu = false;
                }
            }

        })

        const btntemaClaro = document.querySelector(".btn-Tema-Claro");
        btntemaClaro.addEventListener("click", mudaTema);

        function mudaTema(){
            const corpoPagina = documente.body;
            if(corpoPagina.ClassList.contains("Tema-Claro")) {
            corpoPagina.ClassList.remove("Tema-Claro");
            } else {
                corpopagina.ClassList.add("Tema-Claro");
            }

        }