'use strict'

import { criarDadosCursos, preencherDadosCursos, atualizarDadosCursos, deletarDadosCursos } from "./api.js"

const idCurso = localStorage.getItem('idDoCurso')
const cursos = await preencherDadosCursos()

const criarCardCurso = (curso) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const topContainer = document.createElement('a')
    topContainer.classList.add('top-container')
    topContainer.setAttribute('href', '/class')
    topContainer.textContent = curso.nome

    const bottomContainer = document.createElement('div')
    bottomContainer.classList.add('bottom-container')

    const buttonEdit = document.createElement('a')
    buttonEdit.classList.add('button-edit')
    buttonEdit.href = '#modal-container-edit'
    buttonEdit.addEventListener('click', () => {
        localStorage.setItem('idDoCurso', curso.id)

        document.getElementById('name-curso-edit').value = curso.nome
        document.getElementById('sigla-curso-edit').value = curso.sigla
        document.getElementById('hora-curso-edit').value = curso.carga_horaria
        document.getElementById('descricao-curso-edit').value = curso.descricao

    })

    const imgEdit = document.createElement('img')
    imgEdit.src = '../../img/button_edit.png'
    imgEdit.classList.add('img-edit')

    const buttonDelete = document.createElement('a')
    buttonDelete.classList.add('button-delete')
    buttonDelete.href = '#modal-container-delete'
    buttonDelete.addEventListener('click', () => {
        localStorage.setItem('idDoCurso', curso.id)
    })

    const imgDelete = document.createElement('img')
    imgDelete.src = '../../img/button_delete.png'
    imgDelete.classList.add('img-delete')
   
    card.append(topContainer, bottomContainer)
    bottomContainer.append(buttonEdit, buttonDelete)
    buttonEdit.appendChild(imgEdit)
    buttonDelete.appendChild(imgDelete)

    return card

}

export const insertCardCurso = () => {

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

export const updateCardCurso = () => {

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

export const deleteCardCurso = () => {

    const buttonDelete = document.getElementById("delete-modal")

    buttonDelete.addEventListener('click', () => {
        deletarDadosCursos(idCurso)
    })

}

const carregarCardCurso = () => {
    const container = document.getElementById('cards-container-course')
    const cards = cursos.map(criarCardCurso)
    container.replaceChildren(...cards)
}

carregarCardCurso()