import React, { useState } from 'react';

import './index.css';
import IntroBot from "./bot";
import Click from "./click";
import { Bank, GPC } from "./context";
import BankCounter from "./bankCounter";
import Clicker from "./clicker";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export default function App() {
    const [bank, setBank] = useState(0);
    const [gpc, setGPC] = useState(1);

    return (
        <Bank.Provider value={[bank, setBank]}>
            <GPC.Provider value={[gpc, setGPC]}>
                <Container fluid className="noselect" >
                    <Row className='text-center'>
                        <Col>
                            <Alert key={'light'} variant={'dark'}>
                                <BankCounter />
                                <Clicker />
                            </Alert>
                        </Col>
                    </Row>

                    <Row className='text-center'>
                        <Col>
                            <Alert key={'primary'} variant={'primary'}>
                                <Click />
                            </Alert>
                        </Col>

                        <Col>
                            <Alert key={'primary'} variant={'primary'}>
                                <IntroBot name="Bot" startingCost={5} />
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </GPC.Provider>
        </Bank.Provider>
    );
}