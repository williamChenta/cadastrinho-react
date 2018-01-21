import React from 'react'

export default props => (
    <button className={'btn btn-'+ props.style}>
        <i className={'fa fa-'+ props.icon}></i>
    </button>
)