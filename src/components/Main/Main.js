import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../../pages/Home/Home';
// import About from '../../pages/About/About';
// import Contacts from '../../pages/Contacts/Contacts';

class Main extends Component {
    render() {
        return (
            <main className="main">
                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        {/*<Route path='/about' component={About}/>*/}
                        {/*<Route path='/contacts' component={Contacts}/>*/}
                    </Switch>
                </div>
            </main>
        )
    }
}

export default Main;