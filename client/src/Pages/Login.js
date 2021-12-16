import React from "react";
import styled from "styled-components";
import "./app.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const history = useHistory();

  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      if (
        response.data.msg != "Conta não encontrada" &&
        response.data.msg != "Senha incorreta"
      ) {
        history.push("/professor");
      }
    });
  };

  const validationsLogin = yup.object().shape({
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
  });
  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleLogin}
        validationSchema={validationsLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <label>E-mail: </label>
            <Field name="email" className="form-field" placeholder="Email" />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          <div className="form-group">
            <label>Senha: </label>
            <Field name="password" className="form-field" placeholder="Senha" />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          <div className="boxButtonLogin">
            <button className="button" type="submit">
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default Auth;

{
  /* <ButtonCadastrar>
            <Link to="/CadCurso">Cadastrar curso</Link>
          </ButtonCadastrar> */
}
