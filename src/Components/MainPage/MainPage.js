import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")

  const onChangeName = (event) =>{
    console.log("mudei o input nome")
    console.log(event.target.value)
    setNome(event.target.value) // seria igual nome = event.target// setNome, vai guardando o que ta sendo escrito no input
  }

  const onChangeIdade= (event) =>{
    console.log("mudei o input idade")
    console.log(event.target.value)
    setIdade(event.target.value)
  }

  const onChangeEmail= (event) =>{
    console.log("mudei o input e-mail")
    console.log(event.target.value)
    setEmail(event.target.value)

  }

    const enviarDados= () =>{
      const formulario= [nome, idade, email]
      console.log(formulario)

    
    setNome("")
    setIdade("")
    setEmail("")
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input type= "texto" onChange={onChangeName} value= {nome}placeholder= "seu nome"/>
        </label>
        <label>
          Idade:
          <Input type= "number" onChange={onChangeIdade} value= {idade}/>
        </label>
        <label>
          E-mail:
          <Input type= "email" onChange={onChangeEmail} value= {email}/>
        </label>
      <button onClick={enviarDados}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage