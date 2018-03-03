import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, SectionBox, Wysiwyg, Button, ButtonLinkMod, Checkbox, Radio, InputForm, TextareaForm} from'../../StyleConfig';

import image1 from '../../assets/d1.jpg'
import image2 from '../../assets/d2.jpg'

const title = 'Hello World, this is my first styled component!';

export const BLOG_API = "http://3.wm22736-wordpress.tw1.ru/";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { // инициализируем состояние по-умолчанию
            posts: []
        };
    }

    componentWillMount () {
        return fetch(BLOG_API + '/wp-json/wp/v2/posts') // делаем запрос к Wordpress API
            .then((response) => response.json()) // получаем ответ в формате json
            .then(posts => {
                this.setState({
                    posts: posts, // обновляем состояние страницы
                });
            })
    }

    render() {
        return (
            <SectionBox>
                <Container>
                    <ul>
                        {
                            this.state.posts.map(item => (
                                <li key={item.id}>
                                    <Link to={`/${item.id}`}>
                                        {item.title.rendered}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </Container>
            </SectionBox>
        )
    }
}

export default Home;