

const textarea = document.querySelector('.texto__publica'); // Texto
const tweetar = document.querySelector('.twittar__publicacao'); // Button
const publicacao = document.querySelector(".conteudo__principaltweet")

function pegarTweet() { 

    const tweetarTextarea = textarea.value
    criarTweet(tweetarTextarea); 
}

tweetar.addEventListener('click', pegarTweet)

function criarTweet(tweetar) {

    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();

const tweet = {
    nome: "João Vitor",
    foto : "./assets/main__img/Foto.jpeg",
    usuario: "@Juaumvitu",
    texto: tweetar,
    tempo: `${hora}:${minuto}`
    }   

    listaParaTweet(tweet);
}

function listaParaTweet(tweet){

    const {nome, foto, usuario, texto, tempo} = tweet;
    
    let li = document.createElement("li");
    li.classList.add('conteudo__principal')

    let img = document.createElement("img");
    img.src = foto;
    img.classList.add('perfil-usuario')

    let div = document.createElement("div");
    div.classList.add('tweet__conteudo')

    let h2 = document.createElement("h2");
    h2.classList.add('nome__usuario')

    h2.innerText = nome;
    let span = document.createElement("span");
    span.innerText = `${usuario} ${tempo}`;
    span.classList.add('frase__tweet')

    let p = document.createElement("p");
    p.innerText = texto;
    p.classList.add('frase__tweet')

    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);


    li.appendChild(img)
    li.appendChild(div)
    
    publicacao.append(li)
    

    textarea.value = "";
}

