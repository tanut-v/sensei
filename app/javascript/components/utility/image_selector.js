import React, { Component, Fragment } from 'react'
class ImageSelector extends Component {
    render() {
        return (
            <Fragment>
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1522165078649-823cf4dbaf46?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjM4NzIyfQ&s=d2f498827fa35c59dcf9adfc573f1677" />
                </a>
                <br/>
                <input type="text" />
            </Fragment>
            
        )
    }
}

export default ImageSelector;