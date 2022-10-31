const textarea = document.querySelector('.texto__publica').value 
const tweetar = document.querySelector('.twittar__publicacao').value

function pegarValor(event) {
    console.log('Clicou no botão')
    console.log(event)

    const tweetarTextarea = textarea.value;
    console.log(tweetarTextarea);
}

tweetar.addEventListener('click', pegarValor);