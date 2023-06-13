'use strict'

import { preencherDadosDisciplinas } from "./api.js"
const disciplinas = await preencherDadosDisciplinas()

const criarCardDisciplina = (disciplina) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const topContainer = document.createElement('a')
    topContainer.classList.add('top-container')
    topContainer.setAttribute('href', '/student')
    topContainer.textContent = disciplina.sigla
    topContainer.title = disciplina.nome
    topContainer.onclick = route

    const bottomContainer = document.createElement('div')
    bottomContainer.classList.add('bottom-container')
   
    const disciplineName = document.createElement('p')
    disciplineName.classList.add('discipline-name')
    disciplineName.textContent = disciplina.nome

    card.append(topContainer, bottomContainer)
    bottomContainer.append(disciplineName)
    
    return card
}

export const carregarCardDisciplina = () => {
    const container = document.getElementById('cards-container-discipline')
    const cards = disciplinas.map(criarCardDisciplina)
    container.replaceChildren(...cards)
}