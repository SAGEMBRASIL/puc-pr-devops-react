import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "../../estilos/estilos.css";

class Sobre extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>Sobre</h1>
            <p>Material apresentado na Disciplina Tecnologias Para Desenvolvimento Web (11100010566_20231_01) </p>
            <p>Aluno Alexandre dos Santos Mendes. Abril/2023 </p>
            <Link to="/"><button>Página Inicial</button></Link>
        </div>
      )
    }
}

export default Sobre;