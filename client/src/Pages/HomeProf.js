import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
    UserOutlined,
    PlayCircleOutlined 
  } from "@ant-design/icons";
  import Axios from "axios";
  
class Prof extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cursos:[]}
  }
  componentDidMount () {
    this.getCursos()
  }
  getCursos () {
    console.log("teste")
    Axios.get("http://localhost:3001/curso", 
    )
    .then((response) => {
      this.setState({cursos: response.data})
    }).catch((err) => {console.log(err)})
  };
  
    render () {
      let resultCursos = this.state.cursos.map((curso) => (
        <Cards>
          <div>
              <PlayCircleOutlined style={{ fontSize: '8rem', color: 'black', }} />
          </div>
          <p>{curso.nomeCurso}</p>
        </Cards>
      ));

      return (
        <div>
            <Header>
        <nav>
          <Logo>
            <p>Logo</p>
          </Logo>
          <input type="text" placeholder="Buscar cursos?" />
          
          <a>Favoritos</a>
          <Divider />
          <a><UserOutlined/></a>
          <Divider />
          <ButtonCadastrar>
            <Link to="/CadCurso">Cadastrar curso</Link>
          </ButtonCadastrar>
        </nav>
      </Header>
      <Container>
        <span>Gerenciar meus cursos</span>
      </Container>
      <Container>
         {resultCursos}
      </Container>
        </div>
    )
    }
}

export default Prof


const Cards = styled.div`
    padding-top: 0.5rem; 
    padding-right: 0;
    padding-left: 5.5rem;
    div {
        
        height: 15rem;
        width: 15rem;
        border: 1px solid;
        border-color: #FFFF;
        background-color: #C4C4C4;
        align-items: center;
        justify-content: center;
        display: flex;
        
    }

    p {
        padding-top: 0.5rem;
        color: #FFFF;
        font-size: 1rem;
    }
`

const Container = styled.div`
    padding-top: 2rem;
    display: flex;
    span {
        color: #FFFFFF ;
        font-size: 2.5rem;
        padding: 2rem 5.5rem;
    }
`
const Header = styled.header`
  width: 100%;
  height: 80px;
  background: #fff;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  display: flex;
  justify-content: center;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
  }

  nav > a {
    text-decoration: none;
    color: black;
  }

 nav > input {
    border-radius: 12px;
    width: 300px;
    padding: 6px 12px;
    border-color: grey;
    border-width: 0.5px;
  }
`;

const Logo = styled.div`
  background: #c4c4c4;
  width: 230px;
  text-align: center;
  padding: 12px;
  p {
    margin: 0;
  }
`;

const Divider = styled.div`
  width: 1px;
  background: black;
  height: 22px;
`;

const ButtonCadastrar = styled.button`
  width: 150px;
  color: #fff;
  background: #a4d6b4;
  border: 0;
  border-radius: 12px;
  padding: 8px;

  a {
    color: black;
  }
`;
