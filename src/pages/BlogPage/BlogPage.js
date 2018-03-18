import React, {Component} from 'react';
import BLOG_API from '../../pages/Home/Home';
import Loader from '../../components/Loader/Loader';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {media, Container, SectionBox, Wysiwyg, Button, ButtonLinkMod, TitleH1, TitleH2} from'../../StyleConfig';


var loaderContent = '<загрузка.../>'

const ArticlePage = styled.div`
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
        
        ${media.md`
            margin: 0 auto 4rem;
            width: 80rem;
        `}        
        ${media.lg`
            margin: 0 auto 5rem;
            width: 80rem;
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

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: false
        };
    }


    componentWillMount () {

        return fetch('http://3.wm22736-wordpress.tw1.ru/wp-json/wp/v2/posts/' + this.props.match.params.id).then((response) => response.json())
            .then(post => {
                this.setState({
                    post: post
                });
            });
    }

    componentDidMount () {
        this.setState({
            postLoad: true
        });
    }


    render() {
        console.log('render');
        return (

            <SectionBox>
                <Container>
                    <ArticlePage>
                        {this.state.post ?
                            <article><header><TitleH1>{this.state.post.title.rendered}</TitleH1><ArticleDate><span>{this.state.post.date_gmt}</span></ArticleDate></header>{this.state.post ? <Wysiwyg dangerouslySetInnerHTML={{ __html : this.state.post.content.rendered }}></Wysiwyg> : <div></div>}</article>
                            :
                            <Loader><span>{loaderContent}</span></Loader>}
                    </ArticlePage>
                </Container>
            </SectionBox>
        )
    }
}

export default BlogPage;