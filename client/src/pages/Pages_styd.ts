import { Button, Form, Input } from 'antd';
import styd from 'styled-components';

///////////////////팔레트/////////////////////

// export const ColorPicker = styd(BlockPicker)`
//     display: ${(props) => (props.isOpen ? 'block' : 'none')};
//     position: absolute;
//     left: 1rem;
//     top: 10px;
// `;

// export const SignatureColor = styd.div`
//     width: 300px;
//     height: 300px;
//     cursor: pointer;
//     background-color: ${(props) => props.color || 'royalblue'};
// `;

export const EditPaletteContainer = styd.section`
    width: 70vw;
    height: 200px;
    margin-bottom: 20px;
`;

export const MakePaletteContainer = styd.section`
    width: 70vw;
    height: 200px;
    margin-bottom: 20px;
`;

///////////////////폼/////////////////////

export const SignForm = styd(Form.Item)`
width: 500px;
margin-bottom: 30px;
`;

///////////////////인풋/////////////////////

export const PWInput = styd(Input.Password)`
margin-bottom: 20px;
&:hover{
    border: 1px solid #a7a7a7;
}
&:focus {
    border: 1px solid #a7a7a7;
    box-shadow: 0 0 0 2px #e1e1e1;
}
`;

export const EmailInput = styd(Input)`
height: 70px;
padding: 0 27px;
font-size: 1.5em;
&:hover{
    border: 1px solid #a7a7a7;
}
&:focus {
    border: 1px solid #a7a7a7;
    box-shadow: 0 0 0 2px #e1e1e1;
}

`;

export const SignInPWInput = styd(Input.Password)`
height: 70px;
padding: 0 27px;
&:hover{
    border: 1px solid #a7a7a7;
}
&:focus {
    border: 1px solid #a7a7a7;
    box-shadow: 0 0 0 2px #e1e1e1;
}
.ant-input{
    font-size: 1.5em;
}
`;

///////////////////버튼/////////////////////

export const WaveButton = styd(Button)`
color: #a6a6a6;
background-color: #e7e7e7;
border: 1px solid #e7e7e7;
margin: 10px;

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

export const BigSquareButton = styd(Button)`
color: #7a7a7a;
background-color: #e2e2e2;
border: 1px solid #d2d2d2;
margin: 10px;
margin-bottom: 120px;
border-radius: 20px;
width: 840px;
height: 100px;
font-size: 3em;
transition: all .5s liner;
&:hover{
    background-color: #d2d2d2;
    border: 1px solid #d2d2d2;
    color: #7a7a7a;
    box-shadow: 0 0 10px 3px #e9e9e9;
}

`;

//* PaletteDetail page

export const EditButton = styd(Button)`
  color: #a6a6a6;
  background-color: #e7e7e7;
  border: 1px solid #e7e7e7;
  margin-bottom: 10px;
  margin-right: 10px;
  &:hover {
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

export const ShareBtn = styd.button`
  all: unset;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 20px;
`;

export const PaletteDescription = styd.div`
  width: 90%;
  margin: 0 auto;
  height: 5vw;
  border-top: 1px solid #c7c7c7;
  padding: 10px;
  font-size: 1.5em;
`;
