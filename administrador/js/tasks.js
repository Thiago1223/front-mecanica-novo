'use strict'

import { preencherDadosTarefasPeloIdDisciplina } from "./api.js"

const nameStudent = localStorage.getItem('nomeAluno')
const classStudent = localStorage.getItem('turmaAluno')
const idDisciplina = localStorage.getItem('idDaDisciplina')
const tarefas = await preencherDadosTarefasPeloIdDisciplina(idDisciplina)

const criarHeaderTarefa = () => {

    const containerTasks = document.createElement('div')
    containerTasks.classList.add('container_tasks')

    const studentName = document.createElement('p')
    studentName.textContent = nameStudent

    const tasksNumber = document.createElement('div')
    tasksNumber.classList.add('tasks_number')

    const numberTasks = document.createElement('span')
    numberTasks.classList.add('number_tasks')
    numberTasks.textContent = tarefas.length

    const textTasks = document.createElement('p')
    textTasks.classList.add('text_tasks')
    textTasks.textContent = 'Tarefas'

    const studentClass = document.createElement('p')
    studentClass.classList.add('student_class')
    studentClass.textContent = classStudent

    containerTasks.append(studentName, tasksNumber, studentClass)
    tasksNumber.append(numberTasks, textTasks)

    return containerTasks

}

const criarCardTarefa = (tarefa) => {

    const card = document.createElement('a')
    card.classList.add('button')
    card.textContent = tarefa.nome_tarefa
    card.href = '../pages/results_tasks.html'
    card.addEventListener('click', () => {
        localStorage.setItem('idDaTarefa', tarefa.id_tarefa)
    })

    const container = document.getElementById('container_tasks')
    container.replaceChildren(criarHeaderTarefa())

    const bottomContainer = document.createElement('div')
    bottomContainer.classList.add('buttons-container-card')

    const buttonEdit = document.createElement('a')
    buttonEdit.classList.add('button-edit')
    buttonEdit.href = '#modal-container-edit'

    const imgEdit = document.createElement('img')
    imgEdit.classList.add('img-edit')
    imgEdit.src = '../../img/button_edit.png'

    const buttonDelete = document.createElement('a')
    buttonDelete.classList.add('button-delete')
    buttonDelete.href = '#modal-container-delete'

    const imgDelete = document.createElement('img')
    imgDelete.classList.add('img-delete')
    imgDelete.src = '../../img/button_delete.png'

    card.append(bottomContainer)
    bottomContainer.append(buttonEdit, buttonDelete)
    buttonEdit.append(imgEdit)
    buttonDelete.append(imgDelete)

    return card

}

const carregarCardTarefa = () => {
    const container = document.getElementById('button-container')
    const cards = tarefas.map(criarCardTarefa)
    container.replaceChildren(...cards)
}

carregarCardTarefa()