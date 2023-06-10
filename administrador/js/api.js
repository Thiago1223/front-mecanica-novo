'use strict'

// ----------------- CURSOS ------------------------------
export const preencherDadosCursos = async () => {
    const url = `http://localhost:8080/v1/mecanica/cursos`
    const response = await fetch(url)
    const data = await response.json()

    return data.curso
}

export const criarDadosCursos = async (curso) => {
    const url = `http://localhost:8080/v1/mecanica/curso`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(curso)
    }
  
    fetch(url, options)
}

export const atualizarDadosCursos = async (curso) => {
    const url = `http://localhost:8080/v1/mecanica/curso/${curso.id}`
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(curso)
    }
  
    fetch(url, options)
  
}

export const deletarDadosCursos = async (idAluno) => {
    const url = `http://localhost:8080/v1/mecanica/curso/${idAluno}`
    const options = {
      method: 'DELETE'
    }
  
    fetch(url, options)
}

// ----------------- TURMAS ------------------------------
export const preencherDadosTurmas = async () => {
    const url = `http://localhost:8080/v1/mecanica/turmas`
    const response = await fetch(url)
    const data = await response.json()

    return data.turmas
}

export const preencherDadosDisciplinas = async () => {
    const url = `http://localhost:8080/v1/mecanica/materias`
    const response = await fetch(url)
    const data = await response.json()

    return data.materia
}

export const preencherDadosTarefas = async () => {
    const url = `http://localhost:8080/v1/mecanica/tarefas`
    const response = await fetch(url)
    const data = await response.json()

    return data.tarefa
}