'use strict'

import { cursos } from "../js/cursos.js"

const sair = () => {
    const botaoSair = document.getElementById('sair')
    botaoSair.onclick = function () {
        window.close()
        console.log('teste')
    }
}

const criarCardCursos = (cursos , indice) => {
    const card = document.createElement('div')
    card.classList.add('container-cursos')

    const iconCurso = document.createElement('img')
    iconCurso.classList.add('image-curso')
    iconCurso.src = `./${cursos.icone}`

    const siglaCurso = document.createElement('p')
    siglaCurso.classList.add('sigla-curso')
    siglaCurso.textContent = cursos.sigla

    card.append(iconCurso, siglaCurso)

    return card

}

const carregarCursos = () => {
    const container = document.getElementById('container')
    const cards = cursos.map(criarCardCursos)

    container.replaceChildren(...cards)
}

sair()

carregarCursos()

