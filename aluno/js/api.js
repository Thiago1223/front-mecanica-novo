'use strict'

export const preencherDadosDisciplinas = async () => {
    const url = `https://projeto-mecanica.cyclic.app/v1/mecanica/materias`
    const response = await fetch(url)
    const data = await response.json()

    return data.materia
}

export const preencherDadosDisciplinasPeloIdDaMatricula = async (idMatricula) => {
    const url = `https://projeto-mecanica.cyclic.app/v1/mecanica/turma/materia/matricula/idMatricla/${idMatricula}`
    const response = await fetch(url)
    const data = await response.json()

    return data.turma_materia_da_matricula
}

export const preencherDadosTarefas = async () => {
    const url = `http://localhost:8080/v1/mecanica/tarefas`
    const response = await fetch(url)
    const data = await response.json()

    return data.tarefa
}

export const preencherDadosTarefasPeloIdDisciplina = async (idDisciplina) => {
    const url = `https://projeto-mecanica.cyclic.app/v1/mecanica/tarefa/materia/idMateria/${idDisciplina}`
    const response = await fetch(url)
    const data = await response.json()
  
    return data.tarefas_da_materia
  }