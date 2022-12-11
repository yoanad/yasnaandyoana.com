import logo from './assets/logo.svg';
import yasna from './assets/Yasna.svg';
import yoana from './assets/Yoana.svg';
import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import './App.css';

const App = () => {
  const formRef = useRef(null)

  const executeScroll = () => formRef.current.scrollIntoView()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coming soon</h1>
        <div className="getInTouch">
          <h3 className>Interested? </h3>
          <button onClick={executeScroll}>Get in touch with us <FontAwesomeIcon icon={faAngleDown} /></button>
        </div>
      </header>
      <main ref={formRef}>
        <div className='form'>
          <iframe title="interest form" src="https://docs.google.com/forms/d/e/1FAIpQLSf0vfAcnC_gdUixpfbpFYbFTKDVYmgQoYOTHSc8f4WAeo9aSA/viewform?embedded=true" width="640" height="600" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">Loading…</iframe>
        </div>
        <div className='avatars'>
          <img src={yasna} className="avatar" alt="logo" />
          <img src={yoana} className="avatar" alt="logo" />
        </div>
      </main>
    </div>
  );
}

export default App;
