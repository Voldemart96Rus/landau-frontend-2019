import React, {Component, Fragment} from 'react';

import Footer from '../components/footer';
import MainPage from '../components/mainPage';

export default class IndexPage extends Component {
    state = {
    };

    render() {
        return (
            <Fragment>
                <MainPage/>
                <Footer/>
            </Fragment>
        );
    }
}
