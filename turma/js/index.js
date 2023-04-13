'use strict'

import { getAlunos, getAlunosStatusECurso } from "../js/main.js"

const alunos = await getAlunos()

const nomeDoCurso = localStorage.getItem('nomeCurso')

const criarNomeCurso = () => {
    const containerNomeCurso = document.querySelector('.container-nome-curso')

    const nomeCurso = document.createElement('h1')
    nomeCurso.classList.add('nome-curso')
    nomeCurso.textContent = nomeDoCurso

    containerNomeCurso.append(nomeCurso)

    return containerNomeCurso
}

const criarCard = (aluno) => {
    const card = document.createElement('div')
    card.classList.add('card');

    if (aluno.status == 'Cursando') {
        card.classList.add('card-alunos-cursando')
    } else {
        card.classList.add('card-alunos-finalizado')
    }

    const foto = document.createElement('img')
    foto.classList.add('foto-aluno')
    foto.src = `${aluno.foto}`
    foto.alt = 'Foto do Aluno'

    const nome = document.createElement('h2')
    nome.classList.add('nome-aluno')
    nome.textContent = aluno.nome.toUpperCase()

    const matricula = document.createElement('span')
    matricula.textContent = aluno.matricula

    card.append(foto, nome)

    card.addEventListener('click', () => {
        localStorage.setItem('matricula', matricula.textContent)
        localStorage.setItem('nome', nome.textContent)
        window.location.href = "../alunos/index.html"
    })

    return card
}

const filtrandoPorStatus = () => {
    const cardsStatus = document.querySelectorAll('.card-');
    cardsStatus.forEach(button => {

        const buttonClicado = button.id;
        button.addEventListener('click', async () => {
            if (button.id == "status") {
                carregarCard()
            } else {
                const retorna = await getAlunosStatusECurso(buttonClicado)
                const cardJSON = retorna.aluno.map(criarCard);
                const card = document.getElementById('container-card-alunos')
                card.replaceChildren(...cardJSON)
            }

        });

    });

}

const voltar = () => {
    const buttonVoltar = document.getElementById('voltar')
    buttonVoltar.onclick = () => {
        window.location.href = '../home/index.html'
    }
}

const carregarCard = () => {
    const container = document.getElementById('container-card-alunos')
    const cards = alunos.aluno.map(criarCard)

    container.replaceChildren(...cards)
}

criarNomeCurso()

carregarCard()

filtrandoPorStatus()

voltar()