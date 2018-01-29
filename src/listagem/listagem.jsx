import React, { Component } from 'react'
import { browserHistory, Router, Route, Link, withRouter } from 'react-router'
import axios from 'axios'
import IconButton from '../templates/iconButton'

const URL = 'http://localhost:8080/crudRest2018/pessoas'

export default class Listagem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pessoas: []
        };

        this.refresh()
    }

    delete(id = '') {
        axios.delete(`${URL}/${id}`).then(()=>this.refresh())
    }

    refresh() {
        axios.get(`${URL}/0`)
            .then(resp => this.setState({ pessoas: resp.data }))
    }

    render() {
        const { pessoas } = this.state;

        return (
            <div>
                <h1>Listagem de pessoas</h1>
                <table className="table table-condensed">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>

                        {pessoas.map(pessoa =>
                            <tr key={pessoa.id} className={pessoa.sexo=='F' ? 'feminino' : 'masculino'}>
                                <td>{pessoa.nome}</td>
                                <td>{pessoa.email}</td>
                                <td>
                                    <Link to={`/cadastro/${pessoa.id}`}>
                                        <i className={'fa fa-pencil'} title='Alterar'></i>
                                    </Link>&nbsp;&nbsp;
                                    <span>
                                        <i className={'fa fa-trash black'} title='Excluir'
                                        onClick={()=>this.delete(pessoa.id)}></i>
                                    </span>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }

}