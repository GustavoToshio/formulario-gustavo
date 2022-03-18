import React, { Component } from 'react';

import './Pessoa.css';
import PessoaForm from './PessoaForm';
import PessoaList from './PessoaList';

import * as svcPessoa from '../services/pessoa.service';

class Pessoa extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pessoas: [],
            showForm: false
        }

        this.voltar = this.voltar.bind(this);
        this.novaPessoa = this.novaPessoa.bind(this);

        this.buscarPessoas = this.buscarPessoas.bind(this);
        this.salvarPessoa = this.salvarPessoa.bind(this);
        this.apagarPessoa = this.apagarPessoa.bind(this);
    }

    async componentDidMount() {
        await this.buscarPessoas();
    }

    voltar(event) {
        event.preventDefault();
        this.setState({ showForm: false })
    }

    novaPessoa(event) {
        event.preventDefault();
        this.setState({ showForm: true })
    }

    async buscarPessoas() {
        let data = await svcPessoa.getPessoas();
        this.setState({ ...this.state, pessoas: data });
    }

    async salvarPessoa(pessoa) {
        await svcPessoa.savePessoa(pessoa);
        await this.buscarPessoas();
        this.setState({ showForm: false })
    }

    async apagarPessoa(event, codigoPessoa) {
        event.preventDefault();
        await svcPessoa.deletePessoa(codigoPessoa);
        await this.buscarPessoas();
    }

    render() {
        const { showForm, pessoas } = this.state

        if (showForm) {
            return (
                <div className="container-fluid">
                    <h3>Cadastro de Pessoas</h3>
                    <PessoaForm salvarPessoa={this.salvarPessoa} voltar={this.voltar} />
                </div>
            )
        } else {
            return (
                <div className="container-fluid">
                    <h3>Tabela de Pessoas</h3>
                    <PessoaList pessoas={pessoas} novaPessoa={this.novaPessoa} apagarPessoa={this.apagarPessoa} />
                </div>
            )
        }
    }
}

export default Pessoa
