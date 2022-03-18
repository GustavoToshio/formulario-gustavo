import React, { Component } from 'react';

import * as data from '../services/pessoa.service';

class PessoaForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            idade: null
        };
    }

    getNascimento() {
        let nasc = document.getElementById("dataNascimento").value.toString().split("-");
        nasc = new Date(nasc);

        return nasc;
    }

    calculaIdade(event) {
        event.preventDefault();

        let nasc = this.getNascimento();
        let idade = data.getIdade(nasc);

        this.setState({ ...this.state, idade });
    }

    salvarPessoa(event) {
        event.preventDefault();

        let nasc = document.getElementById("dataNascimento").value.toString();
        let nome = document.getElementById("nome").value.toString();

        const Pessoa = { Nome: nome, DataNascimento: nasc };
        this.props.salvarPessoa(Pessoa);
    }

    render() {
        const { idade } = this.state

        return (
            <form id="formPessoa">
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label col-form-label-sm">Nome:</label>
                    <div className="col-md-9 col-sm-3">
                        <input type="text" className="form-control form-control-sm" id="nome" placeholder="Nome" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label col-form-label-sm">Nascimento:</label>
                    <div className="col-md-4 col-sm-3">
                        <input type="date" className="form-control form-control-sm" id="dataNascimento" placeholder="Data Nascimento" onBlur={(e) => this.calculaIdade(e)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label col-form-label-sm">Idade:</label>
                    <div className="col-md-2 col-sm-3">
                        <input type="number" className="form-control form-control-sm" id="idade" value={idade} readOnly />
                    </div>
                </div>
                <div class="btn-group bm-btn-group">
                    <button type="button" className="btn btn-primary" onClick={(e) => this.salvarPessoa(e)}>Salvar</button>
                    <button type="button" className="btn btn-secondary" onClick={(e) => this.props.voltar(e)}>Voltar</button>
                </div>
            </form>
        )
    }
}

export default PessoaForm
