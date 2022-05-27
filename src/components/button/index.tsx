import * as React from 'react';
// 引入less样式
import './index.less';

interface ButtonProps {
}

const Button: React.FC<ButtonProps> = (props) => {
    const {children, ...rest} = props;
    // 使用my-button样式
    return <button {...rest} className='my-button'>{children}</button>
}

export default Button;
