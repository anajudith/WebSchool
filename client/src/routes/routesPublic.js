import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Aluno from '../Pages/HomeAluno'
import Prof from '../Pages/HomeProf'
import InitialScreen from '../Pages/InitialScreen'
import Auth from '../Pages/Login';
import CadastroUsuario from '../Pages/CadUsuario'
import CadCurso from '../Pages/CadCurso'
import PageCertificado from '../Pages/PageCertificado';
import PageModulos from '../Pages/PageModulos';
import PageAula from '../Pages/PageAula';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/aluno">
                <Aluno />
            </Route>
            <Route path="/professor">
                <Prof />
            </Route>
            <Route  path="/login" >
                <Auth /> 
            </Route> 
            <Route  path="/CadUsuario" >
                <CadastroUsuario /> 
            </Route>
            <Route  path="/CadCurso" >
                <CadCurso /> 
            </Route>
            <Route  path="/Certificado" >
                <PageCertificado /> 
            </Route>
            <Route  path="/curso/modulo/:id" >
                <PageModulos /> 
            </Route>
            <Route  path="/modulo/aula/:id" >
                <PageAula /> 
            </Route>

            <Route path="/">
                <InitialScreen />
            </Route>
            
        </Switch>
    </BrowserRouter>
);

// 

export default Routes

