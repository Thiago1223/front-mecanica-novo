'use strict'

import { preencherDadosAlunosPeloIdTurma } from "./api.js"

const alunos = await preencherDadosAlunosPeloIdTurma(idTurma)

const criarCriterio = (criterio) => {

    
}

const carregarAluno = () => {
    const container = document.getElementById('list-content')
    const lines = alunos.map(criarAluno)
    container.replaceChildren(...lines)
}

carregarAluno()