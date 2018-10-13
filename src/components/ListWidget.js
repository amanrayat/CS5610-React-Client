import React from 'react'

const ListWidget = ({widget})=>
    <ul>{widget.items.split(",").map((item,index)=> <li key={index}>{item}</li>)}</ul>

export default ListWidget


