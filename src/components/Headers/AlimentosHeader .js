import { Container, Row, Col } from "reactstrap";

const AlimentoseHeader  = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "300px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/frutBackground.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="10" md="10">
              <h1 className="display-2 text-white">Cadastre os Alimentos</h1>
              <p className="text-white mt-0 mb-5">
               Aqui você poderá cadastrar os seus alimentos desejados para manter uma alimentação balanceada.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default AlimentoseHeader ;
