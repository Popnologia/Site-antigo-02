function navMobile() {
  let botaoAbrir = window.document.querySelector("i#botao-nav-abrir")
  let botaoFechar = window.document.querySelector("i#botao-nav-fechar")
  let menuNav = window.document.querySelector("div#nav-list")

  if (botaoAbrir.style.display != "none") {
    botaoAbrir.style.display = "none"
    botaoFechar.style.display = "block"
    menuNav.style.display = "block"
  } else {
    botaoAbrir.style.display = "block"
    botaoFechar.style.display = "none"
    menuNav.style.display = "none"
  }
}
