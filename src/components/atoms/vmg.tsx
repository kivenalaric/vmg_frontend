import * as React from 'react';
import "./style.scss"

interface h1Props {
  text: string;
}

const H1: React.FC<h1Props> = ({ text }) => {
  return <h1 className="logo font-sans-Merienda">{text}</h1>
}

export default H1
