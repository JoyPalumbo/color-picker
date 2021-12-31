
import './App.css';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
// import Box from '@material-ui/core/Box';
// import Box from '@mui/material/Box';

function App() {

const colorArr = ['pink', 'purple', 'blue', 'green', 'yellow', 'darkorange', 'red']

  const [ inputColor, setColor] = useState('');
  const getColor = (e) => {
    console.log(e.target.value)
    setColor(e.target.value)
    console.log("our color", inputColor)

  }

  let listColor;
  if(inputColor === ''){
    listColor = colorArr.map((color) => {
      return (
      <div>
      {/* <h1>{color}</h1> */}
      <div class="box"
    style={{
    
      backgroundColor: color,
      width: '100px',
      height: '100px'
    }}
  />
      </div>
      )
    })
  }
  else {
    listColor =         <div>
    {/* <h1>{color}</h1> */}
    <div class="box"
  style={{
  
    backgroundColor: inputColor,
    width: '100px',
    height: '100px'
  }}
/>
    </div>
  }
 

  return (
    <div className="App">
      <h1> Pick a color!</h1>
      <form style={{  display: "flex", justifyContent: "center", alignItems: "center"}}>
        <label>
          Enter Color: 
          <input type="text"  name="color" onChange={getColor}/>
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
  <br></br>

{listColor}

  {/* {{ 
    if(color = ''){
      <h1>Hello</h1>
}
}} */}
{/* If event.target.e === color(inside map) then display color */}
     {/* {inputColor == '' ? <h1>Hello</h1> : <h1>bye</h1> }
      {colorArr.map((color) => {
        return (
          inputColor == '' ? 
        <div> */}
        {/* <h1>{color}</h1> */}
        {/* <div class="box"
      style={{
      
        backgroundColor: color,
        width: '100px',
        height: '100px'
      }}
    />
        </div>
        : 
        <div> */}
        {/* <h1>{color}</h1> */}
        {/* <div class="box"
      style={{
      
        backgroundColor: inputColor,
        width: '100px',
        height: '100px'
      }}
    />
        </div>
        )
      })} */}
 
    </div>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });

export default App;
