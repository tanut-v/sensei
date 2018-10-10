import React, { Component, Fragment } from 'react';
import ImageSelector from '../utility/image_selector';
import ArticleNewForm from '../utility/article_new_form';

class ArticleNew extends Component {
    render() {
        return (
            <Fragment>
                <ImageSelector/>
                <ArticleNewForm />
            </Fragment>
        )
    }
}

export default ArticleNew;