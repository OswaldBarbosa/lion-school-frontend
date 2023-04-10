'use strict'

export const getMatriculaAluno = async (matricula) => {
    const url = `https://lion-scholl.cyclic.app/v1/lion-school/aluno/${matricula}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}