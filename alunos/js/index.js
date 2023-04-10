'use strict'

import { getMatriculaAluno } from "../js/main.js"

const matriculaAluno = await getMatriculaAluno()

const criarCardAluno = (matricula) => {
    const cardAluno = document.createElement('div')
    cardAluno.classList.add('container-aluno')
    cardAluno.title

    const imgAluno = document.createElement('img')
    imgAluno.classList.add('img-aluno')
    imgAluno.src = matricula.foto

    const nomeAluno = document.createElement('p')
    nomeAluno.classList.add('name-aluno')
    nomeAluno.textContent = matricula.aluno.nome

    cardAluno.append(imgAluno, nomeAluno)

    return cardAluno
}

const criarCardGrafico = () => {
    const cardGrafico = document.createElement('div')
    cardGrafico.classList.add('container-grafico')

    const numeros = document.createElement('div')
    numeros.classList.add('numeros')

    const chart = document.createElement('div')
    chart.classList.add('chart')

    const nomesDisciplinas = document.createElement('div')
    nomesDisciplinas.classList.add('nomes')

    matriculaAluno.aluno.curso[0].disciplinas.forEach(disciplina => {

        // numeros do grafico
        const numerosGrafico = document.createElement('span')
        numerosGrafico.classList.add()
        numerosGrafico.textContent = disciplina.media

        numeros.append(numerosGrafico)

        //valores do grafico
        const preenchimento = document.createElement('div')
        preenchimento.classList.add('preenchimento')

        const valor = document.createElement('div')
        valor.classList.add('bar')
        valor.setAttribute('title', disciplina.nome);

        // const tooltipText = document.createElement('title');
        // tooltipText.classList.add('tooltip-text');
        // tooltipText.textContent = disciplina.sigla;
        // tooltipText.setAttribute('title', disciplina.sigla);

        // valor.append(tooltipText);

        // valor.addEventListener('mouseover', function() {
        //     tooltipText.style.display = 'inline-block';
        //   });
          
        //   valor.addEventListener('mouseout', function() {
        //     tooltipText.style.display = 'none';
        //   });

        setTimeout(() => {
            valor.style.height = disciplina.media + '%'
        }, 100);

        if (disciplina.media < 50) {
            valor.classList.add('barra-vermelho')
        } else if (disciplina.media >= 50 && disciplina.media <= 70) {
            valor.classList.add('barra-amarelo')
        }

        chart.append(preenchimento)
        preenchimento.append(valor)

        //sigla de todas as materias
        const nomesGrafico = document.createElement('span')
        nomesGrafico.classList.add()
        nomesGrafico.textContent = disciplina.sigla

        nomesDisciplinas.append(nomesGrafico)

        if (disciplina.media < 50) {
            numerosGrafico.classList.add('numeroNome-Vermelho')
            nomesGrafico.classList.add('numeroNome-Vermelho')
        } else if (disciplina.media >= 50 && disciplina.media <= 70) {
            numerosGrafico.classList.add('numeroNome-Amarelo')
            nomesGrafico.classList.add('numeroNome-Amarelo')
        }

    })

    cardGrafico.append(numeros)
    cardGrafico.append(chart)
    cardGrafico.append(nomesDisciplinas)

    return cardGrafico
}

const carregarCard = () => {
    const cardsAlunos = document.getElementById('container-aluno-grafico')
    const containerAluno = criarCardAluno(matriculaAluno)
    const containerGrafico = criarCardGrafico(matriculaAluno)
    cardsAlunos.append(containerAluno, containerGrafico)
}

carregarCard()


const voltar = () => {
    const botaoVoltar = document.getElementById('voltar')
    botaoVoltar.onclick = () => {
        window.location.href = '../turma/index.html'
    }
}

voltar()