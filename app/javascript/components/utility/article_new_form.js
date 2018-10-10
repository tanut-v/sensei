import React, { Component, Fragment } from 'react';
import Editor from 'react-medium-editor';

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

class ArticleNewForm extends Component {
    state = {
        text: ''
    }

    getInitialState() {
        return { text: 'Fusce dapibus, tellus ac cursus commodo' };
    }

    render() {
        return (
            <Fragment>
                <input type="text" />
                <Editor
                    tag="pre"
                    text={this.state.text}
                    onChange={this.handleChange}
                    options={{toolbar: {buttons: ['bold', 'italic', 'underline']}}}
                    />
                <input type="hidden" />
                <button type="submit">Create</button>
            </Fragment>
        )
    }

    handleChange(text, medium) {
        this.setState({text: text});
      }
}

export default ArticleNewForm;