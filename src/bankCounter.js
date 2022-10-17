import React, { useContext } from 'react';

import { Bank } from './cTest';

export default function BankCounter(){
    const [bank, setBank] = useContext(Bank);
    return (<h1>${bank}</h1>)
}