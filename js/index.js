'use strict'

import { preencherDadosUsuarioPeloEmailESenha } from "./api.js"

const loginUsuario = async () => {

    const buttonLogin = document.getElementById('button-login')

    buttonLogin.addEventListener('click', async () => {

        const email = document.getElementById('input-email').value
        const senha = document.getElementById('input-senha').value

        if (email == '' || senha == '') {
            alert('Usuario ou Senha incorretos!')
        }
        
        const usuario = await preencherDadosUsuarioPeloEmailESenha(email, senha)
        console.log(usuario[0].id_matricula)

        if (usuario[0].tipo == 'Administrador') {
            window.location.href = '../administrador/pages/login.html'
        } else if (usuario[0].tipo == 'Aluno') {
            window.location.href = '../aluno/pages/home.html'
            localStorage.setItem('idDaMatricula', usuario[0].id_matricula)
        } else if (usuario[0].tipo == 'Professor') {
            window.location.href = '../professor/pages/home.html'
        }

    })

}

loginUsuario()