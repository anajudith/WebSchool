import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Imagem1 from "./img/Imagem1.png";
import Imagem2 from "./img/Imagem2.png";
import Imagem3 from "./img/Imagem3.png";
import Imagem5 from "./img/Imagem5.png";
import Carro1 from "./img/Carro1.png";
import Carro2 from "./img/Carro2.png";
import { Carousel } from "antd";
import {
  InstagramOutlined,
  FacebookOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

function InitialScreen() {
  return (
    <Container>
      <Header>
        <nav>
          <Logo>
            <p>Logo</p>
          </Logo>
          <input type="text" placeholder="O que você quer aprender?" />
          <a>Quem somos</a>
          <Divider />
          <a>Nossos Cursos</a>
          <Divider />
          <Link to="/login">Entrar</Link>
          <Divider />
          <ButtonCadastrar>
            <Link to="/CadUsuario">Cadastrar</Link>
          </ButtonCadastrar>
        </nav>
      </Header>

      <Main>
        <section>
          <div className="contentSection">
            <BoxRowBetween>
              <ContainerInfo>
                <p>
                  <big className="textSomos">Somos</big> <br />
                  <small>
                    uma plataforma <br /> de cursos diversos feitos por
                    instrutores
                  </small>
                </p>
              </ContainerInfo>
              <img src={Imagem5} width="165" />
            </BoxRowBetween>
          </div>
        </section>

        <section className="fundoBranco">
          <div className="contentSection">
            <BoxRowBetween>
              <img src={Carro1} />
              <ContainerInfo>
                <p className="paragrafoRumo">
                  <big className="textRumo">Rumo</big> <br />
                  <small>
                    ao <br /> <big className="textSucesso">Sucesso</big>
                  </small>
                </p>
              </ContainerInfo>
            </BoxRowBetween>
            <BoxRowBetween>
              <Faixa />
              <Faixa />
              <Faixa />
              <Faixa />
            </BoxRowBetween>
            <div className="boxCarCenter">
              <img src={Carro2} />
            </div>
          </div>
        </section>

        <section className="fundoAzul">
          <div className="contentSection">
            <p className="text">Veja a opnião de Alunos</p>

            <Carousel autoplay>
              <div>
                <ContentCarousel>
                  <img src={Imagem2} width="150" height="150" />
                  <p>
                    “Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.”
                  </p>
                </ContentCarousel>
              </div>
              <div>
                <ContentCarousel>
                  <img src={Imagem2} width="150" height="150" />
                  <p>
                    “Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.”
                  </p>
                </ContentCarousel>
              </div>
              <div>
                <ContentCarousel>
                  <img src={Imagem2} width="150" height="150" />
                  <p>
                    “Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.”
                  </p>
                </ContentCarousel>
              </div>
            </Carousel>
          </div>
        </section>

        <section className="fundoBranco">
          <div className="contentSection">
            <p className="title">
              <big>Areas</big> de Estudo
            </p>
            <ContainerCards>
              <BoxCards>
                <Card>
                  <div className="img">
                    <p>Image</p>
                  </div>
                  <p>Programação</p>
                </Card>
                <Card>
                  <div className="img">
                    <p>Image</p>
                  </div>
                  <p>Música</p>
                </Card>
                <Card>
                  <div className="img">
                    <p>Image</p>
                  </div>
                  <p>Maquiagem</p>
                </Card>
                <Card>
                  <div className="img">
                    <p>Image</p>
                  </div>
                  <p>Culinária</p>
                </Card>
                <Card>
                  <div className="img">
                    <p>Image</p>
                  </div>
                  <p>Redes Sociais</p>
                </Card>
                <Card>
                  <div className="img">
                    <p>Image</p>
                  </div>
                  <p>Administração</p>
                </Card>
              </BoxCards>
            </ContainerCards>
          </div>
        </section>
        <section className="fundoAzul">
          <p>Estude</p>
          <span>
            <img src={Imagem1} />
            <img src={Imagem2} />
            <img src={Imagem3} />
          </span>
          <p>Em qualquer hora e qualquer lugar.</p>
        </section>
      </Main>
      <Footer>
        <div>
          <span>
            <MailOutlined style={{ fontSize: "27px" }} />
            <p>lorem@gmail.com</p>
          </span>
          <span>
            <PhoneOutlined style={{ fontSize: "27px" }} />
            <p>993592021</p>
          </span>
          <p>Copyright</p>
        </div>
        <div>
          <p>Siga-nos</p>
          <span>
            <FacebookOutlined style={{ fontSize: "32px" }} />
            <InstagramOutlined style={{ fontSize: "27px" }} />
          </span>
        </div>
      </Footer>
    </Container>
  );
}

export default InitialScreen;

const Container = styled.body`
  width: 100%;
  background: #051932;
`;

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
  background: #8182fe;
  border: 0;
  border-radius: 12px;
  padding: 8px;

  a {
    color: black;
  }
`;

const Main = styled.main`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section .contentSection {
    width: 60%;
    padding: 16px;
  }

  section.fundoBranco {
    background: #fff;
  }

  section .contentSection .boxCarCenter {
    text-align: center;
    padding: 16px;
  }

  section.fundoAzul {
    color: #fff;
    font-size: 27px;
    padding: 12px;
  }
  section .contentSection p.title {
    font-size: 32px;
    color: #808080;
  }

  section .contentSection .text {
    text-align: center;
  }

  section .contentSection p.title big {
    font-size: 54px;
    color: black;
  }
`;

const BoxRowBetween = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const Faixa = styled.div`
  width: 180px;
  height: 30px;
  background: #303b4d;
`;

const ContainerInfo = styled.div`
  width: 280px;
  text-align: start;
  color: #fff;

  p {
    color: #828c98;
  }

  .textSomos {
    color: #fff;
    font-size: 44px;
  }

  small {
    font-size: 18px;
  }

  .textRumo {
    font-size: 32px;
  }

  .paragrafoRumo {
    text-align: center;
  }

  .textSucesso {
    font-size: 42px;
    color: #0c2922;
  }
`;

const ContentCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin-bottom: 3rem;

  p {
    width: 300px;
  }
`;

const ContainerCards = styled.span`
  display: flex;
  justify-content: center;
`;

const BoxCards = styled.div`
  padding: 12px;
  width: 80%;
  flex-wrap: wrap;
  display: flex;
  justify-content: start;
  justify-content: space-around;
`;

const Card = styled.div`
  width: 240px;
  margin: 8px;
  text-align: center;

  div.img {
    height: 150px;
    width: 100%;
    background: #c4c4c4;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  p {
    font-size: 18px;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 130px;
  background: #fff;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  padding: 12px;

  div {
    padding: 12px;
  }

  span {
    display: flex;
    align-items: center;
  }

  span p {
    margin: 0;
    padding: 0px 8px;
  }
`;
