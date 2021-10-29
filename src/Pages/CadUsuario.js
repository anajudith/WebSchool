import React from 'react'
import styled from "styled-components";


function CadastroUsuario() {
    return (
        <Container>
            <UserLogin >
                <h1>Cadastro</h1>
                <div>
                <form autoComplete="nope">
                    <Form >
                        <label htmlFor="email">Nome Completo</label>
                        <input id="email"
                            type="text"
                            name="email"
                            autoComplete="off" required
                         />

                        <label htmlFor="email">Email</label>
                        <input id="email" 
                            type="text" 
                            name="email" 
                            autoComplete="off" required
                        />

                        <label htmlFor="password">Senha</label>
                        <input id="password"
                            type="password"
                            name="password" required
                        />

                        <label for="phone">Telefone</label>
                        <input id="phone" 
                            type="tel" 
                            name="phone" 
                            autoComplete="off" 
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required />
                            <small>Formato para adicionar telefone: DDD - 99999-9999</small>
                         
                    </Form>
                    <UIButton type="submit" theme="contained-green" rounded>
                        
                         {/* <button onClick={handleClick}>Entrar</button> */}
                     
                    </UIButton>
                </form>
                </div>
          </UserLogin>
            
        </Container>
    )
}

export default CadastroUsuario


const Container = styled.div `
    
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #051932;
    height: 100vh;

`
const UIButton = styled.div`
   width: 100%;
  margin-top: 30px;
  margin-bottom: 30px; 
//Pegar estilização do botão no UI Material
`

const UserLogin = styled.div`
  width: 400px;
  margin: 0 auto;

  h1 {
    font-size: 40px;
    color: #FFFFFF;
    margin-bottom: 50px;
    text-align: center;
  }

  div {
    background-color: #FFFFFF;
    justify-content: center;
    display: flex;
    border-radius: 0.4rem;
  }
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
 
  label {
    margin-bottom: 1px;
    color: #051932;
    font-size: 16px;
    margin-top: 1.4rem;
    float: right;
  }
  input {
    border-radius: 4px;
    border: 1px solid #BBBBBB;
    height: 1.4rem;
    
    background-color: #BBBBBB;
    width: 18rem;
  }

  

  small {
    opacity: 0.4;
  }
`
//user-login__submit-button
