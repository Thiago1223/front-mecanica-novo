'use strict'

import { carregarCardCurso, insertCardCurso, updateCardCurso, deleteCardCurso } from "./course.js"
import { carregarCardTurma, insertCardTurma, updateCardTurma, deleteCardTurma} from "./class.js"
import { carregarCardDisciplina } from "./discipline.js"
import { carregarProfessor } from "./teacher.js"
import { carregarAluno } from "./student.js"
import { carregarCardTarefa, criarHeaderTarefa } from "./tasks.js"

const routes = {
    '/main' : 'administrador/pages/main.html',
    '/teachers' : 'administrador/pages/teachers.html',
    '/course' : 'administrador/pages/course.html',
    '/class' : 'administrador/pages/class.html',
    '/discipline' : 'administrador/pages/discipline.html',
    '/student' : 'administrador/pages/students.html',
    '/task' : 'administrador/pages/tasks.html',
    '/results' : 'administrador/pages/results_tasks.html',
    '/time' : 'administrador/pages/time_record.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname

    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    if (path == '/course') {
        insertCardCurso()
        updateCardCurso()
        deleteCardCurso()
        carregarCardCurso()
    } else if (window.location.pathname == '/class') {
        carregarCardTurma()
        insertCardTurma()
        updateCardTurma()
        deleteCardTurma()
    } else if (window.location.pathname == '/discipline') {
        carregarCardDisciplina()
    } else if (window.location.pathname == '/teachers') {
        carregarProfessor()
    } else if (window.location.pathname == '/student') {
        carregarAluno()
    } else if (window.location.pathname == '/task') {
        carregarCardTarefa()
    }
}

window.route = route