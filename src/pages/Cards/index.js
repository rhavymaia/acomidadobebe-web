import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";

import salada from "../../imagens/salada.jpg";
import vegetais from "../../imagens/vegetais.jpg";
import vegetais1 from "../../imagens/vegetais1.jpg";

function Cards() {
    return (
        <Container>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={salada} />
                    <Card.Body>
                        <Card.Title>Salada</Card.Title>
                        <Card.Text>
                            Essa salada é uma combinação de frutas, legumes e verduras.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={vegetais} />
                    <Card.Body>
                        <Card.Title>Vegetais</Card.Title>
                        <Card.Text>
                            Essa salada é uma combinação de frutas, legumes e verduras.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={vegetais1} />
                    <Card.Body>
                        <Card.Title>Vegetais</Card.Title>
                        <Card.Text>
                            Essa salada é uma combinação de frutas, legumes e verduras.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    );
}

export default Cards;