import * as React from 'react';
import "./style.scss";

interface buttonProps {
    text: string;
    onClick: () => void;
    type: string;
    disabled: {}
}

const SubButton: React.FC<buttonProps> = ({ text, onClick, type, disabled }) => {
    return (
        <button className="button w-full" onClick={onClick} type={type}>{text}</button>
    )
}

export default SubButton
