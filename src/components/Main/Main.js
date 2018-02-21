import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../../pages/Home/Home';
// import About from '../../pages/About/About';
// import Contacts from '../../pages/Contacts/Contacts';

import styled from 'styled-components';

const styleMain = styled.Main`
  flex: 1;
  width: 100%;
`;

class Main extends Component {
    render() {
        return (
            <styleMain>
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        {/*<Route path='/about' component={About}/>*/}
                        {/*<Route path='/contacts' component={Contacts}/>*/}
                    </Switch>
                </div>
            </styleMain>
        )
    }
}

export default Main;