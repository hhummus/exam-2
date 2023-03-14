import  {React, useState } from 'react'

function SearchForm(props) {
  // getting search input 
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    // to lowercase
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase) 
    console.log(inputText)
  
}


  return (
    <form className="SearchAndPostInputForm" id={props.id}>
        <div className='container'>
            <label className="row label"> {props.title}</label>
            <div className="row">
                <input className="col input" placeholder={props.placeholder} onChange={inputHandler}></input>
            </div>
        
        </div>
        
    </form>
    
  )
}

export default SearchForm;