'use strict'

import { preencherDadosTurmas } from "./api.js"
const turmas = await preencherDadosTurmas()

const criarCardTurma = (turma) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const topContainer = document.createElement('a')
    topContainer.classList.add('top-container')
    topContainer.setAttribute('href', '/discipline')
    topContainer.textContent = turma.sigla
    topContainer.title = turma.nome
    topContainer.onclick = route

    const bottomContainer = document.createElement('div')
    bottomContainer.classList.add('bottom-container')

    const buttonEdit = document.createElement('a')
    buttonEdit.classList.add('button-edit')

    const imgEdit = document.createElement('img')
    imgEdit.classList.add('img-edit')
    imgEdit.src = '../../img/button_edit.png'

    const buttonDelete = document.createElement('div')
    buttonDelete.classList.add('button-delete')

    const imgDelete = document.createElement('img')
    imgDelete.classList.add('img-delete')
    imgDelete.src = '../../img/button_delete.png'
   
    card.append(topContainer, bottomContainer)
    bottomContainer.append(buttonEdit, buttonDelete)
    buttonEdit.appendChild(imgEdit)
    buttonDelete.appendChild(imgDelete)

    return card

}

export const carregarCardTurma = () => {
    const container = document.getElementById('cards-container-class')
    const cards = turmas.map(criarCardTurma)
    container.replaceChildren(...cards)
}