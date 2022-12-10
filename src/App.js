import logo from './assets/logo.svg';
import yasna from './assets/Yasna.svg';
import yoana from './assets/Yoana.svg';
import React from 'react'

import { GoogleFormProvider, useGoogleForm, googleFormsToJson } from 'react-google-forms-hooks'
import CheckboxInput from './components/CheckboxInput'
import RadioInput from './components/RadioInput'
import ShortAnswerInput from './components/ShortAnswerInput'
import LongAnswerInput from './components/LongAnswerInput'
import RadioGridInput from './components/RadioGridInput'
import CheckboxGridInput from './components/CheckboxGridInput'
import DropdownInput from './components/DropdownInput'
import styled from 'styled-components'
import LinearGrid from './components/LinearGrid'
import './App.css';


const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 0;
`

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`

const QuestionLabel = styled.h3`
  margin-bottom: 10px;
`

const QuestionHelp = styled.p`
  font-size: 0.8rem;
  color: #5c5c5c;
  margin-top: 0px;
`

const Questions = ({ form }) => {
  return (
    <div>
      {form.fields.map((field) => {
        const { id } = field

        let questionInput = null
        switch (field.type) {
          case 'CHECKBOX':
            questionInput = <CheckboxInput id={id} />
            break
          case 'RADIO':
            questionInput = <RadioInput id={id} />
            break
          case 'SHORT_ANSWER':
            questionInput = <ShortAnswerInput id={id} />
            break
          case 'LONG_ANSWER':
            questionInput = <LongAnswerInput id={id} />
            break
          case 'RADIO_GRID':
            questionInput = <RadioGridInput id={id} />
            break
          case 'CHECKBOX_GRID':
            questionInput = <CheckboxGridInput id={id} />
            break
          case 'DROPDOWN':
            questionInput = <DropdownInput id={id} />
            break
          case 'LINEAR':
            questionInput = <LinearGrid id={id} />
            break
        }

        if (!questionInput) {
          return null
        }

        return (
          <QuestionContainer key={id}>
            <QuestionLabel>{field.label}</QuestionLabel>
            {questionInput}
            <QuestionHelp>{field.description}</QuestionHelp>
          </QuestionContainer>
        )
      })}
    </div>
  )
}

const App = async () => {
  const form = await googleFormsToJson(
    'https://docs.google.com/forms/d/e/1FAIpQLSf0vfAcnC_gdUixpfbpFYbFTKDVYmgQoYOTHSc8f4WAeo9aSA/viewform'
  )
  const methods = useGoogleForm({ form })
  const onSubmit = async (data) => {
    await methods.submitToGoogleForms(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Coming soon</p>
      </header>
      <main>
        <div className='avatars'>
          <img src={yasna} className="avatar" alt="logo" />
          <img src={yoana} className="avatar" alt="logo" />
        </div>
        <div className='form'>
          <p>Interested? Get in touch with us: </p>
          <GoogleFormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {form.title && (
                <>
                  <h1>{form.title}</h1>
                  {form.description && (
                    <p style={{ fontSize: '.8rem' }}>{form.description}</p>
                  )}
                </>
              )}
              <Questions form={form} />
              <button type='submit'>Submeter</button>
            </form>
          </GoogleFormProvider>
        </div>
      </main>
    </div>
  );
}

export default App;
