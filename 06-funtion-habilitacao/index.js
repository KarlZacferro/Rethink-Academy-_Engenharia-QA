
    function pulaLinha() {
        document.write("<br>");
    }

    function show(texto) {
        document.write(texto);
        pulaLinha();
    }

    var idade = parseInt(prompt("Digite sua idade"));
    var habilitacao = prompt("Tem habilitação? Digite S ou N");

    if(idade < 18) {
        show("Não pode dirigir, não possui idade mínima.");
    }
    else if( (idade >= 18) && (habilitacao  == "S" || habilitacao  == "s")  ) {
        show("Você está habilitado a dirigir.");
    }
    else {
        show("Não habilitado a dirigir.")
    }