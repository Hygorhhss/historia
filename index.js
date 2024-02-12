const perguntas = [
    {
        pergunta: "Quem foi o primeiro imperador romano?",
        respostas: [
            "Julio César",
            "Augusto",
            "Nero",
        ],
        correta: 1
    },
    {
        pergunta: "Qual foi o evento que marcou o início da Revolução Francesa?",
        respostas: [
            "A execução de Luís XVI",
            "A Queda da Bastilha",
            "A Marcha das Mulheres sobre Versalhes",
        ],
        correta: 1
    },
    {
        pergunta: "Quem foi o líder da Revolução Russa de 1917?",
        respostas: [
            "Lenin",
            "Stalin",
            "Trotsky",
        ],
        correta: 0
    },
    {
        pergunta: "Qual foi o período histórico conhecido como 'Idade das Trevas'?",
        respostas: [
            "Renascimento",
            "Idade Média",
            "Idade Antiga",
        ],
        correta: 1
    },
    {
        pergunta: "Quem foi o líder do movimento de independência da Índia?",
        respostas: [
            "Mahatma Gandhi",
            "Jawaharlal Nehru",
            "Indira Gandhi",
        ],
        correta: 0
    },
    {
        pergunta: "Qual foi a causa principal da Primeira Guerra Mundial?",
        respostas: [
            "A ascensão do nacionalismo",
            "O assassinato do arquiduque Franz Ferdinand",
            "A corrida armamentista",
        ],
        correta: 1
    },
    {
        pergunta: "Quem foi o líder da Revolução Cubana?",
        respostas: [
            "Fidel Castro",
            "Che Guevara",
            "Raul Castro",
        ],
        correta: 0
    },
    {
        pergunta: "Qual foi a dinastia que governou a China durante a construção da Grande Muralha?",
        respostas: [
            "Han",
            "Ming",
            "Qin",
        ],
        correta: 2
    },
    {
        pergunta: "Quem foi o último imperador do Império Romano?",
        respostas: [
            "Constantino",
            "Nero",
            "Rômulo Augusto",
        ],
        correta: 2
    },
    {
        pergunta: "Qual foi o tratado que encerrou oficialmente a Primeira Guerra Mundial?",
        respostas: [
            "Tratado de Versalhes",
            "Tratado de Brest-Litovski",
            "Tratado de Tordesilhas",
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas




// loop ou laço de repetição
//para colocar todas perguntas completas e individuais
for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  //colocando as respostas na tela para selecionar
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector("input").setAttribute('name', 'pergunta-' +perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }


    quizItem.querySelector('dl').appendChild(dt)
  }

  //tirando o *Resposta A
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}

