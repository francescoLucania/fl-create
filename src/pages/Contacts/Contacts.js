import React, {Component} from 'react';
import PagePromo from '../../components/PagePromo/PagePromo';

// styles
import {Container, SectionBox, PromoTitleH1, PromoTitleH2, TitleH2} from'../../StyleConfig';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <SectionBox>
          <Container>
          <PagePromo>
            <header>
              <PromoTitleH1>03: Contacts</PromoTitleH1>
              <PromoTitleH2>Contact Me</PromoTitleH2>
            </header>
            <p>Email is the best way, to get in touch please use the form or email us at</p>
            <p><a href='mailto:francescolucaniacom@gmail.com'>francescolucaniacom@gmail.com</a></p>
          </PagePromo>
          </Container>
        </SectionBox>
      </div>
    )
  }
}

export default Contacts;
