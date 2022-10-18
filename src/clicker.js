import React, { useContext } from 'react';
import { Bank, GPC } from './context.js';

export default function Clicker() {
    const [bank, setBank] = useContext(Bank);
    const [gpc] = useContext(GPC);

    function earnMoney(e) {
        setBank(bank + gpc);
    }

    return (
        <button
            onClick={earnMoney}>
            Click To Earn
        </button>
    )
}