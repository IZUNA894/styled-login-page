import React, {useState,useContext} from 'react';
import {Toggle} from 'components/common'
import styled,{ThemeContext} from 'styled-components';
import {Link as LinkVirtual,useLocation} from 'react-router-dom';

const HeaderWrapper = styled.header`
                height:60px;
                width:100%;
                box-sizing:border-box;
                display:flex;
                padding:0 16px;
                position:fixed;
                top:0;
                background-image:linear-gradient(to right , ${p=>p.theme.primaryColor} , ${p=>p.theme.secondryColor});
                border-bottom:3px solid ${p=>p.theme.secondryColor};
`;

const Menu = styled.nav`
                display:${p=>p.open ? 'block' : 'none'};
                position:absolute;
                font-family:'Open Sans';
                box-sizing:border-box;
                padding:8px;
                left:0;
                top:60px;
                width:100%;
                border-bottom:3px solid ${p => p.theme.secondaryColor};
                background-color:${p=>p.theme.backgroundColor};
                @media(min-width:768px){
                    display:flex;
                    background:none;
                    top:initial;
                    left:initial;
                    margin:auto 0 auto auto;
                    border-bottom:none;
                    position: relative;
                    width:initial;
                }
                `;
//overiding styled components and react components
const MenuAlt = styled(Menu)`
                border-bottom:2px solid red;
                `;
const Link = ({isActive , children,...props})=>{
    return(
        <LinkVirtual {...props}>
            {children}
        </LinkVirtual>
    )
}
const MobileMenuIcon = styled.div`
                margin:auto 0 auto auto;
                width:25px;
                min-width:25px;
                padding:5px;
                >div{
                    height:3px;
                    background-color:${p=>p.theme.textColor};
                    margin:5px 0;
                    width:100%;
                }
                @media(min-width:768px){
                    display:none;
                }`;
const StyledLink = styled(Link)`
                padding:4px 8px;
                display:block;
                text-align:center;
                box-sizing:border-box;
                margin:auto 0;
                text-decoration:none;
                color:${p=>p.isActive?'magenta':p.theme.textColor};
                font-weight:${p=>p.isActive?'bold':'normal'};
                
                `
export function Header(){
    const {pathname} =useLocation();
    const [menuOpen,setMenuOpen] =useState(false);
    const {id,setTheme} = useContext(ThemeContext);
        return (
            <HeaderWrapper>
                <MobileMenuIcon onClick={()=>setMenuOpen(s=>!s)}>
                    <div/>
                    <div/>
                    <div/>
                </MobileMenuIcon>
                <Menu open={menuOpen}>
                    <StyledLink to="/" isActive={pathname === "/"}>Home</StyledLink>
                    <StyledLink to="login" isActive={pathname === "/login"}>Login</StyledLink>
                    <Toggle isActive={ id === 'darkTheme' } onToggle={setTheme}/>

                </Menu>

            </HeaderWrapper>
        )
    
}
