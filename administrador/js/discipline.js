'use strict'

import { preencherDadosDisciplinas } from "./api.js"
const disciplinas = await preencherDadosDisciplinas()

const criarCardDisciplina = (disciplina) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const topContainer = document.createElement('a')
    topContainer.classList.add('top-container')
    topContainer.setAttribute('href', '../pages/students.html')
    topContainer.textContent = disciplina.sigla
    topContainer.title = disciplina.nome

    const bottomContainer = document.createElement('div')
    bottomContainer.classList.add('bottom-container')

    const buttonEdit = document.createElement('a')
    buttonEdit.classList.add('button-edit')

    const imgEdit = document.createElement('img')
    imgEdit.src = '../../img/button_edit.png'
    imgEdit.classList.add('img-edit')

    const buttonDelete = document.createElement('div')
    buttonDelete.classList.add('button-delete')

    const imgDelete = document.createElement('img')
    imgDelete.classList.add('img-delete')
    imgDelete.src = '../../img/button_delete.png'
   
    card.append(topContainer, bottomContainer)
    bottomContainer.append(buttonEdit, buttonDelete)
    buttonEdit.appendChild(imgEdit)
    buttonDelete.appendChild(imgDelete)

    return card

}

const insertCardDisciplina = () => {

    const buttonSalvar = document.getElementById('save-modal')

    buttonSalvar.addEventListener('click', () => {

        const nomeCurso = document.getElementById('name-curso').value
        const siglaCurso = document.getElementById('sigla-curso').value
        const horaCurso = document.getElementById('hora-curso').value
        const descricaoCurso = document.getElementById('descricao-curso').value
    
        if (nomeCurso == '' || siglaCurso == '' || horaCurso == '' || isNaN(horaCurso) || descricaoCurso == '') {
            alert('Todos os campos devem ser preenchidos!')
        } else {

            const curso = {
                "nome": `${nomeCurso}`,
                "sigla": `${siglaCurso}`,
                "descricao": `${descricaoCurso}`,
                "carga_horaria": parseInt(horaCurso)
            }

            criarDadosCursos(curso)
        }

    })

}

const updateCardDisciplina = () => {

    const buttonEditar = document.getElementById('edit-modal')

    buttonEditar.addEventListener("click", () => {

        const nomeCurso = document.getElementById('name-curso-edit').value
        const siglaCurso = document.getElementById('sigla-curso-edit').value
        const horaCurso = document.getElementById('hora-curso-edit').value
        const descricaoCurso = document.getElementById('descricao-curso-edit').value

        const dadosAtualizado = {
            "id": idCurso,
            "nome": `${nomeCurso}`,
            "sigla": `${siglaCurso}`,
            "descricao": `${descricaoCurso}`,
            "carga_horaria": parseInt(horaCurso)
        }

        atualizarDadosCursos(dadosAtualizado)

    })

}

const deleteCardDisciplina = () => {

    const buttonDelete = document.getElementById("delete-modal")

    buttonDelete.addEventListener('click', () => {
        deletarDadosCursos(idCurso)
    })

}

const carregarCardDisciplina = () => {
    const container = document.getElementById('cards-container-discipline')
    const cards = disciplinas.map(criarCardDisciplina)
    container.replaceChildren(...cards)
}

carregarCardDisciplina()