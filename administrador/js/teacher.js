'use strict'

import { preencherDadosProfessores } from "./api.js"
const professores = await preencherDadosProfessores()

const criarProfessor = (professor) => {

    const contentList = document.createElement('li')
    contentList.classList.add('container-content')

    const textContentName = document.createElement('li')
    textContentName.classList.add('text-content-name')
    textContentName.textContent = professor.nome

    const textContentEmail = document.createElement('li')
    textContentEmail.classList.add('text-content-email')
    textContentEmail.textContent = professor.email
    textContentEmail.title = professor.email

    const textContentDiscipline = document.createElement('li')
    textContentDiscipline.classList.add('text-content-nife')
    textContentDiscipline.textContent = professor.nife

    const buttonsList = document.createElement('ul')
    buttonsList.classList.add('list-buttons')

    const buttonEdit = document.createElement('a')
    buttonEdit.classList.add('button-edit')
    buttonEdit.textContent = 'Editar'

    const buttonDelete = document.createElement('a')
    buttonDelete.classList.add('button-delete')
    buttonDelete.textContent = 'Deletar'
   
    contentList.append(textContentName, textContentEmail, textContentDiscipline, buttonsList)
    buttonsList.append(buttonEdit, buttonDelete)

    return contentList
}

const carregarProfessor = () => {
    const container = document.getElementById('list-content-teacher')
    const lines = professores.map(criarProfessor)
    container.replaceChildren(...lines)
}

carregarProfessor()