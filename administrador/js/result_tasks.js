'use strict'

import { preencherDadosCriteriosPeloIdTarefa } from "./api.js"

const idTarefa = localStorage.getItem('idDaTarefa')
const criterios = await preencherDadosCriteriosPeloIdTarefa(idTarefa)

const criarHeaderCriterio = () => {

    const headerContainer = document.createElement('div')
    headerContainer.classList.add('header-container')

    const titleContainer = document.createElement('div')
    titleContainer.classList.add('title-container')

    const imgHashtag = document.createElement('img')

    const nameTask = document.createElement('p')
    nameTask.classList.add('name-task')

    const buttonsContainer = document.createElement('div')
    buttonsContainer.classList.add('buttons-container')

    const buttonAdd = document.createElement('div')
    buttonAdd.classList.add('button-add')

    const imgAdd = document.createElement('img')

    titleContainer.append(imgHashtag, nameTask)
    buttonsContainer.append(buttonAdd)
    buttonAdd.append(imgAdd)

    return headerContainer

}

const criarCriterio = (criterio) => {

    // const listContent = document.createElement('ul')
    // listContent.classList.add('list-content')
    
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
    // buttonEdit.textContent = 'Editar'

    const buttonDelete = document.createElement('li')
    buttonDelete.classList.add('button-delete')
    // buttonEdit.textContent = 'Deletar'

    listContent.append(textCriterio, textResultadoDesejado, textResultadoObtido, textMargemDeErro, textAvaliacaoAluno, textAvaliacaoProfessor, listButtons)
    listButtons.append(buttonEdit, buttonDelete)

    return listContent

}

const carregarCriterio = () => {
    const container = document.getElementById('list-content-tasks')
    const lines = criterios.map(criarCriterio)
    container.replaceChildren(...lines)
}

// criarHeaderCriterio()
carregarCriterio()