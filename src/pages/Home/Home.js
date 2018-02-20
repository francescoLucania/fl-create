import React, {Component} from 'react';

const title = 'Home';

class Home extends Component {
    render() {
        document.title = title;

        return (
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
}

export default Home;