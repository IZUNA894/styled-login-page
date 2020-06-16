import styled,{css} from 'styled-components';
import PropTypes from "prop-types";
const largeStyles = ({large})=>{
    if(large){
        return css`
            padding:15px;
            font-size:2rem;
            border-radius:8px;`
    }else{
        return css`
            padding:8px;
            font-size:1rem;
            border-radius:4px;
            `
    }
    
}
const Button = styled.button`
        color:white;
        background-color:${p=>p.secondry?p.theme.secondryColor:p.theme.primaryColor};
        display:block;
        font-weight:bold;
        ${largeStyles}
        
        box-shadow:none;
        border:none;
        width:100%;
        white-space:none;
        margin-top:5px;
        
        &:disabled{
            background-color:#eee;
            color: #fff;
        }
        &:hover{
        
        }
        `;

Button.propTypes = {
    large:PropTypes.bool,
    secondry:PropTypes.bool
}
export {Button};