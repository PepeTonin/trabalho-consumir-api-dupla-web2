# Trabalho de Programação Web II - Consumir API
## Alunos:
* Pedro Tonin
* Heloisa Machado
## Descrição
Nosso trabalho é um dicionário web. O usuário digita uma palavra na caixa de texto que há na página e a aplicação retorna algumas informações sobre ela. Para a realização, consumimos uma [api](https://github.com/ThiagoNelsi/dicio-api) que possui diversas informações a respeito de milhares de palavras da língua portuguesa.
### Funcionamento da aplicação
1. O usuário digita a palavra que ele quer buscar;
2. Ao clicar no botão "Pesquisar", primeiramente os elementos de saída são resetados;
3. Em seguida, é feita uma requisição para a api;
4. Caso a palavra não seja encontrada, retorna uma mensagem avisando;
5. Caso a palavra seja encontrada, retorna os dados da api, que são:
	+ Classe gramatical;
	+ Significado da palavra;
		- podem haver mais de uma classe gramatical e consequente significado.
	+ Separação de sílabas;
	+ Sinônimos;
	+ Aplicação em frase;
6. Ao final, limpa o campo de entrada de palavra e volta o cursor para a caixa de texto.

* Há alguns casos especiais para os nomes de nossos cachorros :)
