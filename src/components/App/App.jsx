import React, { useState } from 'react';
import './App.css';
import Header from './../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import Footer from '../Footer/Footer';

const name = require('@rstacruz/startup-name-generator');

const App = () => {
    const [headerText] = useState('Name It!');
    const [headerExpanded, setheaderExpanded] = useState(true);
    const [suggestedNames, setsuggestedNames] = useState([]);

    const handleInputChange = (inputText) => {
        // setheaderExpanded: inputText.length > 0 ? false : true;
        setheaderExpanded(inputText.length > 0 ? false : true);
        setsuggestedNames(inputText ? name(inputText) : []);
    };

    return (
        <div className='container'>
            <Header headerExpanded={headerExpanded} headTitle={headerText} />
            <SearchBox onInputChange={handleInputChange} />
            <ResultsContainer suggestedNames={suggestedNames} />
            <Footer/>
            </div>
    );
};
export default App;
