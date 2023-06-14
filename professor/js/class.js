'use strict'

import { preencherDadosTurmas } from "./api.js"
const turmas = await preencherDadosTurmas()

const criarCardTurma = (turma) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const topContainer = document.createElement('a')
    topContainer.classList.add('top-container')
    topContainer.setAttribute('href', './discipline.html')
    topContainer.textContent = turma.sigla
    topContainer.title = turma.nome

    const bottomContainer = document.createElement('div')
    bottomContainer.classList.add('bottom-container')

    const className = document.createElement('p')
    className.classList.add('class-name')
    className.textContent = turma.nome
   
    card.append(topContainer, bottomContainer)
    bottomContainer.append(className)

    return card
}

export const carregarCardTurma = () => {
    const container = document.getElementById('cards-container-class')
    const cards = turmas.map(criarCardTurma)
    container.replaceChildren(...cards)
}

carregarCardTurma()