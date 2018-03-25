import React, {Component} from 'react';
import Moment from 'react-moment';
import {NavLink, Link} from 'react-router-dom';

import BlogPage from '../../pages/BlogPage/BlogPage';
import Loader from '../../components/Loader/Loader';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {Container, SectionBox, Wysiwyg, media, Button, ButtonLinkMod, Checkbox, Radio, InputForm, TextareaForm, TitleH2} from'../../StyleConfig';

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
var loaderContent = "< загрузка... />";
// an example array of items to be paged

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { // инициализируем состояние по-умолчанию
          posts: [],
          postsLoad: false
        };
    }

    componentWillMount () {
        return fetch(BLOG_API + '/wp-json/wp/v2/posts') // делаем запрос к Wordpress API
            .then((response) => response.json()) // получаем ответ в формате json
            .then(posts => {
                this.setState({
                  posts: posts, // обновляем состояние страницы
                  postsLoad: true
                });
            })
    }

    componentDidMount () {

    }

    render() {
        return (
            <SectionBox>
                <Container>

                    <Loader className={this.state.postsLoad ? 'hide' : 'hide'}><span>{loaderContent}</span></Loader>
                    <HomeBlog id="list">
                        {
                            this.state.posts.map(item => (
                                <article key={item.id}>
                                    <header>
                                        <TitleH2><Link  to={`/home/${item.id}`}>{item.title.rendered}</Link></TitleH2>
                                        <ArticleDate><span>
                                            <Moment format="YYYY/MM/DD">{item.date_gmt}</Moment></span>
                                        </ArticleDate>
                                    </header>
                                    <Link to={`/home/${item.id}`}>
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
