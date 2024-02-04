import React from 'react';
import ReactDOM from 'react-dom';

// const Form=()=>
// {
// 	return (
// 		<div>
// 			<input type = "text" placeholder = "Enter Text.." />
// 			<br />
// 			<br />
// 			<input type = "text" placeholder = "Enter Text.." />
// 			<br />
// 			<br />
// 			<button type = "submit">Submit</button>
// 		</div>
// 	);
// }

const Input = ({placeholder}) => {
  return (
    <>
      <input type="text" placeholder={placeholder}/>
      <br />
      <br />
    </>
  )
}

const Button = () => {
  return (
    <button type="submit">SUBMIT !!!</button>
  )
}

const Form = ({placeholder}) => {
  return (
    <div>
        <Input placeholder={placeholder}/>
        <Input placeholder={placeholder}/>
        <Button />
    </div>
  )
}

export default Form;
