import React from "react";
import styled from "styled-components";
import "./app.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

function CadastroUsuario() {
  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      nomeCompleto: values.nomeCompleto,
      email: values.email,
      password: values.password,
      telefone: values.telefone,
      cpf: values.cpf,
      dataNascimento: values.dataNascimento,
      tipoUsuario: values.tipoUsuario,
    }).then((response) => {
      alert(response.data.msg);
      window.open("/login");
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
    tipoUsuario: yup.string().required("Tipo Usuário é obrigatório"),
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
            <Field name="email" className="form-field" placeholder="Email" />

            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>

          <div className="form-group">
            <Field name="password" className="form-field" placeholder="Senha" />

            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div className="form-group">
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
            <Field name="cpf" className="form-field" placeholder="CPF" />

            <ErrorMessage component="span" name="cpf" className="form-error" />
          </div>

          <div className="form-group">
            <Field name="dataNascimento" className="form-field" type="date" />

            <ErrorMessage
              component="span"
              name="dataNascimento"
              className="form-error"
            />
          </div>

          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="tipoUsuario" value="P" />
              Quero ser Professor
            </label>
            <label>
              <Field type="radio" name="tipoUsuario" value="A" />
              Quero ser Aluno
            </label>
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CadastroUsuario;

// <div className="container">
//   <h1>Login</h1>
//   <Formik
//     initialValues={{}}
//     onSubmit={handleLogin}
//     validationSchema={validationsLogin}
//   >
//     <Form className="login-form">
//       <div className="login-form-group">
//         <Field name="email" className="form-field" placeholder="Email" />

//         <ErrorMessage
//           component="span"
//           name="email"
//           className="form-error"
//         />
//       </div>
//       <div className="form-group">
//         <Field name="password" className="form-field" placeholder="Senha" />

//         <ErrorMessage
//           component="span"
//           name="password"
//           className="form-error"
//         />
//       </div>

//       <button className="button" type="submit">
//         Login
//       </button>
//     </Form>
//   </Formik>
//   <h1>Cadastro</h1>
//   <Formik
//     initialValues={{}}
//     onSubmit={handleRegister}
//     validationSchema={validationsRegister}
//   >
//     <Form className="register-form">
//       <div className="register-form-group">
//         <Field name="email" className="form-field" placeholder="Email" />

//         <ErrorMessage
//           component="span"
//           name="email"
//           className="form-error"
//         />
//       </div>

//       <div className="form-group">
//         <Field name="password" className="form-field" placeholder="Senha" />

//         <ErrorMessage
//           component="span"
//           name="password"
//           className="form-error"
//         />
//       </div>

//       <div className="form-group">
//         <Field
//           name="confirmation"
//           className="form-field"
//           placeholder="Senha"
//         />

//         <ErrorMessage
//           component="span"
//           name="confirmation"
//           className="form-error"
//         />
//       </div>

//       <button className="button" type="submit">
//         Cadastrar
//       </button>
//     </Form>
//   </Formik>
// </div>
