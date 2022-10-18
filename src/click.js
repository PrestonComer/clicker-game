import React, { useContext, useState } from "react";
// import { BankedMoney } from './index';
import { Bank, GPC } from "./context";

export default function Click() {
    const [level, setLevel] = useState(1);
    const [cost, setCost] = useState(10);

    const [bank, setBank] = useContext(Bank);
    const [gpc, setGPC] = useContext(GPC);

    function upgradeClicker(e) {
        setLevel(level + 1);
        setCost(cost + (level * 2));
        setGPC(gpc + 1);
        setBank(bank - cost);
    };
    function canUpgrade(e) {
        if (cost <= bank) {
            return (
                <button 
                    onClick={upgradeClicker}>
                    Upgrade Click To Earn
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
    return (
        <div>
            <p><strong>Clicks</strong></p>
            <p><strong>Cost: </strong>{cost}</p>
            <p><strong>Profit Per Click: </strong>{level}</p>
            {canUpgrade()}
        </div>
    )
}