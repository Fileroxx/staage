import styles from './styles.module.scss'
import Link from 'next/link'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Logo } from '../Logo'
import { useState } from 'react'



export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <div id={styles.header}>
        <Container>

            <Row>

            <Col>
            <Logo />
            </Col>

            <Col>
            <div className={`${styles.links} ${menuOpen ? styles.isMenu : ""}`}>
            
            <div>
            <img src="blogIcon.svg"/>
            <Link href="#">Blog</Link>
            </div>
        
            <div>
            <img src="userIcon.svg" alt=""/>
            <Link href="#">Já sou assinante</Link>
            </div>
           
            <div>
            <img className={styles.ArrowsIcon} src="ArrowsIcon.svg" alt=""/>
            <Link href="#">Assine Agora</Link>
            </div>

            </div> 
            </Col>
            </Row>

            
        </Container>
         
        </div>
    )
}