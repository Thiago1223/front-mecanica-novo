'use strict'

import { preencherDadosAlunos } from "./api.js"
const alunos = await preencherDadosAlunos()

const criarAluno = (aluno) => {

    const table = document.createElement('div')
    table.classList.add('table-container')

    const listTitle = document.createElement('ul')
    listTitle.classList.add('list-title')

    const textTitleName = document.createElement('li')
    textTitleName.classList.add('text-title-name')
    textTitleName.textContent = "Nome"

    const textTitleEmail = document.createElement('li')
    textTitleEmail.classList.add('text-title-email')
    textTitleEmail.textContent = "Email"

    const textTitleDiscipline = document.createElement('li')
    textTitleDiscipline.classList.add('text-title-discipline')
    textTitleDiscipline.textContent = "Disciplina"

    const textTitleAction = document.createElement('li')
    textTitleAction.classList.add('text-title-action')
    textTitleAction.textContent = "Ação"

    const contentList = document.createElement('ul')
    contentList.classList.add('list-content')

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
    textContentEmail.classList.add('text-content-email')
    textContentEmail.textContent = aluno.email

    const textContentDiscipline = document.createElement('li')
    textContentDiscipline.classList.add('text-content-discipline')
    textContentDiscipline.textContent = aluno.disciplina

    const buttonsList = document.createElement('ul')
    buttonsList.classList.add('list-buttons')

    const buttonEdit = document.createElement('a')
    buttonEdit.classList.add('button-edit')
    buttonEdit.textContent = 'Editar'

    const buttonDelete = document.createElement('li')
    buttonDelete.classList.add('button-delete')
    buttonDelete.textContent = 'Deletar'
   
    table.append(listTitle, contentList)
    listTitle.append(textTitleName, textTitleEmail, textTitleDiscipline, textTitleAction)
    contentList.append(containerLinkStudent, textContentEmail, textContentDiscipline, buttonsList)
    containerLinkStudent.append(containerLink)
    containerLink.append(linkRouteStudentName)
    buttonsList.append(buttonEdit, buttonDelete)

    return table
}

export const carregarAluno = () => {
    const container = document.getElementById('table-container')
    const lines = alunos.map(criarAluno)
    container.replaceChildren(...lines)
}