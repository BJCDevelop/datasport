import headerStyles from "./header.module.css"
import Link from 'next/link';
import Image from "next/image";
import Logo from '../public/images/LogoDataSport.png'
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

const pathLeft = [
  { uid: 21, name: ' Home', id: 1, path: '/' },
];

const pathCenter = [
    { uid: 31, name: 'Blog', id: 2, path: '/blog' },
    { uid: 41, name: 'About', id: 3, path: '/about' }
  ];

const pathRight = [
    { uid: 41, name: 'Login', id: 4, path: '/login' },
    { uid: 51, name: 'Register', id: 5, path: '/register' }
  ];

export default function Header(){
    return (       
        <nav className={headerStyles.nav}>
            <Container className={headerStyles.Container}>
                <Row>
                    <Col xs="2">
                        <ul className={headerStyles.ul}>
                            {pathLeft.map((value) => {
                                return (
                                <li key={value.uid}>
                                    <Link href={value.path}>
                                        <Image className="" alt="Logo Home" src={Logo} width={100} height={50}/>
                                        {/* <a className={headerStyles.a}> {value.name} </a> */}
                                    </Link>
                                </li>
                                );
                            })}
                        </ul>
                    </Col>
                    <Col xs="8">
                        <ul className={headerStyles.ul}>
                            {pathCenter.map((value) => {
                                return (
                                <li key={value.uid}>
                                    <Link href={value.path}>
                                        <a className={headerStyles.a}> {value.name} </a>
                                    </Link>
                                </li>
                                );
                            })}
                        </ul>
                    </Col>
                    <Col xs="2">
                        <ul className={headerStyles.ul}>
                            {pathRight.map((value) => {
                                return (
                                <li key={value.uid}>
                                    <Link href={value.path}>
                                        <a className={headerStyles.a}> {value.name} </a>
                                    </Link>
                                </li>
                                );
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </nav> 
    )
}