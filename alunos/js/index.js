'use strict'

import { getMatriculaAluno } from "../js/main.js"

const matricula = localStorage.getItem('matricula')
const matriculaAluno = await getMatriculaAluno(matricula)

const criarCard = () => {
    if (matriculaAluno.matricula == matricula) {
        const cardAluno = document.createElement('div')
        cardAluno.classList.add('card-aluno')

        const fotoAluno = document.createElement('img')
        fotoAluno.classList.add('foto-aluno')
        fotoAluno.src = matriculaAluno.foto
        fotoAluno.alt = 'Foto do Aluno'

        const nomeAluno = document.createElement('p')
        nomeAluno.classList.add('nome-aluno')
        nomeAluno.textContent = matriculaAluno.nome

        cardAluno.append(fotoAluno, nomeAluno)

        return cardAluno
    }
}

const criarGrafico = () => {
    if (matriculaAluno.matricula == matricula) {
        const cardNotas = document.createElement('div')
        cardNotas.classList.add('card-notas')

        const boxNotas = document.createElement('div')
        boxNotas.classList.add('box-notas')

        matriculaAluno.disciplinas.forEach(function (disciplinas) {
            const notaAluno = document.createElement('div')
            notaAluno.classList.add('nota-aluno')

            const textNota = document.createElement('p')
            textNota.textContent = disciplinas.media

            const tamanhoNota = document.createElement('div')
            tamanhoNota.classList.add("tamanho-nota")

            const barraNota = document.createElement('div')
            const valor = parseInt(textNota.textContent)

            if (parseInt(textNota.textContent) >= 70 && parseInt(textNota.textContent) <= 100) {
                textNota.classList.add('porcentagem-nota-aprovado')
                barraNota.classList.add('nota-aprovado')
            } else if (parseInt(textNota.textContent) >= 0 && parseInt(textNota.textContent) <= 60) {
                textNota.classList.add('porcentagem-nota-reprovado')
                barraNota.classList.add('nota-reprovado')
            } else if (parseInt(textNota.textContent) >= 61 && parseInt(textNota.textContent) <= 69) {
                textNota.classList.add('porcentagem-nota-exame')
                barraNota.classList.add('nota-exame')
            }

            const altura = `${(valor / 50) * 50}%`
            barraNota.style.height = altura

            const materia = document.createElement('p')
            materia.classList.add('sigla-disciplina')
            materia.textContent = disciplinas.sigla

            tamanhoNota.append(barraNota)
            notaAluno.append(textNota, tamanhoNota, materia)
            boxNotas.append(notaAluno)
        });

        cardNotas.append(boxNotas)
        return cardNotas
    }
}

const voltar = () => {
    const buttonVoltar = document.getElementById('voltar')
    buttonVoltar.onclick = () => {
        window.location.href = '../turma/turma.html'
    } 
}

const carregarCard = () => {
    const container = document.getElementById('container-aluno')
    const card = criarCard()

    container.append(card)
}

const carregarGrafico = () => {
    const container = document.getElementById('container-grafico')
    const grafico = criarGrafico()

    container.append(grafico)
}

carregarCard()

carregarGrafico()

voltar()