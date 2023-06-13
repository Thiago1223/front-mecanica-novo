'use strict'

import { preencherDadosCursos } from "../../administrador/js/api.js"

const idCurso = localStorage.getItem('idDoCurso')
const cursos = await preencherDadosCursos()

const criarCardCurso = (curso) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const topContainer = document.createElement('a')
    topContainer.classList.add('top-container')
    topContainer.setAttribute('href', '/class')
    topContainer.textContent = curso.nome
    topContainer.onclick = route

    const bottomContainer = document.createElement('div')
    bottomContainer.classList.add('bottom-container')
   
    card.append(topContainer, bottomContainer)

    return card
}

export const carregarCardCurso = () => {
    const container = document.getElementById('cards-container-course')
    const cards = cursos.map(criarCardCurso)
    container.replaceChildren(...cards)
}
