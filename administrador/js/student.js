'use strict'

import { preencherDadosAlunos } from "./api.js"
const alunos = await preencherDadosAlunos()

const criarAluno = (aluno) => {

    const contentList = document.createElement('li')
    contentList.classList.add('container-content')

    const containerLinkStudent = document.createElement('li')
    containerLinkStudent.classList.add('container-link-student')

    const containerLink = document.createElement('div')
    containerLink.classList.add('container-link')

    const linkRouteStudentName = document.createElement('a')
    linkRouteStudentName.classList.add('link-route-student')
    linkRouteStudentName.setAttribute('href', '/task')
    linkRouteStudentName.textContent = aluno.nome
    linkRouteStudentName.onclick = route

    const textContentEmail = document.createElement('li')
    textContentEmail.classList.add('text-content')
    textContentEmail.textContent = aluno.email

    const textContentDiscipline = document.createElement('li')
    textContentDiscipline.classList.add('text-content')
    textContentDiscipline.textContent = 'DS2T'

    const buttonsList = document.createElement('ul')
    buttonsList.classList.add('list-buttons')

    const buttonEdit = document.createElement('a')
    buttonEdit.classList.add('button-edit')
    buttonEdit.textContent = 'Editar'

    const buttonDelete = document.createElement('li')
    buttonDelete.classList.add('button-delete')
    buttonDelete.textContent = 'Deletar'
   
    contentList.append(containerLinkStudent, textContentEmail, textContentDiscipline, buttonsList)
    containerLinkStudent.append(containerLink)
    containerLink.append(linkRouteStudentName)
    buttonsList.append(buttonEdit, buttonDelete)

    return contentList
}

export const carregarAluno = () => {
    const container = document.getElementById('list-content')
    const lines = alunos.map(criarAluno)
    container.replaceChildren(...lines)
}