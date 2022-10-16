import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickValue: 1,
            bank: 0,
            level: 1,
            cost: 10,
        };
        this.canUpgrade = this.canUpgrade.bind(this);
    }

    canUpgrade() {
        if (this.state.cost <= this.state.bank) {
            return (
                <button onClick={
                    () => this.setState({
                        level:
                            this.state.level + 1,
                        cost:
                            this.state.cost +
                            this.state.level * 2,
                        bank:
                            this.state.bank - 
                            this.state.cost,
                        clickValue:
                            this.state.clickValue + 1
                    })}>
                    Upgrade Earn Per Click
                </button>)
        } else {
            return (
                <button onClick={
                    () => this.setState({
                        level:
                            this.state.level + 1,
                        cost:
                            this.state.cost +
                            this.state.level * 2,
                        bank:
                            this.state.bank - 
                            this.state.cost,
                        clickValue:
                            this.state.clickValue + 1
                    })} disabled>
                    Upgrade Earn Per Click (Insufficient Funds)
                </button>)
        }
    }

    render() {
        return (
            <div>
                <p><strong>Bank: </strong>{this.state.bank}</p>
                <p><strong>Level: </strong>{this.state.level}</p>
                <p><strong>Cost: </strong>{this.state.cost}</p>
                <button onClick={
                    () => this.setState({
                        bank: 
                            this.state.clickValue + 
                            this.state.bank,
                    })}>
                    Click
                </button>
                {this.canUpgrade()}
            </div>)
    }
}

class IntroBot extends Game {
    constructor(props) {
        super(props);
        this.state = {
            level: 0,
            cost: 10,
            gain: 0,
            name: this.props.name
        };
        this.canUpgrade = this.canUpgrade.bind(this);
    };

    canUpgrade() {
        if (this.state.cost <= 999999) {
            // alert(this.state.name + " Can Be Bought");
            return (
                <button onClick={
                    () => this.setState({
                        level: 
                            this.state.level + 1,
                        cost: 
                            this.state.cost + (this.state.level * 2),
                        gain: 
                            this.state.level * 2
                        // Game.state.bank:
                        //     Game.state.bank - this.state.cost
                    })}>
                    Upgrade Earn Per Click
                </button>)
        }
        return (
            <button disabled>
                Insufficient Funds
            </button>);
    };

    render() {
        return (
            <div className="bot">
                <p><strong>{this.state.name}</strong></p>
                <p><strong>Cost: </strong>{this.state.cost}</p>
                <p><strong>Profit Per Second: </strong>{this.state.gain}</p>
                {this.canUpgrade()}
            </div>
        )
    }
}

export {Game, IntroBot};