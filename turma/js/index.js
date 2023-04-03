'use strict'

import { getAlunos } from "../js/main.js"

const siglaCurso = localStorage.getItem('curso')
const nomecurso = localStorage.getItem('nomeCurso')

const criarNomeCurso = () => {
    const containerCurso = document.querySelector('.container-card-alunos')

    const nome = document.createElement('h1')
    nome.classList.add('nome-curso')
    nome.textContent = nomecurso

    containerCurso.append(nome)

    return containerCurso
}

const carregarNome = () => {
    criarNomeCurso()
}

carregarNome()