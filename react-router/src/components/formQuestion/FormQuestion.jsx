import React, { useEffect, useState } from "react";
import './FormQuestion.css';
import Input from "../input";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const FormQuestion = (props) => {
	const [name, setName] = useState("");
	const [answers, setAnswers] = useState(JSON.parse((localStorage.getItem("answers"))) || []);
	const [isSend, setIsSend] = useState(false)

	const handleSubmit = (event) => {
		event.preventDefault();

		setIsSend(true)
		
		const newObj = { id: answers.length + 1,name: name,};
		const newArray = [...answers, newObj]

		console.log(newArray);
										 
		setAnswers(newArray);

		localStorage.setItem("answers", JSON.stringify(answers));
	
		console.log(answers)
		console.log(name)
		//document.getElementById("myForm").reset()
	}

	const handleName = (event) => {
		setIsSend(false)
		setName(event.target.value)
	}

	useEffect(() => {
		localStorage.setItem("answers", JSON.stringify(answers));
	}, [answers]);


	return(
		<div className="app">
			<Form id="myForm" onSubmit={handleSubmit}>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					
				<FloatingLabel controlId="floatingInput"
        							 label="Nome"
       								 className="mb-3"
											 style={{color: "black"}}
      	>
					<Form.Control type={"text"}
												onChange={handleName}
												placeholder="Digite o seu nome"
					/>
				</FloatingLabel>

					<Form.Text style={{color: "white"}}>
          	Using React Bootstrap
        	</Form.Text>

					<br></br><br></br>

					{isSend && <p>Formulário Enviado com Sucesso!</p>}

					<Button type="submit"> Enviar Formulário </Button>

				</Form.Group>

			</Form>
			
		</div>
	)
}

export default FormQuestion