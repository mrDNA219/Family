import { React, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Home = () => {

    const [homeMessage, setHomeMessage] = useState('Welcome to Harbourt History');
    
   return (
    <Container>
        <h1>{homeMessage}</h1>
    </Container>
   )
}

export default Home;