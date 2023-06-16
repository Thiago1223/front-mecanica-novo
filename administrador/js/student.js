'use strict'

import { preencherDadosAlunosPeloIdTurma, criarDadosAlunos, atualizarDadosAlunos, deletarDadosAlunos } from "./api.js"

const idTurma = localStorage.getItem('idDaTurma')
const idAluno = localStorage.getItem('idDoAluno')
const alunosDaTurma = await preencherDadosAlunosPeloIdTurma(idTurma)

const criarAluno = (aluno) => {

    const contentList = document.createElement('li')
    contentList.classList.add('container-content')

    const containerLinkStudent = document.createElement('li')
    containerLinkStudent.classList.add('container-link-student')

    const containerLink = document.createElement('div')
    containerLink.classList.add('container-student-link')

    const linkRouteStudentName = document.createElement('a')
    linkRouteStudentName.classList.add('link-route-student')
    linkRouteStudentName.setAttribute('href', '../pages/tasks.html')
    linkRouteStudentName.textContent = aluno.nome_aluno
    linkRouteStudentName.title = aluno.nome_aluno
    linkRouteStudentName.addEventListener('click', () => {
        localStorage.setItem('nomeAluno', aluno.nome_aluno)
        localStorage.setItem('turmaAluno', aluno.sigla_turma)
    })

    const textContentEmail = document.createElement('li')
    textContentEmail.classList.add('text-content-email')
    textContentEmail.textContent = aluno.email_aluno
    textContentEmail.title = aluno.email_aluno

    const textContentClass = document.createElement('li')
    textContentClass.classList.add('text-content-class')
    textContentClass.textContent = aluno.sigla_turma

    const buttonsList = document.createElement('ul')
    buttonsList.classList.add('list-buttons')

    const buttonEdit = document.createElement('a')
    buttonEdit.classList.add('button-edit')
    buttonEdit.textContent = 'Editar'
    buttonEdit.href = '#modal-container-edit'
    buttonEdit.addEventListener('click', () => {
        localStorage.setItem('idDoAluno', aluno.id)

        document.getElementById('nome_turma-aluno-edit').value = aluno.nome_turma
        document.getElementById('sigla_turma-aluno-edit').value = aluno.sigla_turma
        document.getElementById('name-aluno-edit').value = aluno.nome_aluno
        // document.getElementById('data_nascimento-aluno-edit').value = aluno.data_nascimento
        document.getElementById('email-aluno-edit').value = aluno.email_aluno
        document.getElementById('numero_matricula-aluno-edit').value = aluno.numero_matricula
    })

    const buttonDelete = document.createElement('a')
    buttonDelete.classList.add('button-delete')
    buttonDelete.textContent = 'Deletar'
    buttonDelete.href = '#modal-container-delete'
    buttonDelete.addEventListener('click', () => {
        localStorage.setItem('idDoAluno', aluno.id)
    })
   
    contentList.append(containerLinkStudent, textContentEmail, textContentClass, buttonsList)
    containerLinkStudent.append(containerLink)
    containerLink.append(linkRouteStudentName)
    buttonsList.append(buttonEdit, buttonDelete)

    return contentList
}

const insertCardAluno = () => {

    const buttonSalvar = document.getElementById('save-modal')

    buttonSalvar.addEventListener('click', () => {

        const nomeTurma = document.getElementById('nome_turma-aluno').value
        const siglaTurma = document.getElementById('sigla_turma-aluno').value
        const nomeAluno = document.getElementById('name-aluno').value
        // const dataDeNascimentoAluno = document.getElementById('data_nascimento-aluno').value
        const emailAluno = document.getElementById('email-aluno').value
        const numeroMatriculaAluno = document.getElementById('numero_matricula-aluno').value
    
        if (nomeAluno == '' || emailAluno == '' || nomeTurma == '' || siglaTurma == '' || numeroMatriculaAluno == '') {
            alert('Todos os campos devem ser preenchidos!')
        } else {

            const aluno = {
                "nome_turma": `${nomeTurma}`,
                "sigla_turma": `${siglaTurma}`,
                "nome_aluno": `${nomeAluno}`,
                "email_aluno": `${emailAluno}`,
                // "data_nascimento": `${dataDeNascimentoAluno}`,
                "numero_matricula": `${emailAluno}`
            }
            
            criarDadosAlunos(aluno)
        }

    })
}

const carregarAluno = () => {
    const container = document.getElementById('list-content')
    const lines = alunosDaTurma.map(criarAluno)
    container.replaceChildren(...lines)
}

insertCardAluno()
carregarAluno()