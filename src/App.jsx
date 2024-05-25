import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calval, setcalval] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setcalval("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const newDisplayValue = calval + buttonText;
      setcalval(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayvalue={calval}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}
export default App;
