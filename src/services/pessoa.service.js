import axios from 'axios'

const URL_BASE = "https://localhost:5001"

export function getIdade(dtNascimento) {
    let hoje = new Date();
    let diferencaAnos = hoje.getFullYear() - dtNascimento.getFullYear();

    if (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) < new Date(hoje.getFullYear(), dtNascimento.getMonth(), dtNascimento.getDate())) {
        diferencaAnos--;
    }

    return diferencaAnos;
}

export function getPessoas() {
    return axios.get(`${URL_BASE}/pessoas`)
        .then(resp => {
            return resp.data
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

export function savePessoa(pessoa) {
    return axios.post(`${URL_BASE}/pessoas`, pessoa)
        .then(resp => {
            return resp.data
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

export function deletePessoa(codigoPessoa) {
    return axios.delete(`${URL_BASE}/pessoas/${codigoPessoa}`)
        .then(resp => {
            return resp.data
        })
        .catch(error => {
            return Promise.reject(error)
        })
}