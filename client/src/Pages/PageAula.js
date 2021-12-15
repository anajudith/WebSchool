import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import "./CadCurso.css";
import { useParams } from 'react-router';

function CadCurso() {
    const { id } = useParams();

  const cadastrarCurso = (values) => {
    Axios.post("http://localhost:3001/cadastrarAula", {
        nomeAula: values.nomeAula,
        descricaoAula: values.descricaoAula,
        tempoDuracao: values.tempoDuracao,
        urlAula: values.urlAula,
        idModulo: id
    }).then((response) => {
      alert(response.data.msg);
      }).catch((err) => {
        console.log(err);
      });
  };

  // const validationsRegister = yup.object().shape({
  //   nomeCursoso: yup.string().required("Titulo do curso é obrigatório"),
  //   descricao: yup.string().required("descricao é obrigatório"),
  // });

  return (
    <div className="container">
      <h1>Cadastrar Aula</h1>
      <Formik
        initialValues={{}}
        onSubmit={cadastrarCurso}

        // validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <label>Titulo aula</label>
            <Field
              name="nomeAula"
              className="form-field"
              placeholder="Dê um titulo para a aula"
            />

            <ErrorMessage
              component="span"
              name="nomeAula"
              className="form-error"
            />
          </div>
          <div className="register-form-group">
            <label>Descrição da aula</label>
            <Field
              name="descricaoAula"
              className="form-field"
              placeholder="Descreva a aula"
            />

            <ErrorMessage
              component="span"
              name="descricaoAula"
              className="form-error"
            />
          </div>
          <div className="form-group">
            <label>Tempo de duração</label>
            <Field
              name="tempoDuracao"
              className="form-field"
              placeholder="Tempo de duração hh:mm:ss"
              type="time"
            />
            <ErrorMessage
              component="span"
              name="tempoDuracao"
              className="form-error"
            />
          </div>
          <div className="form-group">
            <label>URL</label>
            <Field
              name="urlAula"
              className="form-field"
              placeholder="Adicione uma url"
              
            />
            <ErrorMessage
              component="span"
              name="urlAula"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Próximo
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CadCurso;
