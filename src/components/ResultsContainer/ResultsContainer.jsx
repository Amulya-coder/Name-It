import React from 'react'
import './ResultsContainer.css'
import NameCard from '../NameCard/NameCard'

const ResultsContainer = ({suggestedNames})=>{
    const suggestedNamesJsx = suggestedNames.map((suggestedName) =>{
        return < NameCard Key="suggestedName" suggestedName={suggestedName}/>
    })
    
    
    return <div className="results-container">
        {suggestedNamesJsx}
    </div>
}

export default ResultsContainer;