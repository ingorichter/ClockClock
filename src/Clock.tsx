import * as React from "react";
import styled from 'styled-components';

type ClockProps = {
    now: Date;
    secs: number;
}

type ClockState = {
    hour: number;
    minute: number;
    second: number;
}

let Second = styled.g`
    fill: none;
    stroke: rgb(173, 21, 21);
    stroke-width: 4;
    stroke-miterlimit: 20;
    transform: ${props => "rotate(" + props.value +"deg)"};
`;

let SecondArm = styled.g`
    fill: none;
    stroke: rgb(173, 21, 21);
    stroke-width: 4;
    stroke-miterlimit: 20;
    transform: ${props => "rotate(" + props.value +"deg)"};
`;

class Clock extends React.Component<ClockProps, ClockState> {
    constructor(props: ClockProps) {
        super(props);
    }

    render() {
        let sec = this.props.secs;
        let secPosition = (sec * 360) / 60;

        return (
            <div className="clockbox">
                {/* <h1>{sec}</h1> */}
                <svg
                    id="clock"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 600 600"
                >
                    <g id="face">
                        <circle className="circle" cx="300" cy="300" r="253.9" />
                        {/* <path
                            className="hour-marks"
                            d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"
                        /> */}
                        <circle className="mid-circle" cx="300" cy="300" r="16.2" />
                    </g>
                    <g id="hour">
                        <path className="hour-arm" d="M300.5 298V142" />
                        <circle className="sizing-box" cx="300" cy="300" r="253.9" />
                    </g>
                    <g id="minute">
                        <path className="minute-arm" d="M300.5 298V67" />
                        <circle className="sizing-box" cx="300" cy="300" r="253.9" />
                    </g>
                    <Second id="second" value={secPosition}>
                        <path className="second-arm" d="M300.5 350V55" />
                        {/* <circle className="sizing-box" cx="300" cy="300" r="253.9" /> */}
                    </Second>
                </svg>
            </div>);
    }
}

export default Clock;
