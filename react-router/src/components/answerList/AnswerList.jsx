import React, { useState } from "react";
import FormAnswer from "../formAnswer";
import './AnswerList.css';

const AnswerList = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [selectedAnswer, setSelectedAnswer] = useState(0);

	const teste = JSON.parse((localStorage.getItem("answers")))

	console.log(teste)

	return(
		<div className="app2">

			{teste !== null && teste.length > 0 ? (
				teste.map((answer, index) => (
					<>
					<FormAnswer key={index} {...answer} />
					</>
				))
			) : <p>Nenhum formulário enviado, é preciso enviar o formulário 2 vezes</p>}
			
		</div>
	)
}

export default AnswerList