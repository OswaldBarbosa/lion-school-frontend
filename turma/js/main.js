'use strict'

const siglaCurso = localStorage.getItem('siglaCurso')

export const getAlunos = async () => {
    const url = `https://lion-school-backend.cyclic.app/v1/lion-school/alunos?curso=${siglaCurso}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getAlunosStatusECurso = async (idDoBotaoClicado) => {
    const url = `https://lion-school-backend.cyclic.app/v1/lion-school/alunos?status=${idDoBotaoClicado}&curso=${siglaCurso}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}