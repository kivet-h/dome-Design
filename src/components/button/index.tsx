import * as React from 'react';

interface ButtonProps {
}

const Button: React.FC<ButtonProps> = (props) => {
    const {children, ...rest} = props;
    return <button {...rest} >{children}</button>
}

export default Button;
