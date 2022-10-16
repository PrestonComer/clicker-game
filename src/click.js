import { useState } from "react";

export default function Click({bankedMoney}) {
    const [level, setLevel] = useState(1);
    const [cost, setCost] = useState(10);
    const [gain, setGain] = useState(1);
    const [bank, setBank] = useState(bankedMoney);

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
        return bank;
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