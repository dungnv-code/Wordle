import React from 'react'
import "./heading.css"
interface HeadingProps {
    type: string;
    text: string;
}

const heading: React.FC<HeadingProps> = (props) => {
    const { type, text } = props;

    return (
        <p className={`heading-${type}`}>{text}</p>
    )
}

export default heading