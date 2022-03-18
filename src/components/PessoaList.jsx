import React, { Component } from 'react';

class PessoasList extends Component {

    renderRow(list) {
        return list.map(item => {
            return (
                <tr>
                    <th scope="row">{item.codigoPessoa}</th>
                    <td>{item.nome}</td>
                    <td>{item.dataNascimento}</td>
                    <td><button class="btn btn-danger" type="button" onClick={(e) => this.props.apagarPessoa(e, item.codigoPessoa)}><i class="fa fa-trash"></i></button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className="table table-striped table-hover table-pessoas">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Nascimento</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRow(this.props.pessoas)}
                    </tbody>
                </table>
                <button type="button" className="btn btn-primary" onClick={(e) => this.props.novaPessoa(e)}>Novo</button>
            </div>
        )
    }
}

export default PessoasList