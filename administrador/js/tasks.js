'use strict'

import { preencherDadosTarefas } from "./api.js"
const tarefas = await preencherDadosTarefas()
const nameStudent = localStorage.getItem('nomeAluno')
const classStudent = localStorage.getItem('turmaAluno')

export const criarHeaderTarefa = () => {

    const containerTasks = document.createElement('div')
    containerTasks.classList.add('container_tasks')

    const studentName = document.createElement('p')
    studentName.textContent = nameStudent

    const tasksNumber = document.createElement('div')
    tasksNumber.classList.add('tasks_number')

    const numberTasks = document.createElement('span')
    numberTasks.classList.add('number_tasks')

    const textTasks = document.createElement('p')
    textTasks.classList.add('text_tasks')

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
    card.textContent = tarefa.nome

    var container = document.getElementById('container_tasks')
    container.replaceChildren(criarHeaderTarefa())

    return card

}

export const carregarCardTarefa = () => {
    const container = document.getElementById('button-container')
    const cards = tarefas.map(criarCardTarefa)
    container.replaceChildren(...cards)
}