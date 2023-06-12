'use strict'

import { preencherDadosProfessores } from "./api.js"
const professores = await preencherDadosProfessores()

const criarProfessor = (professor) => {

    const table = document.createElement('div')
    table.classList.add('table-container')

    const contentList = document.createElement('ul')
    contentList.classList.add('list-content')

    const textContentName = document.createElement('li')
    textContentName.classList.add('text-content-name')
    textContentName.textContent = professor.nome

    const textContentEmail = document.createElement('li')
    textContentEmail.classList.add('text-content-email')
    textContentEmail.textContent = professor.email

    const textContentDiscipline = document.createElement('li')
    textContentDiscipline.classList.add('text-content-name')
    textContentDiscipline.textContent = professor.disciplina

    const buttonsList = document.createElement('ul')
    buttonsList.classList.add('list-buttons')

    const buttonEdit = document.createElement('a')
    buttonEdit.classList.add('button-edit')
    buttonEdit.textContent = 'Editar'

    const buttonDelete = document.createElement('li')
    buttonDelete.classList.add('button-delete')
    buttonDelete.textContent = 'Deletar'
   
    table.append(contentList)
    contentList.append(textContentName, textContentEmail, textContentDiscipline)
    buttonsList.appendChild(buttonEdit, buttonDelete)

    return table

}

export const carregarProfessor = () => {
    const container = document.getElementById('table-container')
    const lines = professores.map(criarProfessor)
    container.replaceChildren(...lines)
}