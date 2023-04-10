'use strict'

export const getAlunos = async (cursoPesquisado) => {
    const url = `https://lion-scholl.cyclic.app/v1/lion-school/alunos?curso=${cursoPesquisado}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getAlunosStatus = async (statusAlunos) => {
    const url = `https://lion-scholl.cyclic.app/v1/lion-school/alunos?status=${statusAlunos}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}