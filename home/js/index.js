'use strict'

import { getCursos } from "../js/main.js"

const apiCursos = await getCursos()

const criarCardCursos = (cursos) => {
    const card = document.createElement('div')
    card.classList.add('container-cursos')

    const iconCurso = document.createElement('img')
    iconCurso.classList.add('image-curso')
    iconCurso.src = `${cursos.icone}`

    const siglaCurso = document.createElement('p')
    siglaCurso.classList.add('sigla-curso')
    siglaCurso.textContent = cursos.sigla

    card.append(iconCurso, siglaCurso)

    return card
}

const alunosDs = () => {
    const novaJanela = document.getElementById('container')
    novaJanela.onclick = function () {
        window.location.href = "../turma/index.html"
    }
}

const sair = () => {
    const botaoSair = document.getElementById('sair')
    botaoSair.onclick = function () {
        window.close
    }
}

const carregarCursos = () => {
    const container = document.getElementById('container')
    const cards = apiCursos.cursos.map(criarCardCursos)

    container.replaceChildren(...cards)
}

alunosDs()

sair()

carregarCursos()