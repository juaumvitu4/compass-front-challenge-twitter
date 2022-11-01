"use strict";
exports.__esModule = true;
exports.publicacao = exports.tweetar = exports.textarea = void 0;
exports.textarea = document.querySelector('.texto__publica'); // Texto
exports.tweetar = document.querySelector('.twittar__publicacao'); // Button
exports.publicacao = document.querySelector(".conteudo__principaltweet");
function pegarTweet() {
    var tweetarTextarea = this.textarea.value;
    criarTweet(tweetarTextarea);
}
exports.tweetar.addEventListener('click', pegarTweet);
function criarTweet(tweetar) {
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var tweet = {
        nome: "João Vitor",
        foto: "./assets/main__img/Foto.jpeg",
        usuario: "@Juaumvitu",
        texto: tweetar,
        tempo: "".concat(hora, ":").concat(minuto)
    };
    listaParaTweet(tweet);
}
function listaParaTweet(tweet) {
    var li = document.createElement("li");
    li.classList.add('conteudo__principal');
    var img = document.createElement("img");
    img.src = foto;
    img.classList.add('perfil-usuario');
    var div = document.createElement("div");
    div.classList.add('tweet__conteudo');
    var h2 = document.createElement("h2");
    h2.classList.add('nome__usuario');
    h2.innerText = nome;
    var span = document.createElement("span");
    span.innerText = "".concat(usuario, " ").concat(tempo);
    span.classList.add('frase__tweet');
    var p = document.createElement("p");
    p.innerText = texto;
    p.classList.add('frase__tweet');
    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);
    li.appendChild(img);
    li.appendChild(div);
    exports.publicacao.append(li);
    textarea.value = "";
}
