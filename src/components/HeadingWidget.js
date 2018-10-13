import React from 'react'

const HeadingWidget = ({widget})=>
    <div>
        {widget.size===1 && <h1>{widget.type}</h1>}
        {widget.size===2 && <h2>{widget.type}</h2>}
        {widget.size===3 && <h3>{widget.type}</h3>}
        {widget.size===4 && <h4>{widget.type}</h4>}

    </div>

export default HeadingWidget
