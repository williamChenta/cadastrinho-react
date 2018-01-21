import React, { Component } from 'react'
import axios from 'axios'

import Listagem from '../listagem/listagem'

const URL = 'http://localhost:8080/crudRest2018/pessoas'

export default class Cadastro extends Component {

    constructor(props) {
        super(props)
        this.state = {nome: '', email: '', pessoa: null }

        this.handleAdd = this.handleAdd.bind(this)
        this.changeNome = this.changeNome.bind(this)
        this.changeEmail = this.changeEmail.bind(this)

        if(this.props.params.id) {
            this.findPessoa(this.props.params.id)

            const pessoa = this.state.pessoa

            console.log('pessoa digitada: ' + pessoa)
        }
        
    }

    findPessoa(id) {
        axios.head(URL, { id })
            .then(resp => console.log('pessoa:' + resp.data)) //this.setState({ pessoa: resp.data })
    }

    handleAdd() {
        const nome = this.state.nome
        const email = this.state.email

        axios.post(URL, { nome, email })
            .then(resp => console.log('salvou!!'))
    }

    changeNome(e) {
        this.setState({...this.state, nome: e.target.value })
    }

    changeEmail(e) {
        this.setState({...this.state, email: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>Cadastro de pessoas</h1>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">Nome:</span>
                    <input type="text" className="form-control" placeholder="Informe seu nome completo" 
                    aria-describedby="basic-addon1" value={this.nome} onChange={this.changeNome}/>
                </div><br/>

                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">Email:</span>
                    <input type="email" className="form-control" placeholder="Informe seu email" 
                    aria-describedby="basic-addon1" value={this.email} onChange={this.changeEmail}/>
                </div><br/>

                <button type="button" className="btn btn-success" onClick={this.handleAdd}>Salvar</button><br/><br/>
            </div>
        )
    }
}