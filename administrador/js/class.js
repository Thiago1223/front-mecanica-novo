'use strict'

import { preencherDadosTurmas, criarDadosTurmas, atualizarDadosTurmas, deletarDadosTurmas } from "./api.js"

const idTurma = localStorage.getItem('idDaTurma')
const turmas = await preencherDadosTurmas()

const criarCardTurma = (turma) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const topContainer = document.createElement('a')
    topContainer.classList.add('top-container')
    topContainer.setAttribute('href', '../pages/discipline.html')
    topContainer.textContent = turma.sigla
    topContainer.title = turma.nome

    const bottomContainer = document.createElement('div')
    bottomContainer.classList.add('bottom-container')

    const buttonEdit = document.createElement('a')
    buttonEdit.classList.add('button-edit')
    buttonEdit.href = '#modal-container-edit'
    buttonEdit.addEventListener('click', () => {
        localStorage.setItem('idDaTurma', turma.id)

        document.getElementById('name-turma-edit').value = turma.nome
        document.getElementById('sigla-turma-edit').value = turma.sigla
        document.getElementById('nome_curso-turma-edit').value = turma.id_curso

    })

    const imgEdit = document.createElement('img')
    imgEdit.classList.add('img-edit')
    imgEdit.src = '../../img/button_edit.png'

    const buttonDelete = document.createElement('div')
    buttonDelete.classList.add('button-delete')
    buttonDelete.href = '#modal-container-delete'
    buttonDelete.addEventListener('click', () => {
        localStorage.setItem('idDaTurma', turma.id)
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

const insertCardTurma = () => {

    const buttonSalvar = document.getElementById('save-modal')

    buttonSalvar.addEventListener('click', () => {

        const nomeTurma = document.getElementById('name-turma').value
        const siglaTurma = document.getElementById('sigla-turma').value
        const nomeCursoTurma = document.getElementById('nome_curso-turma').value
    
        if (nomeTurma == '' || siglaTurma == '' || nomeCursoTurma == '') {
            alert('Todos os campos devem ser preenchidos!')
        } else {

            const turma = {
                "nome": `${nomeTurma}`,
                "sigla": `${siglaTurma}`,
                "id_curso": `${nomeCursoTurma}`
            }
            
            criarDadosTurmas(turma)
        }

    })
}

const updateCardTurma = () => {

    const buttonEditar = document.getElementById('edit-modal')

    buttonEditar.addEventListener("click", () => {

        const nomeTurma = document.getElementById('name-turma-edit').value
        const siglaTurma = document.getElementById('sigla-turma-edit').value
        const nomeCursoTurma = document.getElementById('nome_curso-turma-edit').value

        const dadosAtualizado = {
            "id": idTurma,
            "nome": `${nomeTurma}`,
            "sigla": `${siglaTurma}`,
            "id_curso": `${nomeCursoTurma}`
        }

        atualizarDadosTurmas(dadosAtualizado)

    })
}

const deleteCardTurma = () => {

    const buttonDelete = document.getElementById("delete-modal")

    buttonDelete.addEventListener('click', () => {
        deletarDadosTurmas(idTurma)
    })
}

const carregarCardTurma = () => {
    const container = document.getElementById('cards-container-class')
    const cards = turmas.map(criarCardTurma)
    container.replaceChildren(...cards)
}

carregarCardTurma()
insertCardTurma()
updateCardTurma()
deleteCardTurma()