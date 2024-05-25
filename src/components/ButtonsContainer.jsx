import styles from "./ButtonsContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const buttonsNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttoncontainer}>
      {buttonsNames.map((buttonsNames) => (
        <button
          className={styles.button}
          onClick={() => onButtonClick(buttonsNames)}
        >
          {buttonsNames}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
