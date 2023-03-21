// ATRIBUIÇÕES DE ELEMENTOS DO DOM PARA O CODIGO JS
// *******************************************************************************************
const saidaSinonimos = document.getElementById('sinonimos');
const saidaSilabas = document.getElementById('silabas');
const saidaFrases = document.getElementById('frases');
const saidasSignificados = document.getElementById('significados');
// *******************************************************************************************


// FUNÇÕES USADAS NO PROGRAMA
// *******************************************************************************************
function palavrasEspeciais(palavra) {
    document.querySelector('#imagensDog').src = `images/${palavra}.jpg`
    document.querySelector('#imagensDog').style.width = '500px';
}

function fetchSignificados(palavraPesquisada) {

    // link
    let url = `https://dicio-api-ten.vercel.app/v2/significados/${palavraPesquisada}`;

    // busca o link
    fetch(url)
        // busca o dado em json e transforma para um tipo usável em JavaScript
        .then(response => response.json())

        // utiliza o dado
        .then(data => {

            if (!(data.hasOwnProperty('error'))) {
                data.forEach(element => {
                    const newPre = document.createElement('pre');
                    let content = '';
                    content += 'Classe gramatical:\n';
                    content += element.partOfSpeech + '\n';
                    content += 'Significado:\n';
                    element.meanings.forEach(meaning => {
                        content += meaning + '\n';
                    });
                    const newContent = document.createTextNode(content);
                    newPre.appendChild(newContent);
                    saidasSignificados.appendChild(newPre);
                });
            };

            // mostra os dados no console para fim de debug
            console.log(data);

        })

        // em caso de erro na busca da api, executa essa parte
        .catch(error => console.log(error))

};

function fetchSilabas(palavraPesquisada) {

    // link
    let url = `https://dicio-api-ten.vercel.app/v2/silabas/${palavraPesquisada}`;

    // busca o link
    fetch(url)
        // busca o dado em json e transforma para um tipo usável em JavaScript
        .then(response => response.json())

        // utiliza o dado
        .then(data => {

            if (!(data.hasOwnProperty('error'))) {
                saidaSilabas.innerText = 'Separação de sílabas:\n';
                saidaSilabas.innerText += data.join(' - ');
            } else {
                saidaSilabas.innerText = 'Palavra não encontrada!!';
            };

            // mostra os dados no console para fim de debug
            console.log(data);

        })

        // em caso de erro na busca da api, executa essa parte
        .catch(error => console.log(error))
};

function fetchSinonimos(palavraPesquisada) {

    // link
    let url = `https://dicio-api-ten.vercel.app/v2/sinonimos/${palavraPesquisada}`;

    // busca o link
    fetch(url)
        // busca o dado em json e transforma para um tipo usável em JavaScript
        .then(response => response.json())

        // utiliza o dado
        .then(data => {

            if (!(data.hasOwnProperty('error'))) {
                saidaSinonimos.innerText = 'Sinonimos: \n';
                if (data.length > 0) {
                    saidaSinonimos.innerText += data.join(', ');
                } else {
                    saidaSinonimos.innerText += 'Não há sinonimos na base de dados para esta palavra!';
                };
            }

            // mostra os dados no console para fim de debug
            console.log(data);

        })

        // em caso de erro na busca da api, executa essa parte
        .catch(error => console.log(error))
};

function fetchFrases(palavraPesquisada) {

    // link
    let url = `https://dicio-api-ten.vercel.app/v2/frases/${palavraPesquisada}`;

    // busca o link
    fetch(url)
        // busca o dado em json etransforma para um tipo usável em JavaScript
        .then(response => response.json())

        // utiliza o dado
        .then(data => {

            if (!(data.hasOwnProperty('error'))) {
                saidaFrases.innerText = `Exemplo de frase com a palavra "${palavraPesquisada}":\n`;
                if (data.length > 0) {
                    let rand = Math.floor(Math.random() * data.length);
                    saidaFrases.innerText += data[rand].sentence + '\n' + data[rand].author;
                } else {
                    saidaFrases.innerText += 'Não há frase na base de dados para esta palavra!';
                };
            };

            // mostra os dados no console para fim de debug
            console.log(data);

        })

        // em caso de erro na busca da api, executa essa parte
        .catch(error => console.log(error))
};
// *******************************************************************************************


// PARTE PRINCIPAL DO CÓDIGO
// *******************************************************************************************
document.querySelector('button').addEventListener('click', () => {

    // começa excluindo todas as tags 'pre' existentes no HTML DOCUMENT
    const allPre = document.querySelectorAll('pre');
    if (allPre.length > 0) {
        allPre.forEach(element => {
            if (element.parentNode) {
                element.parentNode.removeChild(element);
            };
        });
    };

    // apagando todos os conteudos das tags 'p'
    const allParagraph = document.querySelectorAll('p');
    if (allParagraph.length > 0) {
        allParagraph.forEach(paragraph => {
            paragraph.innerText = '';
        });
    };

    // e removendo o diretorio e o style do elemento com id 'imagensDog'
    document.querySelector('#imagensDog').src = '';
    document.querySelector('#imagensDog').style = '';

    // recebe a palavra digitada pelo usuário e passa para lower case (minuscula)
    let palavraPesquisada = document.getElementById('entrada').value.toLowerCase();

    // primeiro faz o tratamento das palavras especiais
    if (palavraPesquisada === 'pank') {
        palavrasEspeciais(palavraPesquisada);
    } else if (palavraPesquisada === 'spike') {
        palavrasEspeciais(palavraPesquisada);
    } else if (palavraPesquisada === 'lolla') {
        palavrasEspeciais(palavraPesquisada);
    } else {
        // CLASSE GRAMATICAL E SIGNIFICADOS
        fetchSignificados(palavraPesquisada);
        // SEPARACAO DE SILABAS
        fetchSilabas(palavraPesquisada);
        // SINONIMOS
        fetchSinonimos(palavraPesquisada);
        // FRASES
        fetchFrases(palavraPesquisada);
    };
    // limpa o campo de entrada de texto e volta pra ele a espera de digitação
    document.getElementById('entrada').value = '';
    document.getElementById('entrada').focus();
});
// *******************************************************************************************