import React, { useState } from 'react';

import './index.css';
import IntroBot from "./bot";
import Click from "./click";

import { Bank } from "./cTest";

export default function App() {
    const [bank, setBank] = useState(0);
    return (
        <Bank.Provider value={[bank, setBank]}>
            <Click />
            <IntroBot name="Preston" startingCost={10}/>
        </Bank.Provider>
    );
}