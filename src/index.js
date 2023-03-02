import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wrapper from './componetes/Wapper/Wapper';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Wrapper>
      <App />
    </Wrapper>

);

