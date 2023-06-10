'use strict'

import { carregarCardCurso } from "./course.js"
import { carregarCardTurma } from "./class.js"
import { carregarCardDisciplina } from "./discipline.js"
// import { carregarCardTarefa } from "./tasks.js"

const routes = {
    '/main' : 'professor/pages/main.html',
    '/course' : 'professor/pages/course.html',
    '/class' : 'professor/pages/class.html',
    '/discipline' : 'professor/pages/discipline.html',
    '/student' : 'professor/pages/students.html',
    '/task' : 'professor/pages/tasks.html',
    '/results' : 'professor/pages/results_tasks.html',
    '/time' : 'professor/pages/time_record.html'
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