function toggleMode() {
  const body = document.body
  body.classList.toggle("light")

  //ou pode fazer assim
  /*if(body.classList.contains('light')){
    body.classList.remove('light')
  } else {
    body.classList.add("light")
  }*/

  //pegar a tag imagem
  const img = document.querySelector("#profile img")
  //substituir a imagem do perfil
  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
  // set tiver sem light mode, manter a imagem normal  
    img.setAttribute("src", "./assets/avatar-.png")
  }
}