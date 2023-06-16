'use strict'

import { preencherDadosTarefasPeloIdDisciplina } from "./api.js"

const nameStudent = localStorage.getItem('nomeAluno')
const classStudent = localStorage.getItem('turmaAluno')
const idDisciplina = localStorage.getItem('idDaDisciplina')
const tarefas = await preencherDadosTarefasPeloIdDisciplina(idDisciplina)

const criarHeaderTarefa = () => {

    const containerTasks = document.createElement('div')
    containerTasks.classList.add('container_tasks')

    // const studentName = document.createElement('p')
    // studentName.textContent = nameStudent

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

    containerTasks.append(tasksNumber, studentClass)
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
        localStorage.setItem('nomeDaTarefa', tarefa.nome_tarefa)
    })

    const container = document.getElementById('container_tasks')
    container.replaceChildren(criarHeaderTarefa())

    return card

}

const carregarCardTarefa = () => {
    const container = document.getElementById('button-container')
    const cards = tarefas.map(criarCardTarefa)
    container.replaceChildren(...cards)
}

carregarCardTarefa()