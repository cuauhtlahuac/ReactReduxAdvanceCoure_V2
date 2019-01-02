import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

//I need to specify where the app component going to render, 
//in this case in index.html in the div with the id root
ReactDOM.render(<App />,document.querySelector('#root'))