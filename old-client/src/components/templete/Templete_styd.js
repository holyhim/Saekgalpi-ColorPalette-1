import { Button } from 'antd';
import styd from 'styled-components';

export const RoundButton = styd.button`
    font-size: 11pt;
    border: 0;
    padding: 4px 20px;
    border-radius: 30px;
    background-color: transparent;
    color: #c7c7c7;
    outline: 0;
    cursor: pointer;
    transition: color 0.3s, all 0.3s;

    &:hover{
        background-color: #e7e7e7;
        color: #5d5d5d;
        --antd-wave-shadow-color: #c7c7c7;
    }

`;

export const NoneSquareBtn = styd.button`
    border: 0;
    border-radius: 2px;
    color: #7a7a7a;
    width: 400px;
    height: 50px;
    font-size: 2em;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    transition: all 0.5s;
    &:hover{
        color: #3a3a3a;
    }
`;

export const LogoutBtn = styd(Button)`
color: #a6a6a6;
background-color: #e7e7e7;
border: 1px solid #e7e7e7;

&:hover{
    background-color: #e7e7e7;
    border: 1px solid #e7e7e7;
    color: #5d5d5d;
}
&:focus {
    background-color: #e7e7e7;
    border: 1px solid #e7e7e7;
    color: #a6a6a6;
}
&:after {
    --antd-wave-shadow-color: #c7c7c7;
}
`;

export const RoundWaveButton = styd(Button)`
color: #a6a6a6;
background-color: #e7e7e7;
border: 1px solid #e7e7e7;

&:hover{
    background-color: #e7e7e7;
    border: 1px solid #e7e7e7;
    color: #5d5d5d;
}
&:focus {
    background-color: #e7e7e7;
    border: 1px solid #e7e7e7;
    color: #5d5d5d;
}
&:after {
    --antd-wave-shadow-color: #c7c7c7;
}
`;

export const UnderlineButton = styd.div`
line-height: 4.5;
padding: 0 10px;
transition: .4s all;
color: #a6a6a6;
&:hover {
    color: #4a4a4a;
    box-shadow: 0px -8px 0px 0px #4a4a4a inset;
}
`;
