import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Cadastro from './cadastro/cadastro'
import Listagem from './listagem/listagem'
import BoasVindas from './boasVindas'

export default props => (
    <Router history={hashHistory}>
        <Route path='/cadastro' component={Cadastro}/>
        <Route path='/listagem' component={Listagem}/>

        <Route path="/cadastro/:id" component={Cadastro} />
        <Route path="/listagem/:id" component={Listagem} />

        <Route path='/' component={BoasVindas}/>
        <Redirect from='*' to='/'/>
    </Router>
)