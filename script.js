function toggleMode() {
  const html = document.documentElement;

  if (html.classList.contains("light")) {
    html.classList.remove("light");
  } else {
    html.classList.add("light");
  }

  // html.classList.toggle('light')

  //pegar a tag img
  const img = document.querySelector("#profile img");
  //se tiver light mode add img light

  if (html.classList.contains("light")) {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }

  //subtuir a imagem
}
