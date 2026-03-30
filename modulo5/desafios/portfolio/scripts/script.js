function alterarTema() {
    const html = document.documentElement;
    const botaoTema = document.querySelector("#botao-tema")
    html.classList.toggle('tema-escuro');
    if(botaoTema.innerHTML == 'dark_mode') {
        botaoTema.innerHTML = 'light_mode'
    } else {
        botaoTema.innerHTML = 'dark_mode'
    }
}