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
    .then(response => {
      if (response.ok) {
        location.reload()
      } else {
        console.log('Erro ao atualizar o curso.')
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error)
    })

}

export const deletarDadosCursos = async (idCurso) => {
  const url = `http://localhost:8080/v1/mecanica/curso/${idCurso}`
  const options = {
    method: 'DELETE'
  }

  fetch(url, options)
    .then(response => {
      if (response.ok) {
        location.reload()
      } else {
        console.log('Erro ao deletar o curso.')
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error)
    })
}

// ----------------- TURMAS ------------------------------
export const preencherDadosTurmas = async () => {
  const url = `http://localhost:8080/v1/mecanica/turmas`
  const response = await fetch(url)
  const data = await response.json()

  return data.turmas
}

export const preencherDadosTurmasPeloIdCurso = async (idCurso) => {
  const url = `http://localhost:8080/v1/mecanica/turma/idCurso/${idCurso}`
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
    .then(response => {
      if (response.ok) {
        location.reload()
      } else {
        console.log('Erro ao criar a turma.')
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error)
    })
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
    .then(response => {
      if (response.ok) {
        location.reload()
      } else {
        console.log('Erro ao atualizar a turma.')
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error)
    })

}

export const deletarDadosTurmas = async (idTurma) => {
  const url = `http://localhost:8080/v1/mecanica/turma/${idTurma}`
  const options = {
    method: 'DELETE'
  }

  fetch(url, options)
    .then(response => {
      if (response.ok) {
        location.reload()
      } else {
        console.log('Erro ao deletar a turma.')
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error)
    })
}

// ---------------- DISCIPLINAS --------------------------
export const preencherDadosDisciplinas = async () => {
  const url = `http://localhost:8080/v1/mecanica/materias`
  const response = await fetch(url)
  const data = await response.json()

  return data.materia
}

export const preencherDadosDisciplinasPeloIdTurma = async (idTurma) => {
  const url = `http://localhost:8080/v1/mecanica/materia/idTurma/${idTurma}`
  const response = await fetch(url)
  const data = await response.json()

  return data.materiasDaTurma
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
    .then(response => {
      if (response.ok) {
        location.reload()
      } else {
        console.log('Erro ao criar a matéria.')
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error)
    })
}

export const atualizarDadosDisciplinas = async (turma) => {
  const url = `http://localhost:8080/v1/mecanica/turma/${turma.id}`
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(turma)
  }

  fetch(url, options)
    .then(response => {
      if (response.ok) {
        location.reload()
      } else {
        console.log('Erro ao atualizar a disciplina.')
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error)
    })

}

export const deletarDadosDisciplinas = async (idDisciplina) => {
  const url = `http://localhost:8080/v1/mecanica/turma/${idDisciplina}`
  const options = {
    method: 'DELETE'
  }

  fetch(url, options)
    .then(response => {
      if (response.ok) {
        location.reload()
      } else {
        console.log('Erro ao deletar a disciplina.')
      }
    })
    .catch(error => {
      console.log('Ocorreu um erro na requisição:', error)
    })
}

// ----------------- ALUNOS ------------------------------
export const preencherDadosAlunos = async () => {
  const url = `http://localhost:8080/v1/mecanica/aluno`
  const response = await fetch(url)
  const data = await response.json()

  return data.alunos
}

export const preencherDadosAlunosPeloIdTurma = async (idTurma) => {
  const url = `http://localhost:8080/v1/mecanica/alunos/turma/idTurma/${idTurma}`
  const response = await fetch(url)
  const data = await response.json()

  return data.alunosDaTurma
}

// ---------------- TAREFAS ------------------------------
export const preencherDadosTarefas = async () => {
  const url = `http://localhost:8080/v1/mecanica/tarefas`
  const response = await fetch(url)
  const data = await response.json()

  return data.tarefa
}

export const preencherDadosTarefasPeloIdDisciplina = async (idDisciplina) => {
  const url = `http://localhost:8080/v1/mecanica/tarefa/materia/idMateria/${idDisciplina}`
  const response = await fetch(url)
  const data = await response.json()

  return data.tarefas_da_materia
}

// ----------------- PROFESSORES ------------------------------
export const preencherDadosProfessores = async () => {
  const url = `http://localhost:8080/v1/mecanica/professor`
  const response = await fetch(url)
  const data = await response.json()

  return data.professor
}