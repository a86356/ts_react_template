import React,{FC} from 'react';
import './login.scss'

import { Button } from 'antd';

const Login:FC = ():JSX.Element=> {
    return (
        <div className="loginFormWrap">
            <Button type="primary">Button</Button>
        </div>
    );
}

export default Login;
