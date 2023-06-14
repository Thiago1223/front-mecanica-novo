'use strict'

import { preencherDadosProfessores, criarDadosProfessores, atualizarDadosProfessores, deletarDadosProfessores } from "./api.js"

const idProfessor = localStorage.getItem('idDoProfessor')
const professores = await preencherDadosProfessores()

const criarProfessor = (professor) => {

    const contentList = document.createElement('li')
    contentList.classList.add('container-content')

    const textContentName = document.createElement('li')
    textContentName.classList.add('text-content-name')
    textContentName.textContent = professor.nome

    const textContentEmail = document.createElement('li')
    textContentEmail.classList.add('text-content-email')
    textContentEmail.textContent = professor.email
    textContentEmail.title = professor.email

    const textContentDiscipline = document.createElement('li')
    textContentDiscipline.classList.add('text-content-nife')
    textContentDiscipline.textContent = professor.nife

    const buttonsList = document.createElement('ul')
    buttonsList.classList.add('list-buttons')

    const buttonEdit = document.createElement('a')
    buttonEdit.classList.add('button-edit')
    buttonEdit.textContent = 'Editar'
    buttonEdit.href = '#modal-container-edit'
    buttonEdit.addEventListener('click', () => {
        localStorage.setItem('idDoProfessor', professor.id)

        document.getElementById('name-professor-edit').value = professor.nome
        document.getElementById('email-professor-edit').value = professor.email
        document.getElementById('nife-professor-edit').value = professor.nife
        document.getElementById('data_nascimento-professor-edit').value = professor.data_nascimento
        document.getElementById('nome_materia-professor-edit').value = professor.id_materia
        document.getElementById('tipo_usuario-professor-edit').value = professor.id_usuario

    })

    const buttonDelete = document.createElement('a')
    buttonDelete.classList.add('button-delete')
    buttonDelete.textContent = 'Deletar'
    buttonDelete.href = '#modal-container-delete'
    buttonDelete.addEventListener('click', () => {
        localStorage.setItem('idDoProfessor', professor.id)
    })
   
    contentList.append(textContentName, textContentEmail, textContentDiscipline, buttonsList)
    buttonsList.append(buttonEdit, buttonDelete)

    return contentList
}

const insertCardProfessor = () => {

    const buttonSalvar = document.getElementById('save-modal')

    buttonSalvar.addEventListener('click', () => {

        const nomeProfessor = document.getElementById('name-professor').value
        const emailProfessor = document.getElementById('email-professor').value
        const nifeProfessor = document.getElementById('nife-professor').value
        const dataDeNascimentoProfessor = document.getElementById('data_nascimento-professor').value
        const nomeMateriaProfessor = document.getElementById('nome_materia-professor').value
        const tipoUsuarioProfessor = document.getElementById('tipo_usuario-professor').value
    
        if (nomeProfessor == '' || emailProfessor == '' || 
            nifeProfessor == '' || dataDeNascimentoProfessor == '' || 
            nomeMateriaProfessor == '' || tipoUsuarioProfessor == '') {
            alert('Todos os campos devem ser preenchidos!')
        } else {

            const professor = {
                "nome": `${nomeProfessor}`,
                "email": `${emailProfessor}`,
                "nife": `${nifeProfessor}`,
                "data_nascimento": `${dataDeNascimentoProfessor}`,
                "id_materia": `${nomeMateriaProfessor}`,
                "id_usuario": `${tipoUsuarioProfessor}`,
            }
            
            criarDadosProfessores(professor)
        }

    })
}

const updateCardProfessores = () => {

    const buttonEditar = document.getElementById('edit-modal')

    buttonEditar.addEventListener("click", () => {

        const nomeProfessor = document.getElementById('name-professor-edit').value
        const emailProfessor = document.getElementById('email-professor-edit').value
        const nifeProfessor = document.getElementById('nife-professor-edit').value
        const dataDeNascimentoProfessor = document.getElementById('data_nascimento-professor-edit').value
        const nomeMateriaProfessor = document.getElementById('nome_materia-professor-edit').value
        const tipoUsuarioProfessor = document.getElementById('tipo_usuario-professor-edit').value

        const dadosAtualizado = {
            "id": idProfessor,
            "nome": `${nomeProfessor}`,
            "data_nascimento": `${dataDeNascimentoProfessor}`,
            "email": `${emailProfessor}`,
            "nife": `${nifeProfessor}`,
            "id_materia": `${nomeMateriaProfessor}`,
            "id_usuario": `${tipoUsuarioProfessor}`
        }

        atualizarDadosProfessores(dadosAtualizado)

    })
}

const carregarProfessor = () => {
    const container = document.getElementById('list-content-teacher')
    const lines = professores.map(criarProfessor)
    container.replaceChildren(...lines)
}

updateCardProfessores()
insertCardProfessor()
carregarProfessor()