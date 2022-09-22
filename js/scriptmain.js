function login(){
    var nome = document.getElementById("login-nome")
    var senha = document.getElementById("login-password")
    console.log(nome.value)
    console.log(senha)

    if(nome.value == "Jorge Silva" & senha.value == 12345)
        window.location.href = "http://127.0.0.1:5500/perfilprodutor.html"


}