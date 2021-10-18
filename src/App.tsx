import * as React from 'react';
import styled from 'styled-components';

import Clock from "./Clock";

type Props = {

};

type AppState = {
    now: Date;
    secs: number;
}

const Layout = styled.div`
    display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr) ) ;
	grid-template-rows: repeat(5, 1fr);
	grid-gap: 1em 1em;
	grid-auto-flow: row;
`;

class App extends React.Component<{}, AppState> {
    state: AppState = { now: new Date(), secs: 0 };
    timerID: NodeJS.Timer;

    constructor(props: Props) {
        super(props);

        this.state = {
            now: new Date(),
            secs: new Date().getSeconds() + 1
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState((state) => ({
            now: new Date(),
            secs: state.secs + 1
        }));
    }

    render() {
        const getClocks = () => {
            let clocks = [];
            for (let i = 0; i <= 164; i++) {
              clocks.push(<Clock {...this.state} key={i} />);
            }
            return clocks;
        };

        return (
            <Layout>
                {/* <h1>Hello world 2!</h1> */}
                {getClocks()}
            </Layout>
        );
    }
}

export default App;