// Obter tema do sistema
const sysTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
var temaAtual = sysTheme //valor padrão do tema atual

tema()

//Se botão for pressionado
function alterarTema() {
  if (temaAtual == "light") {
    temaAtual = "dark"
  } else if (temaAtual == "dark") {
    temaAtual = "light"
  }

  tema()
}

//ALTERAÇÃO DO TEMA
function tema() {
  // Botões tema claro e escuro
  let botaoClaro = window.document.querySelector("i#botao-tema-claro")
  let botaoEscuro = window.document.querySelector("i#botao-tema-escuro")
  let root = document.documentElement.style

  //Variáveis CSS

  if (temaAtual == "light") {
    botaoEscuro.style.display = "none" //Esconder botão escuro
    botaoClaro.style.display = "block" //Mostrar botão claro

    //ALTERAR VARIAVEIS CSS
    //Fundo
    root.setProperty("--fundo-solido", "var(--cor10)")
    //Gradiente
    root.setProperty("--gradiente-padrao", "var(--gradiente-claro)")
    //Fundo transparente
    root.setProperty("--fundo-transparente", "var(--fundo-transparente-branco")
    //Texto
    root.setProperty("--cor-texto", "var(--cor-letra-preta")
  } else if (temaAtual == "dark") {
    botaoEscuro.style.display = "block" //Mostrar botão escuro
    botaoClaro.style.display = "none" //Esconder botão claro

    //ALTERAR VARIAVEIS CSS
    //Cor fundo
    root.setProperty("--fundo-solido", "var(--cor11)")
    //Gradiente
    root.setProperty("--gradiente-padrao", "var(--gradiente-escuro)")
    //Fundo transparente
    root.setProperty("--fundo-transparente", "var(--fundo-transparente-preto")
    //Texto
    root.setProperty("--cor-texto", "var(--cor-letra-branca")
  }
}
