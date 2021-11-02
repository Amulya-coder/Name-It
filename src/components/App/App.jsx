import React from 'react'
import './App.css'
import Header from './../Header/Header'
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name=require('@rstacruz/startup-name-generator')

class App extends React.Component{
    state={
        headerText: "Name It!",
        headerExpanded: true,
        suggestedNames: [],
    };
    
    handleInputChange=(inputText)=>{
        // console.log('Input text is - ',inputText)
        this.setState({headerExpanded: inputText.length>0 ? false : true,
            suggestedNames: inputText ? name(inputText) : []});
    };

    render(){

        return (
        <div>
            <Header  headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText}/>
            <SearchBox onInputChange={this.handleInputChange}/>
            <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            
        </div>
       
        );
    }
}
export default App
