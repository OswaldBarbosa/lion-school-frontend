'use strict'

import { getAlunos, getAlunosStatus } from "../js/main.js"

const curso = localStorage.getItem('siglaCurso')
const nomeDoCurso = localStorage.getItem('nomeCurso')

const listaAlunosCurso = await getAlunos(curso)
const listaAlunosCursando = await getAlunosStatus('Cursando')
const listaAlunosFinalizado = await getAlunosStatus('Finalizado')

//Função que verifica se o aluno é do curso
const verificacaoAluno = (array) => {
    let listaAlunos = array
    let arrayAlunos = []

    listaAlunos.forEach((aluno) => {
        let jsonAluno = {}
        if (aluno.curso == nomeDoCurso) {
            jsonAluno = {
                nome: aluno.nome,
                foto: aluno.foto,
                matricula: aluno.matricula,
                sexo: aluno.sexo,
                status: aluno.status,
                curso: aluno.curso
            }
            arrayAlunos.push(jsonAluno)
        }
    })
    let informacoes = {
        arrayAlunos
    }
    return informacoes
}


//Função que cria o nome do curso
const criarNomeCurso = () => {
    const containerNomeCurso = document.querySelector('.container-nome-curso')

    const nomeCurso = document.createElement('h1')
    nomeCurso.classList.add('nome-curso')
    nomeCurso.textContent = nomeDoCurso

    containerNomeCurso.append(nomeCurso)

    return containerNomeCurso
}

//Função que cria os cards dos alunos
const criarCards = (aluno) => {
    const cardAluno = document.createElement('div')

    if (aluno.status == "Finalizado") {
        cardAluno.classList.add('card-alunos-finalizado')
    } else {
        cardAluno.classList.add('card-alunos-cursando')
    }

    const imgAluno = document.createElement('img')
    imgAluno.src = `${aluno.foto}`
    imgAluno.classList.add('foto-aluno')

    const nomeAluno = document.createElement('div')
    nomeAluno.classList.add('nome-aluno')
    nomeAluno.textContent = aluno.nome.toUpperCase()

    cardAluno.append(imgAluno, nomeAluno)

    cardAluno.addEventListener('click', () => {
        localStorage.setItem('matricula', aluno.matricula)
        window.location.href = '../alunos/index.html'
    })

    return cardAluno

}

const carregarCard = () => {
    const container = document.querySelector('.container-card-alunos')
    const cards = listaAlunosCurso.alunos.map(criarCards)

    container.replaceChildren(...cards)

    const status = document.getElementById('status')
    const cursando = document.getElementById('cursando')
    const finalizado = document.getElementById('finalizado')

        const inputAnoConclusao = document.getElementById('input-ano')
    inputAnoConclusao.addEventListener('keydown', (enter) => {
        if (enter.key == "Enter") {
            const ano = inputAnoConclusao.value
            const jsonAlunos = alunosAno(listaAlunosCurso.alunos, ano)
            const alunos = jsonAlunos.listaAlunos.map(criarCards)
            container.replaceChildren(...alunos)
        }
    })

    status.onclick = () => {
        filtrarAnoComStatus(listaAlunosCurso.alunos)
    }

    finalizado.onclick = () => {
        filtrarAnoComStatus(listaAlunosFinalizado.alunos)
    }

    cursando.onclick = () => {
        filtrarAnoComStatus(listaAlunosCursando.alunos)
    }

    criarNomeCurso()

}

const filtrarAnoComStatus = (listaArray) =>{
    let lista = listaArray
    const containerCards = document.querySelector('.container-card-alunos')
    const inputYear = document.getElementById('input-ano')
    let jsonAlunos = verificacaoAluno(lista)
    let alunos = jsonAlunos.arrayAlunos.map(criarCards)
    containerCards.replaceChildren(...alunos)
    inputYear.addEventListener('keydown', (e) =>{
        if(e.key == "Enter"){
            const ano = inputYear.value
            const arrayAlunos = alunosAno(lista, ano)
            jsonAlunos = verificacaoAluno(arrayAlunos.listaAlunos)
            alunos = jsonAlunos.arrayAlunos.map(criarCards)
            containerCards.replaceChildren(...alunos)
        }
    })
}

const alunosAno = (array, anoConclusao) => {
    let ano = anoConclusao
    let lista = array
    let jsonAluno = {}
    let listaAlunos = []
    let jsonLista = {}

    lista.forEach((aluno) => {
        if (aluno.anoConclusao == ano) {
            jsonAluno = {
                nome: aluno.nome,
                foto: aluno.foto,
                matricula: aluno.matricula,
                sexo: aluno.sexo,
                status: aluno.status,
                curso: aluno.curso
            }
            listaAlunos.push(jsonAluno)
        }
    })
    jsonLista = {
        listaAlunos
    }
    return jsonLista
}

const voltar = () => {
    const botaoVoltar = document.getElementById('voltar')
    botaoVoltar.onclick = () => {
        window.location.href = '../home/index.html'
    }
}

voltar()

carregarCard()