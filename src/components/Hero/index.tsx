import { Col, Container, Row } from "react-bootstrap";
import styles from './styles.module.scss'

export default function Hero(){
    return(
        <div id={styles.hero}>
            <Container>
                
                <Row>

                    <Col md={6}>
                        <div className={styles.text}>
                            <h4>APRENDA MARKETING DIGITAL DO ZERO</h4>
                            <h1>
                            CRIE UM NEGÓCIO ONLINE.
                            SEJA UM PROFISSIONAL DA INTERNET.
                            TENHA UMA NOVA FONTE DE RENDA.
                            </h1>

                            <p>
                                Faça parte do grupo de pessoas que vivem com mais liberdade, trabalhando com o que amam e fazendo dinheiro de forma escalável
                                e exponencial.
                            </p>

                            <button>
                                COMECE AGORA
                            </button>
                            <br/><br/>
                            <p className={styles.span}>
                            🔥 Garanta seu acesso agora por apenas
                            <strong> R$ 39,90/mês </strong> no plano anual
                            </p>

                        </div>
                    </Col>

                    <Col md={6}>

                
                    </Col>

                </Row>



            </Container>

        </div>
    );
}