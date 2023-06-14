'use strict'

import { preencherDadosAlunosPeloIdTurma } from "./api.js"

const idTurma = localStorage.getItem('idDaTurma')
const alunos = await preencherDadosAlunosPeloIdTurma(idTurma)

const criarAluno = (aluno) => {

    const contentList = document.createElement('li')
    contentList.classList.add('container-content')

    const containerLinkStudent = document.createElement('li')
    containerLinkStudent.classList.add('container-link-student')

    const containerLink = document.createElement('div')
    containerLink.classList.add('container-student-link')

    const linkRouteStudentName = document.createElement('a')
    linkRouteStudentName.classList.add('link-route-student')
    linkRouteStudentName.setAttribute('href', '../pages/tasks.html')
    linkRouteStudentName.textContent = aluno.nome_aluno
    linkRouteStudentName.title = aluno.nome_aluno
    linkRouteStudentName.addEventListener('click', () => {
        localStorage.setItem('nomeAluno', aluno.nome_aluno)
        localStorage.setItem('turmaAluno', aluno.sigla_turma)
    })

    const textContentEmail = document.createElement('li')
    textContentEmail.classList.add('text-content-email')
    textContentEmail.textContent = aluno.email_aluno
    textContentEmail.title = aluno.email_aluno

    const textContentClass = document.createElement('li')
    textContentClass.classList.add('text-content-class')
    textContentClass.textContent = aluno.sigla_turma

    const buttonsList = document.createElement('ul')
    buttonsList.classList.add('list-buttons')

    const buttonEdit = document.createElement('a')
    buttonEdit.classList.add('button-edit')
    buttonEdit.textContent = 'Editar'

    const buttonDelete = document.createElement('a')
    buttonDelete.classList.add('button-delete')
    buttonDelete.textContent = 'Deletar'
   
    contentList.append(containerLinkStudent, textContentEmail, textContentClass, buttonsList)
    containerLinkStudent.append(containerLink)
    containerLink.append(linkRouteStudentName)
    buttonsList.append(buttonEdit, buttonDelete)

    return contentList
}

const carregarAluno = () => {
    const container = document.getElementById('list-content')
    const lines = alunos.map(criarAluno)
    container.replaceChildren(...lines)
}

carregarAluno()