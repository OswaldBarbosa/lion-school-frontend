var listaAlunos = require('./alunos.js')
var listaCursos = require('./cursos.js')

const getCursos = function () {
    let novoJson = {}
    let novoArray = []

    listaCursos.cursos.forEach(function (itemCurso){
        let jsonInfo = {}
        jsonInfo.nome = itemCurso.nome,
        jsonInfo.sigla = itemCurso.sigla,
        jsonInfo.icone = itemCurso.icone,
        jsonInfo.carga = itemCurso.carga

        novoArray.push(jsonInfo)
    })

    novoJson.cursos = novoArray
    return novoJson
    
}


module.exports = {
    getCursos
}