/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from "styled-components";
import {Link} from 'react-router-dom';
// import Auth from './Auth'
// import Button from '@material-ui/core/Button';


function InitialScreen() {
    return (
        <Header>
            <Main>
                <Search>
                    <input 
                        type='text'
                        id="search"
                        placeholder='Search'
                    /> 
                </Search>
                <NavMenu>
                    <span>Quem somos</span>
                    <span>Nossos Cursos</span>
                    <span ><Link to="/login">Entrar</Link></span>
                    <span ><Link to="/CadUsuario">Cadastrar</Link></span>
                    
                    
                </NavMenu>
            </Main>
        </Header>
        
    )
}


export default InitialScreen


const Header = styled.div`
    width: 100%;
    height: 100rem;
    /* background: #3FDCBB; */

`
const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Search = styled.div`
    input {
        display: flex;
        align-items: center;
        border-radius: 2rem;
    }
`

const NavMenu = styled.div`
    
span {
    padding: 0.8rem; 
    
}

`

