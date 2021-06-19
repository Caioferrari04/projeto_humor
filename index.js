
const pato = {
    nome: 'Shuba',
    subaru: false,

    comSubaru: "https://media1.tenor.com/images/8a1f5fb23d8422a58a4281a3331f1ded/tenor.gif?itemid=21815717",
    semSubaru: "https://c.tenor.com/4otr5S3l1agAAAAj/dancing-duckdancing.gif"
}

const elementNome = document.getElementById('pato');

elementNome.innerText = pato.nome;

function fazedorDeSubaru() {
    const image = document.getElementById('imagem');
    const estadoAtual = document.getElementById('status');

    if (pato.subaru){
        image.src = pato.comSubaru;
        estadoAtual.innerText = pato.nome + ' está com subaru!';
    }
    else{
        image.src = pato.semSubaru;
        estadoAtual.innerText = pato.nome + ' está sozinho.';
    }
}

fazedorDeSubaru();

const botaoSubaru = document.getElementById('humor');
botaoSubaru.addEventListener('click',function () {
    pato.subaru = !pato.subaru;
    fazedorDeSubaru();
});