import React, {Component} from 'react';
import BLOG_API from '../../pages/Home/Home';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, SectionBox, Wysiwyg, Button, ButtonLinkMod, Checkbox, Radio, InputForm, TextareaForm} from'../../StyleConfig';

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        };
    }
    componentWillMount () {
        return fetch(BLOG_API + '/wp-json/wp/v2/posts/' + this.props.params.id).then((response) => response.json())
            .then(post => {
                this.setState({
                    post: post,
                });
            })

    }
    render() {
        if (!this.state.post) return <div>Загрузка...</div>
        return <div>
            <h3>{this.state.post.title.rendered}</h3>
            <div dangerouslySetInnerHTML={{ __html : this.state.post.content.rendered }}></div>
        </div>
    }
}

export default BlogPage;