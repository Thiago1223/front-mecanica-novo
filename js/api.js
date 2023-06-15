'use strict'

export const preencherDadosUsuarioPeloEmailESenha = async (email, senha) => {
    const url = `https://projeto-mecanica.cyclic.app/v1/mecanica/usuario/email/${email}/senha/${senha}`
    const response = await fetch(url)
    const data = await response.json()

    return data.usuarios
}