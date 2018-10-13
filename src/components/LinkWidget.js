import React from 'react'

const LinkWidget = ({widget})=>
    <a href={widget.href}>{widget.title}</a>

export default LinkWidget