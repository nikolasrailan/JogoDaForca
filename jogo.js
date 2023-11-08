const elementos = {
    telaInicial: document.getElementById('inicial'),
    telaCadastro: document.getElementById('cadastro'),
    telaJogo: document.getElementById('jogo'),
    telaMensagem: document.querySelector('.mensagem'),
    textoMensagem: document.querySelector('.mensagem .texto'),
    teclado: document.querySelector('.teclado'),
    palavra: document.querySelector('.palavra'),
    dica: document.querySelector('.dica'),
    botoes:{
        facil: document.querySelector('.botao-facil'),
        medio: document.querySelector('.botao-medio'),
        dificil: document.querySelector('.botao-dificil'),
        cadastrar: document.querySelector('.botao-cadastrar'),
        realizarCadastro: document.querySelector('.botao-realizar-cadastro'),
        voltar: document.querySelector('.botao-voltar'),
        reiniciar: document.querySelector('.reiniciar'),
    },
    campos:{
        dificuldade: {
            facil: document.getElementById('facil'),
            medio: document.getElementById('medio'),
            dificil: document.getElementById('dificil'),
        },
        palavra: document.getElementById('palavra'),
        dica: document.getElementById('dica'),
    },
    boneco: [
        querySelector('.boneco-cabeca'),
        querySelector('.boneco-corpo'),
        querySelector('.boneco-braco-esquerdo'),
        querySelector('.boneco-braco-direito'),
        querySelector('.boneco-perna-direita'),
        querySelector('.boneco-perna-esquerda'),
    ],
}

const palavras = {
    facil: [{
        palavra: 'série', 
        dica: 'Game Of Thrones é a melhor...'
    }, 
    {
        palavra: 'ímpar',
        dica: 'Se não é par é...'
    }]
}

function criarTeclado() {
    
}

function mostrarErro(){

}

function mostrarMensagem(vitoria) {

}

function abrirTelaCadastroPalavra() {

}

function voltarInicio() {
    
}

function cadastrarPalavra() {

}

function sortearPalavra() {
    
}

function mostrarPalavra() {

}

function novoJogo() {
    jogo = {
        dificuldade: undefined,
        palavra: {
            original: undefined,
            semAcentos: undefined,
            tamanho: undefined,
            dica: undefined,
        },
        acertos: undefined,
        jogadas: [],
        chances: 6,
        definirPalavra: function (palavra, dica) {
            this.palavra.original = palavra;
            this.palavra.tamanho = palavra.lenght;
            this.acertos = '';

            this.palavra.semAcentos = this.palavra.original.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            this.palavra.dica = dica;

            for( let i=0; i < this.palavra.tamanho.length; i++ ){
                this.acertos += ' ';
            }
        },
        jogar: function(letraJogada) {
            let acertou = false;
            for(let i=0; i < this.palavra.tamanho; i) {
                const letra = this.palavra.semAcentos[i].toLowerCase();
                if(letra === letraJogada.toLowerCase()){
                    acertou = true;
                    this.acertos = substituirCaractere(this.acertos, i, this.palavra.original[i])
                }
            }

            if(!acertou) {
                this.chances--;
            }
            return acertou;
        },
        ganhou: function() {
            return !this.acertos.includes(' ');
        },
        perdeu: function() {
            return this.chances <= 0;
        },
        acabou: function() {
            return this.ganhou() || this.perdeu();
        },
        emAndamento: false,
        
    };
    elementos.telaInicial.style.display = 'flex';
    elementos.telaCadastro.style.display = 'none';
    elementos.telaJogo.style.display = 'none';
    elementos.telaMensagem.style.display = 'none';
    elementos.telaMensagem.classList.remove('mensagem-vitoria');
    elementos.telaMensagem.classList.remove('mensagem-derrota');

    for(const parte of elementos.boneco){
        parte.classList.remove('escondido');
        parte.classList.add('escondido');
    }

    criarTeclado();
}

function selecionarLetra(letra){

}

function iniciarJogo(dificuldade) {
    
}

function substituirCaractere(str, indice, novoCaractere) {
    const parteAntes = str.substring(0, indice);
    const parteDepois = str.substring(indice+1);
    const novaString = parteAntes + novoCaractere + parteDepois;
    return novaString;
}

novoJogo();