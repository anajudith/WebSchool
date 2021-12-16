import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import "./CadCurso.css";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

function CadModulo() {
  const { id } = useParams();
  const history = useHistory();

  const cadastrarModulo = (values) => {
    Axios.post("http://localhost:3001/cadastrarModulo", {
      tituloModulo: values.tituloModulo,
      tempoDuracao: values.tempoDuracao,
      idCurso: id,
    })
      .then((response) => {
        alert(response.data.msg);
        history.push(`/modulo/aula/${response.data.idModulo}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const validationsRegister = yup.object().shape({
  //   nomeCursoso: yup.string().required("Titulo do curso é obrigatório"),
  //   descricao: yup.string().required("descricao é obrigatório"),
  // });

  return (
    <div className="container">
      <h1>Cadastrar Modulo</h1>
      <Formik
        initialValues={{}}
        onSubmit={cadastrarModulo}

        // validationSchema={validationsRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <label>Nome do modulo</label>
            <Field
              name="tituloModulo"
              className="form-field"
              placeholder="Nome do modulo"
            />

            <ErrorMessage
              component="span"
              name="tituloModulo"
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

          <button className="button" type="submit">
            Próximo
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CadModulo;
