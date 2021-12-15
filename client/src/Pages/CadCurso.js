import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";
import "./CadCurso.css";

function CadCurso() {
  const cadastrarCurso = (values) => {
    Axios.post("http://localhost:3001/cadastrarCurso", {
      nomeCurso: values.nomeCurso,
      descricaoCurso: values.descricaoCurso,
      tempoDuracao: values.tempoDuracao,
      urlCurso: values.urlCurso,
    }).then((response) => {
       alert(response.data.msg);
       window.open(`/curso/modulo/${response.data.idCurso}`)
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
      <h1>Cadastro do curso</h1>
      <Formik
        initialValues={{}}
        onSubmit={cadastrarCurso}

        // validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <label>Nome do curso</label>
            <Field
              name="nomeCurso"
              className="form-field"
              placeholder="Nome do curso"
            />

            <ErrorMessage
              component="span"
              name="nomeCurso"
              className="form-error"
            />
          </div>
          <div className="register-form-group">
            <label>Descrição do curso</label>
            <Field
              name="descricaoCurso"
              className="form-field form-field-desc"
              placeholder="Descrição do curso"
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
              name="urlCurso"
              className="form-field"
              placeholder="Url do video "
            />
            <ErrorMessage
              component="span"
              name="urlCurso"
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
