import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Cabecalho from './src/cabecalho'
import Rotas from './src/rotas'
import BoasVindas from './src/boasVindas'

export default props => (
    <div className='container'>
        <Cabecalho />
        <Rotas />
    </div>
)