'use strict'

import { criarDadosDisciplinas, preencherDadosDisciplinas, atualizarDadosDisciplinas, deletarDadosDisciplinas } from "./api.js"

const disciplinas = await preencherDadosDisciplinas()

const idDisciplina = localStorage.getItem('idDaDisciplina')
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
    buttonEdit.href = '#modal-container-edit'
    buttonEdit.addEventListener('click', () => {
        localStorage.setItem('idDaDisciplina', disciplina.id)

        document.getElementById('name-disciplina-edit').value = disciplina.nome
        document.getElementById('sigla-disciplina-edit').value = disciplina.sigla
    })

    const imgEdit = document.createElement('img')
    imgEdit.src = '../../img/button_edit.png'
    imgEdit.classList.add('img-edit')

    const buttonDelete = document.createElement('a')
    buttonDelete.classList.add('button-delete')
    buttonDelete.href = '#modal-container-delete'
    buttonDelete.addEventListener('click', () => {
        localStorage.setItem('idDaDisciplina', disciplina.id)
    })

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

        const nomeDisciplina = document.getElementById('name-disciplina').value
        const siglaDisciplina = document.getElementById('sigla-disciplina').value
    
        if (nomeDisciplina == '' || siglaDisciplina == '') {
            alert('Todos os campos devem ser preenchidos!')
        } else {

            const disciplina = {
                "nome": `${nomeDisciplina}`,
                "sigla": `${siglaDisciplina}`,
            }

            criarDadosDisciplinas(disciplina)
        }

    })

}

const updateCardDisciplina = () => {

    const buttonEditar = document.getElementById('edit-modal')

    buttonEditar.addEventListener("click", () => {

        const nomeDisciplina = document.getElementById('name-disciplina-edit').value
        const siglaDisciplina = document.getElementById('sigla-disciplina-edit').value

        const dadosAtualizado = {
            "id": idDisciplina,
            "nome": `${nomeDisciplina}`,
            "sigla": `${siglaDisciplina}`
        }

        atualizarDadosDisciplinas(dadosAtualizado)

    })
}

const deleteCardDisciplina = () => {

    const buttonDelete = document.getElementById("delete-modal")

    buttonDelete.addEventListener('click', () => {
        deletarDadosDisciplinas(idDisciplina)
    })

}

const carregarCardDisciplina = () => {
    const container = document.getElementById('cards-container-discipline')
    const cards = disciplinas.map(criarCardDisciplina)
    container.replaceChildren(...cards)
}

carregarCardDisciplina()
insertCardDisciplina()
updateCardDisciplina()
deleteCardDisciplina()