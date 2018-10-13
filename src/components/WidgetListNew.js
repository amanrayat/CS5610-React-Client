import React from 'react'
import HeadingWidget from './HeadingWidget'

export default class WidgetListNew extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
    }
    render() {
        return(
            <ul className="list-group">
                {
                    this.props.widgets.map((widget, index) =>
                        <li key={index}
                            className="list-group-item">
                            <HeadingWidget widget={widget}/>
                        </li>
                    )
                }
            </ul>
        )
    }


}