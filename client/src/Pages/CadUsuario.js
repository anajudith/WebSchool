import React from "react";
import styled from "styled-components";
import "./app.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function CadastroUsuario() {
  const history = useHistory();

  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      nomeCompleto: values.nomeCompleto,
      email: values.email,
      password: values.password,
      telefone: values.telefone,
      cpf: values.cpf,
      dataNascimento: values.dataNascimento,
    })
      .then((response) => {
        alert(response.data.msg);
        if (response.data.msg != "Usuário já cadastrado") {
          history.push("/login");
        }
      })
      .catch((err) => {
        if (err) {
          alert("Erro do sistema");
        }
      });
  };

  const validationsRegister = yup.object().shape({
    nomeCompleto: yup.string().required("Nome completo é obrigatório"),
    email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .required("A senha é obrigatória"),
    confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas são diferentes")
      .required("A confirmação da senha é obrigatória"),
    telefone: yup.string().required("Telefone é obrigatório"),
    cpf: yup.string().required("CPF é obrigatório"),
    dataNascimento: yup.string().required("Data de Nascimento é obrigatório"),
  });

  return (
    <div className="container">
      <h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleRegister}
        validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <label>Nome: </label>
            <Field
              name="nomeCompleto"
              className="form-field"
              placeholder="Nome Completo"
            />

            <ErrorMessage
              component="span"
              name="nomeCompleto"
              className="form-error"
            />
          </div>
          <div className="register-form-group">
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

          <div className="form-group">
            <label>Confirme a senha: </label>
            <Field
              name="confirmation"
              className="form-field"
              placeholder="Confirmação da senha"
            />

            <ErrorMessage
              component="span"
              name="confirmation"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <label>Telefone: </label>
            <Field
              name="telefone"
              className="form-field"
              placeholder="Telefone"
            />

            <ErrorMessage
              component="span"
              name="telefone"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <label>CPF: </label>
            <Field name="cpf" className="form-field" placeholder="CPF" />

            <ErrorMessage component="span" name="cpf" className="form-error" />
          </div>

          <div className="form-group">
            <label>Data de Nascimento: </label>
            <Field name="dataNascimento" className="form-field" type="date" />

            <ErrorMessage
              component="span"
              name="dataNascimento"
              className="form-error"
            />
          </div>
          <div className="boxButtonLogin">
            <button className="button" type="submit">
              Cadastrar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default CadastroUsuario;
