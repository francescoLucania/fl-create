import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import BlogPage from '../../pages/BlogPage/BlogPage';
// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, SectionBox, Wysiwyg, media, Button, ButtonLinkMod, Checkbox, Radio, InputForm, TextareaForm, TitleH2} from'../../StyleConfig';


const title = 'Hello World, this is my first styled component!';

export const BLOG_API = "http://3.wm22736-wordpress.tw1.ru/";

const HomeBlog = styled.main`
  > article {
    &:not(last-child) {
      margin-bottom: ${props => props.theme.indentsLG};
      
      ${media.md`
        margin-bottom: 5rem;
      `}
            
      ${media.lg`
        margin-bottom: 6rem;
      `}
    }
    
    > header {
        margin-bottom: ${props => props.theme.indentsLG};
        text-align: center;
        
        ${media.lg`
            margin: 0 auto 2rem;
            width: 80rem;
        `}
    } 
  }
`;

const ArticleImage = styled.main`
  > img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  
    &:not(last-child) {
      margin-bottom: 2rem;
      
      ${media.md`
        margin-bottom: 2rem;
      `}
            
      ${media.lg`
        margin-bottom: 3rem;
      `}
    }
  }
`;

const ArticleDate = styled.div`
    margin-top: 1rem;
  
    > span {
      display: inline-block;
      color: ${props => props.theme.colorLightest};
    }
  }
`;


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

    componentDidMount () {

    }

    render() {
        return (
            <SectionBox>
                <Container>
                    <HomeBlog id="list">
                        {
                            this.state.posts.map(item => (
                                <article key={item.id}>
                                    <header>
                                        <TitleH2><Link to={`/${item.id}`}>{item.title.rendered}</Link></TitleH2>
                                        <ArticleDate><span>{item.date_gmt}</span></ArticleDate>
                                    </header>
                                    <Link to={`/${item.id}`}>
                                        <ArticleImage>
                                            <img src={item.better_featured_image.source_url} alt=""/>
                                        </ArticleImage>
                                    </Link>
                                </article>
                            ))
                        }
                    </HomeBlog>
                </Container>
            </SectionBox>
        )
    }
}

export default Home;