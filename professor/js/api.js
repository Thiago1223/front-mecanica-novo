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
    .then(response => {
        if (response.ok) {
          location.reload()
        } else {
          console.log('Erro ao criar o curso.')
        }
      })
      .catch(error => {
        console.log('Ocorreu um erro na requisição:', error)
      })
    
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

export const deletarDadosCursos = async (idCurso) => {
    const url = `http://localhost:8080/v1/mecanica/curso/${idCurso}`
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

export const criarDadosTurmas = async (turma) => {
    const url = `http://localhost:8080/v1/mecanica/turmas`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(turma)
    }
  
    fetch(url, options)
}

export const atualizarDadosTurmas = async (turma) => {
    const url = `http://localhost:8080/v1/mecanica/turma/${turma.id}`
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(turma)
    }
  
    fetch(url, options)
  
}

export const deletarDadosTurmas = async (idTurma) => {
    const url = `http://localhost:8080/v1/mecanica/turma/${idTurma}`
    const options = {
      method: 'DELETE'
    }
  
    fetch(url, options)
}

// ---------------- DISCIPLINAS --------------------------
export const preencherDadosDisciplinas = async () => {
  const url = `http://localhost:8080/v1/mecanica/materias`
  const response = await fetch(url)
  const data = await response.json()

  return data.materia
}

export const criarDadosDisciplinas = async (materia) => {
  const url = `http://localhost:8080/v1/mecanica/materia`
  const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(materia)
  }

  fetch(url, options)
}

export const atualizarDadosDisciplinas = async (materia) => {
  const url = `http://localhost:8080/v1/mecanica/materia/${materia.id}`
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(materia)
  }

  fetch(url, options)

}

export const deletarDadosDisciplinas = async (idMateria) => {
  const url = `http://localhost:8080/v1/mecanica/turma/${idMateria}`
  const options = {
    method: 'DELETE'
  }

  fetch(url, options)
}

// ---------------- TAREFAS ------------------------------
export const preencherDadosTarefas = async () => {
    const url = `http://localhost:8080/v1/mecanica/tarefas`
    const response = await fetch(url)
    const data = await response.json()

    return data.tarefa
}

// ----------------- PROFESSORES ------------------------------
export const preencherDadosProfessores = async () => {
    const url = `http://localhost:8080/v1/mecanica/professor`
    const response = await fetch(url)
    const data = await response.json()

    return data.professor
}

// ----------------- ALUNOS ------------------------------
export const preencherDadosAlunos = async () => {
    const url = `http://localhost:8080/v1/mecanica/aluno`
    const response = await fetch(url)
    const data = await response.json()

    return data.alunos
}