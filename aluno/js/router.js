'use strict'

import { carregarCardCurso } from "./course.js"
import { carregarCardTurma } from "./class.js"
import { carregarCardDisciplina } from "./discipline.js"
// import { carregarCardTarefa } from "./tasks.js"

const routes = {
    '/main' : 'aluno/pages/main.html',
    '/course' : 'aluno/pages/course.html',
    '/class' : 'aluno/pages/class.html',
    '/discipline' : 'aluno/pages/discipline.html',
    '/student' : 'aluno/pages/students.html',
    '/task' : 'aluno/pages/tasks.html',
    '/results' : 'aluno/pages/results_tasks.html',
    '/time' : 'aluno/pages/time_record.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    if (window.location.pathname == '/course') {
        carregarCardCurso()
    } else if (window.location.pathname == '/class') {
        carregarCardTurma()
    } else if (window.location.pathname == '/discipline') {
        carregarCardDisciplina()
    } 
    //else if (window.location.pathname == '/task') {
    //     carregarCardTarefa()
    // } 
}

window.route = route