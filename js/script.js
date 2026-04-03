// Quando é colocado as variaveis nasc e sexo fora da função, o JavaScript lê esses valores assim que a página carrega. Como a página carrega com 
// os campos vazios, as variáveis ficam vazias para sempre.
let resposta = document.getElementById("verif")
let imagem = document.getElementById("img")
let dataAtual = new Date()
let anoAtual = dataAtual.getFullYear()

function verificar(){
    // Essas variaveis precisam estar dentro para pegar o valor do momento!
    var nasc = Number(document.getElementById("nasc").value)
    var sexo = document.querySelector("input[name = sexo]:checked").value //O :checked é para informar que é para pegar o valor que foi marcado pelo usuário
    
    //tem que estar dentro da função, se nao estiver, o container fica considerando a altura e largura da foto antes de chamar a funcao.
    imagem.style.width = '20rem'
    imagem.style.height = '20rem'
    imagem.style.margin = 'auto'
    imagem.style.marginBottom = '1rem'
    imagem.style.borderRadius = '30rem'
    imagem.style.maxWidth = '100%'  
    imagem.style.backgroundSize = 'cover' // fará a imagem preencher o espaço, mas pode cortar um pouco das bordas se não for quadrada.
    imagem.style.backgroundPosition = 'center 10%' //diz ao navegador para centralizar a imagem horizontalmente e focar no topo verticalmente, onde o rosto está.
    imagem.style.backgroundRepeat = 'no-repeat'
    
    var idade = anoAtual - nasc

    if (nasc < 0 || nasc > anoAtual || idade > 105) {
        resposta.innerHTML = "[ERRO] Verifique o ano de nascimento!"
        imagem.style.backgroundImage = "url('img/msgErro.jpg')"
        return // para a função aqui mesmo
    }  

    if(sexo == "M"){//é usado o value para verificar se é masc ou fem
        resposta.innerHTML= `Detectamos homem com ${idade} anos.`
        resposta.style.marginBottom = "1rem"
        resposta.style.textAlign = 'center'

        if (idade <= 3) {
            imagem.style.backgroundImage = "url('img/bebe.jpg')"
        }else if (idade <= 10) {
            imagem.style.backgroundImage = "url('img/criançaMas.jpg')"
        }else if(idade <= 20){
            imagem.style.backgroundImage = "url('img/jovemMas.jpg')"
        }else if(idade <= 30 && idade <= 40) {
            imagem.style.backgroundImage = "url('img/jovemSenhorMas.jpg')"
        }else if(idade <= 55) {
            imagem.style.backgroundImage = "url('img/senhorMas.jpg')"
        }else {
            imagem.style.backgroundImage = "url('img/idosoMas.jpg')"
        }

    }else if(sexo == "F") {
        resposta.innerHTML= `Detectamos Mulher com ${idade} anos.`
        resposta.style.marginBottom = "1rem"
        resposta.style.textAlign = 'center'

        if (idade <= 3) {
            imagem.style.backgroundImage = "url('img/bebe.jpg')"
        }else if (idade <= 10) {
            imagem.style.backgroundImage = "url('img/criançaFem.jpg')"
        }else if(idade <= 20){
            imagem.style.backgroundImage = "url('img/jovemFem.png')"
        }else if(idade <= 30 && idade <= 40) {
            imagem.style.backgroundImage = "url('img/jovemSenhoraFem.png')"
        }else if(idade <= 55) {
            imagem.style.backgroundImage = "url('img/senhoraFem.png')"
        }else {
            imagem.style.backgroundImage = "url('img/idosaFem.png')"
        }
    }    
}


//Para a imagem aparecer, a div #img precisa ter largura e altura no CSS!