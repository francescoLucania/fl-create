import React, {Component} from 'react';
import BLOG_API from '../../pages/Home/Home';
import Loader from '../../components/Loader/Loader';
import Moment from 'react-moment';

// styles
import styled, {css, ThemeProvider} from 'styled-components';
import {media, Container, SectionBox, Wysiwyg, Button, ButtonLinkMod, TitleH1, TitleH2} from'../../StyleConfig';

let loaderContent = '<загрузка.../>'
let loaderContentError = '<прблема-попробуйте-позже.../>'

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

  render() {
    return (
      <SectionBox>
        <Container>
          <ArticlePage>
            {this.state.post ?

              <article>
                  <header>
                  <TitleH1>{this.state.post.title.rendered}</TitleH1>
                    <ArticleDate><span>
                      <Moment format="YYYY/MM/DD">{this.date_gmt}</Moment></span>
                    </ArticleDate>
                  </header>
                  <Wysiwyg
                    innerRef={(div) => { this.wysiwygBox = div; }}
                    className="js-wysiwyg"
                    dangerouslySetInnerHTML={{ __html : this.state.post.content.rendered }}>
                  </Wysiwyg>
              </article>
              :
              <span></span>
            }
            <Loader className={this.state.post ? 'is-hidden' : ''}><span>{loaderContent}</span></Loader>
          </ArticlePage>
        </Container>
      </SectionBox>
    )
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
}

export default BlogPage;
