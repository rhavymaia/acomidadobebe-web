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
import NutriHeader from "components/Headers/NutriHeader";

const Nutricionista = () => {
    const url = "http://localhost:8080/nutricionista";
    const [formValue, setformValue] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
        nascimento: "",
        crn: ""
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
            sobrenome: formValue.sobrenome,
            email: formValue.email,
            senha: formValue.senha,
            nascimento: formValue.nascimento,
            crn: formValue.crn
        })
            .then(response => {
                console.log(response)
                setformValue({
                    nome: "",
                    sobrenome: "",
                    email: "",
                    senha: "",
                    nascimento: "",
                    crn: ""
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
        return data?.map(nutricionist => {
            return (
                <tr key={nutricionist.id}>
                    <td>[{nutricionist.nome}, "", {nutricionist.sobrenome}]</td>
                    <td>{nutricionist.crn}</td>
                    <td>{nutricionist.email}</td>
                </tr>
            )
        }
        )
    }

    return (
        <>
            <NutriHeader />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-1" xl="8">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Cadastro de nutricionista</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={(event) => submit(event)}>
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
                                                        Nome
                                                    </label>
                                                    <Input
                                                        onChange={(event) => handleChange(event)}
                                                        className="form-control-alternative"
                                                        id="input-username"
                                                        name="nome"
                                                        placeholder="Thamyres"
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
                                                        Sobrenome
                                                    </label>
                                                    <Input
                                                        onChange={(event) => handleChange(event)}
                                                        className="form-control-alternative"
                                                        id="grupo_nutricional"
                                                        name="grupo_nutricional"
                                                        placeholder="Fonseca de Souza"
                                                        type="text"
                                                        value={formValue.sobrenome}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        Data de Nascimento
                                                    </label>
                                                    <Input
                                                        onChange={(event) => handleChange(event)}
                                                        className="form-control-alternative"
                                                        id="grupo_nutricional"
                                                        name="grupo_nutricional"
                                                        placeholder="01/01/2000"
                                                        type="text"
                                                        value={formValue.nascimento}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        CRN
                                                    </label>
                                                    <Input
                                                        onChange={(event) => handleChange(event)}
                                                        className="form-control-alternative"
                                                        id="grupo_nutricional"
                                                        name="grupo_nutricional"
                                                        placeholder="123456789"
                                                        type="number"
                                                        value={formValue.crn}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        E-mail
                                                    </label>
                                                    <Input
                                                        onChange={(event) => handleChange(event)}
                                                        className="form-control-alternative"
                                                        id="grupo_nutricional"
                                                        name="grupo_nutricional"
                                                        placeholder="thamyres@nutricionista.com"
                                                        type="email"
                                                        value={formValue.email}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-password"
                                                    >
                                                        Senha
                                                    </label>
                                                    <Input
                                                        onChange={(event) => handleChange(event)}
                                                        className="form-control-alternative"
                                                        id="grupo_nutricional"
                                                        name="grupo_nutricional"
                                                        placeholder="********"
                                                        type="password"
                                                        value={formValue.senha}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <button
                                                className="btn btn-success btn-lg btn-block top"
                                                type="submit"
                                            >
                                                Cadastrar Nutricionista
                                            </button>
                                        </Row>
                                    </div>
                                    <hr className="my-4" />
                                    {/* Address */}
                                    <h6 className="heading-small text-muted mb-4">
                                        nutricionistas cadastrados <i className="ni ni-collection" />
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col md="12">
                                                <table className="table table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope="row">Nome</th>
                                                            <th scope="row">CRN</th>
                                                            <th scope="row">E-mail</th>
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

export default Nutricionista;
