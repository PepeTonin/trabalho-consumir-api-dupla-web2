document.querySelector('button').addEventListener('click', () => {
    let palavraPesquisada = document.getElementById('entrada').value;

    // CLASSE GRAMATICAL E SIGNIFCADOS
    let url = `https://dicio-api-ten.vercel.app/v2/significados/${palavraPesquisada}`
    fetch(url)
        .then(response => response.json())
        .then(data => {

            document.getElementById('partOfSpeech').innerText = data[0].partOfSpeech;
            document.getElementById('significados').innerText = data[0].meanings.join('\n');
            console.log(data)

        })
        .catch(error => {
            document.getElementById('significados').innerText = 'ERRO!!';
        });

    // SEPARACAO DE SILABAS
    url = `https://dicio-api-ten.vercel.app/v2/silabas/${palavraPesquisada}`
    fetch(url)
        .then(response => response.json())
        .then(data => {

            document.getElementById('silabas').innerText = data.join(' - ');
            console.log(data)

        })
        .catch(error => {
            document.getElementById('silabas').innerText = 'ERRO!!';
        })


})