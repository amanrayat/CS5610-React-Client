import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";

class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props);
        props.init(props.widgetsInit , props.topic)
    }

    componentDidUpdate(){
        this.props.init(this.props.widgetsInit , this.props.topic)
    }
    render() {
        console.log("the props are " , this.props)
        return (
            <ul className='list-group'>
                {
                    this.props.widgets.map((widget, index) =>
                        <li key={index} className="list-group-item">
                            {widget.type==="HEADING" && <HeadingWidget widget={widget}/>}
                            {widget.type==="PARAGRAPH" && <ParagraphWidget widget={widget}/>}
                            {widget.type==="LIST" && <ListWidget widget={widget}/>}
                        </li>
                    )
                }
            </ul>

        )
    }
}

export default WidgetListComponent