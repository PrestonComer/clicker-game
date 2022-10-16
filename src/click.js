import React, { useContext, useState } from "react";
// import { BankedMoney } from './index';
import { Bank } from "./cTest";

export default function Click() {
    const [level, setLevel] = useState(1);
    const [cost, setCost] = useState(10);
    const [gain, setGain] = useState(1);

    const [bank, setBank] = useContext(Bank);

    function upgradeClicker(e) {
        setLevel(level + 1);
        setCost(cost + (level * 2));
        setGain(gain + 1);
        setBank(bank - cost);
    };
    function canUpgrade(e) {
        if (cost <= bank) {
            return (
                <button 
                    onClick={upgradeClicker}>
                    Upgrade Gain Per Click
                </button>
            )
        } else {
            return (
                <button disabled>
                    Insufficient Funds
                </button>
            )
        }
    };
    function earnMoney(e) {
        setBank(bank + gain);
    };
    return (
        <div>
            <p>
                <strong>Bank: </strong>{bank}
            </p>
            <p>
                <strong>Level: </strong>{level}
            </p>
            <p>
                <strong>Cost: </strong>{cost}
            </p>
            
            <button 
                onClick={earnMoney}>
                Click
            </button>
            {canUpgrade()}
        </div>
    )
}