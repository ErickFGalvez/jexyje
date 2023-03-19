//Obtendo os elementos do DOM com que vamos interagir

const casas = document.getElementsByTagName('input'); //pega o botão de reiniciar

const b_reiniciar = document.getElementById('reiniciar'); //pegar o label do jogador que usaremos para mostrar qual jogador tem a vez

const label_jogador = document.getElementById('jogador'); //pegar o label do jogador que usaremos para mostrar qual jogador tem a vez

//Definido variáveis de estado do jogo

var jogador = '_'; //Define o jogador atual  ( = jogador indefinido;X = jogador X, O = Jogador O)
var vencedor = '_'; //Define se há um vencedor ou não ( = indefinido;X = jogador X, O = jogador O)
var finish;

//Define a resposta ao evento de clique nas casas do "tabuleiro"
for(var i=0;i<9;i++) {
	casas[i].addEventListener('click',(event) => {
		//se a casa estiver vazia e ninguem tiver vencido a partida
			if( (event.target.value=='_') && (vencedor=='_')) {
				event.target.value=jogador; //preenche a casa com X ou O
				event.target.style.color='#bc5e00'; //torna o valor da casa visivel
				
				trocarJogador(); //função que troca a vez do jogador, a ser definioda depois
				
				vencedor = vitoria(); //Executa a função vitoria() que defineremos depois, ela retorna o vencedor da partida, caso exista.
				//se o vencedor existe, imprime
				
			}
	});
}
//Define a resposta ao evento de clique no botão Reiniciar
b_reiniciar.addEventListener('click',(event) => {
	for(var i=0;i<9;i++) {
		casas[i].value-'_'; //Limpa todas as casas
		casas[i].style.color='#F7FE2E'; //Torna o valor _ invisível
		casas[i].style.backgroundColor='#F7FE2E'; //Torna o fundo branco
	}
	vencedor = '_'; //Reseta o vencedor
	
	sortearJogador(); //Escolhe aleatoriamente qual jogador irá começar
});

//Usa uma função que decide aleatoriamente o jogar a fazer a primeira jogada
var sortearJogador = function() {
	if(Math.floor(Math.random() * 2)==0) {
			jogador = "W"; //define o jogador O como atual
			label_jogador.innerText="W"; //exibe na página qual é o jogador atual
			label_jogador.style.color='#000080'; //deixa o texto na cor desejada
}else{
		jogador = "C";//define o jogador X como atual
		label_jogador.innerText="C";//exibe na página qual é o jogador atual
		label_jogador.style.color='#000000';//deixa o texto na cor desejada
}
}
sortearJogador(); //Escolhe aleatoriamente o jogador inicial

//Alterna a vez entre os jogadores X e Y
var trocarJogador = function() {
	if(jogador=='W') {
		jogador='C';
		label_jogador.innerText='C';
		label_jogador.style.color='#000080';
		
	}else{
		jogador='W';
		label_jogador.innerText='W';
		label_jogador.style.color='#000000';
	}
}

//Verifica se uma condição de vitória foi atingida e colore a linha da vitória
var vitoria = function() {
		if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_') {
				casas[0].style.backgroundColor='#0F0';
				casas[1].style.backgroundColor='#0F0';
				casas[2].style.backgroundColor='#0F0';
			
				return casas[0].value;
			
	}else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_') {
				casas[3].style.backgroundColor='#0F0';
				casas[4].style.backgroundColor='#0F0';
				casas[5].style.backgroundColor='#0F0';
				
				return casas[3].value;
				
	}else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_') {
				casas[6].style.backgroundColor='#0F0';
				casas[7].style.backgroundColor='#0F0';
				casas[8].style.backgroundColor='#0F0';
				
				return casas[6].value;
				
	}else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_') {
				casas[0].style.backgroundColor='#0F0';
				casas[3].style.backgroundColor='#0F0';
				casas[6].style.backgroundColor='#0F0';
				
				return casas[0].value;
				
	}else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_') {
				casas[1].style.backgroundColor='#0F0';
				casas[4].style.backgroundColor='#0F0';
				casas[7].style.backgroundColor='#0F0';
				
				return casas[1].value;
		
	}else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_') {
				casas[2].style.backgroundColor='#0F0';
				casas[5].style.backgroundColor='#0F0';
				casas[8].style.backgroundColor='#0F0';
				
				return casas[2].value;
				
	}else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_') {
				casas[0].style.backgroundColor='#0F0';
				casas[4].style.backgroundColor='#0F0';
				casas[8].style.backgroundColor='#0F0';
				
				return casas[0].value;
				
				}else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_') {
				casas[2].style.backgroundColor='#0F0';
				casas[4].style.backgroundColor='#0F0';
				casas[6].style.backgroundColor='#0F0';
				
				return casas[2].value;
		}
	return'_';
}