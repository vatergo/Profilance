import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<Router basename={'/'}>
    <h1>Тестовое Profilance</h1>
</Router>, document.getElementById('mount-point'));