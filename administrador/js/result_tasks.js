'use strict'

import { preencherDadosCriteriosPeloIdTarefa } from "./api.js"

const idTarefa = localStorage.getItem('idDaTarefa')
const nomeTarefa = localStorage.getItem('nomeDaTarefa')
const criterios = await preencherDadosCriteriosPeloIdTarefa(idTarefa)

const criarHeaderCriterio = () => {

    const headerContainer = document.createElement('div')

    const titleContainer = document.createElement('div')
    titleContainer.classList.add('title-container')

    const imgHashtag = document.createElement('img')
    imgHashtag.src = '../../img/hashtag.png'

    const nameTask = document.createElement('p')
    nameTask.classList.add('name-task')
    nameTask.textContent = nomeTarefa

    headerContainer.append(titleContainer)
    titleContainer.append(imgHashtag, nameTask)

    return headerContainer

}

const criarCriterio = (criterio) => {

    const listContent = document.createElement('ul')
    listContent.classList.add('content-list')

    const container = document.getElementById('header-container')
    container.replaceChildren(criarHeaderCriterio())
    
    const textCriterio = document.createElement('li')
    textCriterio.classList.add('text-content-criterio')
    textCriterio.textContent = criterio.nome_tarefa

    const textResultadoDesejado = document.createElement('li')
    textResultadoDesejado.classList.add('text-content-resultado-desejado')
    textResultadoDesejado.textContent = criterio.resultado_desejado

    const textResultadoObtido = document.createElement('li')
    textResultadoObtido.classList.add('text-content-resultado-obtido')
    textResultadoObtido.textContent = criterio.resultado_obtido

    const textMargemDeErro = document.createElement('li')
    textMargemDeErro.classList.add('text-content-margem-de-erro')
    textMargemDeErro.textContent = criterio.valor_maximo

    const textAvaliacaoAluno = document.createElement('li')
    textAvaliacaoAluno.classList.add('text-content-avaliacao-aluno')
    textAvaliacaoAluno.textContent = criterio.resultado_matricula

    const textAvaliacaoProfessor = document.createElement('li')
    textAvaliacaoProfessor.classList.add('text-content-avaliacao-professor')
    textAvaliacaoProfessor.textContent = criterio.resultado_professor

    const listButtons = document.createElement('div')
    listButtons.classList.add('list-buttons')

    const buttonEdit = document.createElement('li')
    buttonEdit.classList.add('button-edit')
    buttonEdit.textContent = 'Editar'

    const buttonDelete = document.createElement('li')
    buttonDelete.classList.add('button-delete')
    buttonDelete.textContent = 'Deletar'

    listContent.append(textCriterio, textResultadoDesejado, textResultadoObtido, textMargemDeErro, textAvaliacaoAluno, textAvaliacaoProfessor, listButtons)
    listButtons.append(buttonEdit, buttonDelete)

    return listContent

}

const carregarCriterio = () => {
    const container = document.getElementById('list-content-tasks')
    const lines = criterios.map(criarCriterio)
    container.replaceChildren(...lines)
}

carregarCriterio()