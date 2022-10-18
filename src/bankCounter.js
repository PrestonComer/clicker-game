import React, { useContext } from 'react';

import { Bank } from './context';

export default function BankCounter(){
    const [bank, setBank] = useContext(Bank);
    return (<h1>${bank}</h1>)
}