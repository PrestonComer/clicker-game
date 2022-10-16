import { useContext, useEffect, useState } from "react";
import { Bank } from "./cTest";

export default function IntroBot({startingCost, name}) {
    // startingCost, costFormula, gainFormula, name}) {
    const [level, setLevel] = useState(0);
    const [cost, setCost] = useState(startingCost);
    const [gain, setGain] = useState(0);

    const [bank, setBank] = useContext(Bank);

    useEffect(() => {
        const interval = setInterval(() => {
            setBank(bank + gain);
        }, 1000);
        return () => clearInterval(interval);
    }, [bank, gain]);

    function upgradeBot(e) {
        setLevel(level + 1);
        setCost(cost + ((level + 1) * 2));
        setGain((level + 1) * 2);
        setBank(bank - cost);
    };
    function canUpgrade(e) {
        if (cost <= bank) {
            return (
                <button
                    onClick={upgradeBot}>
                    Upgrade Bot
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
        <div className="bot">
            <p className='name'>
                <strong>{name}</strong>
            </p>
            <p className='cost'>
                <strong>Cost: </strong>{cost}
            </p>
            <p className='profit'>
                <strong>PPs: </strong>{gain}
            </p>
            {canUpgrade()}
        </div>
    )
}