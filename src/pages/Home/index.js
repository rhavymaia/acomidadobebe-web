import React from "react";
import { Carousel, Card } from "react-bootstrap";

import './style.css'

import salada from "../../imagens/salada.jpg";
import vegetais from "../../imagens/vegetais.jpg";
import vegetais1 from "../../imagens/vegetais1.jpg";

function Home() {
    return (
        <div className="grid-container">
            <div className="grid-item">
                <Carousel fade>
                    <Carousel.Item>
                        <Card.Img className="img" variant="top" src={salada} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card.Img className="img" variant="top" src={vegetais} />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card.Img className="img" variant="top" src={vegetais1} />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    );
}

export default Home;