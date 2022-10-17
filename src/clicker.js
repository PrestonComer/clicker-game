import React, { useContext } from 'react';
import { Bank, GPC } from './cTest.js';

export default function Clicker() {
    const [bank, setBank] = useContext(Bank);
    const [gpc, setGPC] = useContext(GPC);

    function earnMoney(e) {
        setBank(bank + gpc);
    }

    return (
        <button
            onClick={earnMoney}>
            Click Me
        </button>
    )
}