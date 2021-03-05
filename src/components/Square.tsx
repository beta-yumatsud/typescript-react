import * as React from "react";

type SquareValue = string | null

interface SquareProps {
    value: SquareValue;
    onClick: () => void;
}

class Square extends React.Component<SquareProps, {}>{
    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Square
