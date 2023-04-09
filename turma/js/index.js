'use strict'

import { getAlunos } from "../js/main.js"
import { getAlunosStatus } from "../js/main.js"

const nomeCurso = localStorage.getItem('nomeCurso')

const alunosCurso = await getAlunos('curso')
const alunos = await getAlunosStatus()

const criarTitulo = () => {
    const containerTitulo = document.querySelector('.container-nome-curso')

    const titulo = document.createElement('h1')
    titulo.classList.add('nome-curso')
    titulo.textContent = nomeCurso

    containerTitulo.append(titulo)

    return containerTitulo
}

const criarCard = (aluno) => {
    const containerCard = document.createElement('div')
    containerCard.classList.add('container-card-alunos')

    const cardAluno = document.createElement('a')
    cardAluno.classList.add('card-alunos')
    cardAluno.href = '../alunos/index.html'

    if (aluno.status == 'Cursando') {
        cardAluno.classList.add('card-alunos-cursando')
    } else {
        cardAluno.classList.add('card-alunos-finalizado')
    }

    const fotoAluno = document.createElement('img')
    fotoAluno.classList.add('foto-aluno')
    fotoAluno.src = `${aluno.foto}`
    fotoAluno.alt = 'Foto dos Alunos'

    const nomeAluno = document.createElement('p')
    nomeAluno.classList.add('nome-aluno')
    nomeAluno.textContent = aluno.nome.toUpperCase()

    containerCard.append(cardAluno)
    cardAluno.append(fotoAluno, nomeAluno)

    cardAluno.addEventListener('click', () => {
        localStorage.setItem('matriculaAluno', matricula.textContent)
    })

    return cardAluno
}

const CursandoEFinalizado = () => {
    const buttons = document.querySelectorAll('.container-card-alunos');

    buttons.forEach(button => {
        button.addEventListener('click', async () => {

            const idClicado = button.id;

            if (button.id == "status") {
                carregarCard()
            } else {
                const retorna = await getAlunosStatus(idClicado)
                const cardJSON = retorna.aluno.map(criarCard);
                const card = document.getElementById('container-card-alunos')

                card.replaceChildren(...cardJSON)
            }

        })

    })

}

const voltar = () => {
    const botaoVoltar = document.getElementById('voltar')
    botaoVoltar.onclick = () => {
        window.location.href = '../home/index.html'
    }
}

const carregarCard = () => {
    const container = document.getElementById('container-card-alunos')
    const card = alunosCurso.alunos.map(criarCard)

    container.append(...card)

    // criarTitulo()

}

CursandoEFinalizado()

carregarCard()

voltar()