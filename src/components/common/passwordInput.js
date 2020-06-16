import React ,{useState} from 'react';
import styled from 'styled-components';
import {Input} from './input';

const PasswordInputWrapper = styled.div`
            display:flex;
            ~div{
                margin-bottom: 8px;
            }
            `;
const PasswordInputStyled = styled(Input).attrs(()=>({
            placeholder:'your password'
}))`
            border-top-right-radius:0;
            border-bottom-right-radius:0;
                `;
const ToggleButton =styled.div`
            height:48px;
            border:1px solid #ccc;
            box-sizing:border-box;
            font-size:0.9rem;
            display:flex;
            background:white;
            color:black;
            user-select:none;
            cursor:pointer;
            font-weight:bold;
            border-left:none;
            border-top-right-radius:4px;
            border-bottom-right-radius:4px;
            padding:8px;
            min-width:50px;
            `;
export function PasswordInput(props){
    const [showPassword,setShowPassword] = useState(false);
    return(
        <PasswordInputWrapper>
        <PasswordInputStyled {...props} type={showPassword ? 'text':'password'}/>
        <ToggleButton onClick={()=>setShowPassword(s=>!s)}>
            {showPassword?'show':'hide'}
        </ToggleButton>
        </PasswordInputWrapper>
        
    )
}