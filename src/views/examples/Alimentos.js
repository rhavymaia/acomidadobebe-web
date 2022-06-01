import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import {
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
} from "reactstrap";
// core components
import AlimentoseHeader from "components/Headers/AlimentosHeader ";

const Alimentos = () => {
    const url = "http://localhost:8080/ingrediente";
    const [formValue, setformValue] = useState({
        nome: "",
        grupo_nutricional: ""
    });

    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get(url)
            .then(json => setData(json.data))
    }, [])
    console.log(data);

    function submit(event) {
        event.preventDefault();
        Axios.post(url, {
            nome: formValue.nome,
            grupo_nutricional: formValue.grupo_nutricional
        })
            .then(response => {
                console.log(response)
                setformValue({
                    nome: "",
                    grupo_nutricional: ""
                });
            })
    }

    function handleChange(event) {
        const newdata = { ...formValue };
        newdata[event.target.id] = event.target.value;
        setformValue(newdata);
        console.log(newdata);
    }

    const renderTable = () => {
        return data?.map(infrediente => {
            return (
                <tr key={infrediente.id}>
                    <td>{infrediente.nome}</td>
                    <td>{infrediente.grupo_nutricional}</td>
                </tr>
            )
        }
        )
    }
    return (
        <>
            <AlimentoseHeader />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-1" xl="8">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Cadastre os seus alimentos</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">
                                        Preencha os campos abaixo
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row onSubmit={(event) => submit(event)}>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Nome do alimento
                                                    </label>
                                                    <Input
                                                        onChange={(event) => handleChange(event)}
                                                        className="form-control-alternative"
                                                        id="input-username"
                                                        name="nome"
                                                        placeholder="Banana"
                                                        type="text"
                                                        value={formValue.nome}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        Grupo alimentar
                                                    </label>
                                                    <Input
                                                        onChange={(event) => handleChange(event)}
                                                        className="form-control-alternative"
                                                        id="grupo_nutricional"
                                                        name="grupo_nutricional"
                                                        placeholder="Fruta"
                                                        type="text"
                                                        value={formValue.grupo_nutricional}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <button
                                                className="btn btn-success btn-lg btn-block top"
                                                type="submit"
                                            >
                                                Cadastrar Alimento
                                            </button>
                                        </Row>
                                    </div>
                                    <hr className="my-4" />
                                    {/* Address */}
                                    <h6 className="heading-small text-muted mb-4">
                                        alimentos cadastrados <i className="ni ni-collection" />
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="row">Nome</th>
                                                            <th scope="row">Grupo Nutricional</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>{renderTable()}</tbody>
                                                </table>
                                            </Col>
                                        </Row>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Alimentos;
