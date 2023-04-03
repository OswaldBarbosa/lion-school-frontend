'use strict'

export const getAlunos = async () => {
    const url = `https://lion-scholl.cyclic.app/v1/lion-school/alunos?curso=${curso}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}