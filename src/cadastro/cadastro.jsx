import React, { Component } from 'react'
import axios from 'axios'

const URL = 'http://localhost:8080/crudRest2018/pessoas'

export default class Cadastro extends Component {

    constructor(props) {
        super(props)
        this.state = { nome: '', email: '', pessoas: [], id: null }

        this.salvar = this.salvar.bind(this)
        this.changeNome = this.changeNome.bind(this)
        this.changeEmail = this.changeEmail.bind(this)

        if (this.props.params.id) {
            this.findPessoa(this.props.params.id)
        }
    }

    findPessoa(idRet) {
        axios.get(`${URL}`)
            .then(resp => this.setState({ pessoas: resp.data, id: idRet }))
    }

    salvar() {
        const nome = this.state.nome
        const email = this.state.email
        const id = this.state.id

        if (id != null) {
            axios.put(URL, { id, nome, email })
                .then(() => console.log('alterou!!'))
        } else {
            axios.post(URL, { nome, email })
                .then(() => console.log('cadastrou!!'))
        }
    }

    changeNome(e) {
        this.setState({ ...this.state, nome: e.target.value })
    }

    changeEmail(e) {
        this.setState({ ...this.state, email: e.target.value })
    }

    render() {

        const pessoasRet = this.state.pessoas
        const idRet = this.state.id

        pessoasRet.map(pessoa => {
            if (pessoa.id == idRet) {
                this.nome = pessoa.nome
                this.email = pessoa.email
                this.id = pessoa.id
            }
        })

        return (
            <div>
                <input type="hidden" value={this.id} />

                <h1>Cadastro de pessoas</h1>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">Nome:</span>
                    <input type="text" className="form-control" placeholder="Informe seu nome completo"
                        aria-describedby="basic-addon1" value={this.nome} onChange={this.changeNome} />
                </div><br />

                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">Email:</span>
                    <input type="email" className="form-control" placeholder="Informe seu email"
                        aria-describedby="basic-addon1" value={this.email} onChange={this.changeEmail} />
                </div><br />

                <button type="button" className="btn btn-success" onClick={this.salvar}>Salvar</button><br /><br />
            </div>
        )
    }
}