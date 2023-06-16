'use strict'

import { preencherDadosDisciplinasPeloIdDaMatricula } from "./api.js"

const idMatricula = localStorage.getItem('idDaMatricula')
const disciplinas = await preencherDadosDisciplinasPeloIdDaMatricula(idMatricula)

const criarCardDisciplina = (disciplina) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const topContainer = document.createElement('a')
    topContainer.classList.add('top-container')
    topContainer.setAttribute('href', '../pages/tasks.html')
    topContainer.textContent = disciplina.sigla_materia
    topContainer.title = disciplina.nome_materia

    const bottomContainer = document.createElement('div')
    bottomContainer.classList.add('bottom-container-discipline')
   
    const disciplineName = document.createElement('p')
    disciplineName.classList.add('discipline-name')
    disciplineName.textContent = disciplina.nome_materia

    card.append(topContainer, bottomContainer)
    bottomContainer.append(disciplineName)
    
    return card
}

const carregarCardDisciplina = () => {
    const container = document.getElementById('cards-container-discipline')
    const cards = disciplinas.map(criarCardDisciplina)
    container.replaceChildren(...cards)
}

carregarCardDisciplina()