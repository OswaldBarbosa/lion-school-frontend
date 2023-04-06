'use strict'

const siglaCurso = localStorage.getItem('siglaCurso')

export const getAlunos = async () => {
    const url = `https://lion-scholl.cyclic.app/v1/lion-school/alunos?curso=${siglaCurso}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getAlunosStatus = async (status) => {
    const url = `https://lion-scholl.cyclic.app/v1/lion-school/alunos?status=${status}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}