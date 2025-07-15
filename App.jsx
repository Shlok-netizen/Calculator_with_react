import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";


function App() {

  let [calVal,setcalVal] = useState(" ");

  const onButtonClick = (buttonText)=>{
    if(buttonText==='c'){
      setcalVal(" ");
    }else if(buttonText=== '='){
      let result = eval(calVal); /* With eval f^n we cal a string */
      setcalVal(result);
    }else{
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <center>
      <div className={styles.calculator}>
        <Display displayVal ={calVal}></Display>
        <ButtonsContainer onButtonClick = {onButtonClick}></ButtonsContainer>
      </div>
    </center>
  );
}

export default App;
