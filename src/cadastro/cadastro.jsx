import React, { Component } from 'react'
import axios from 'axios'

const URL = 'http://localhost:8080/crudRest2018/pessoas'

export default class Cadastro extends Component {

    constructor(props) {
        super(props)
        this.state = { id: '', nome: '', email: '', pessoa: [] }

        this.salvar = this.salvar.bind(this)
        this.changeNome = this.changeNome.bind(this)
        this.changeEmail = this.changeEmail.bind(this)

        if (this.props.params.id) {
            this.findPessoa(this.props.params.id)
        }
    }

    findPessoa(idRet) {
        axios.get(`${URL}/${idRet}`)
            .then(resp => this.setState({ pessoa: resp.data }))
    }

    salvar() {
        const nome = this.state.nome
        const email = this.state.email
        const id = this.state.id

        if (id) {
            axios.put(`${URL}`, { id, nome, email })
                .then(() => console.log('alterou!!'))
        } else {
            axios.post(`${URL}`, { nome, email })
                .then(() => console.log('cadastrou!!'))
        }
    }

    changeNome(e) {
        this.setState({ nome: e.target.value })
    }

    changeEmail(e) {
        this.setState({ email: e.target.value })
    }

    render() {
        const pessoa = this.state.pessoa

        pessoa.map(p => ( this.nome = p.nome, this.email = p.email, this.id = p.id))

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