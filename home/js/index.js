'use strict'

import { getCursos } from "../js/main.js"

const curso = await getCursos()

const criarCardCursos = (curso) => {
    const card = document.createElement('div')
    card.classList.add('card-cursos')

    const iconCurso = document.createElement('img')
    iconCurso.classList.add('image-curso')
    iconCurso.src = `${curso.icone}`
    iconCurso.alt = 'Icone dos Curso'

    const siglaCurso = document.createElement('p')
    siglaCurso.classList.add('sigla-curso')
    siglaCurso.textContent = curso.sigla

    card.append(iconCurso, siglaCurso)

    card.addEventListener('click', () => {
        localStorage.setItem('nomeCurso', curso.nome)
        localStorage.setItem('siglaCurso', curso.sigla)
        window.location.href = `../turma/index.html`
    })

    return card

}

const sair = () => {
    const botaoSair = document.getElementById('sair')
    botaoSair.onclick = () => {
        window.close()
    }
}

const carregarCursos = () => {
    const container = document.getElementById('container')
    const cards = curso.cursos.map(criarCardCursos)

    container.replaceChildren(...cards)
}

carregarCursos()

sair()