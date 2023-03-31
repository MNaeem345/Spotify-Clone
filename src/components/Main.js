import React from 'react';
import Container from '@material-ui/core/Container';
import '../components/Main.css';

function Main() {
    return (
        <Container className='MuiContainer-root' maxWidth='xl'>
            <ul className='other-header'>
                <li className='s-list'><a href='#'>Premium</a></li>
                <li className='s-list'><a href='#'>Support</a></li>
                <li className='s-list'><a href='#'>Download</a></li>
                <li className='random list'>   |</li>
                <li className='s-list'><a href='#'>Sign Up</a></li>
                <li className='other-list'><button className='login-button' type='submit'>Log in</button></li>
            </ul>
        </Container>
    );
}

export default Main;
