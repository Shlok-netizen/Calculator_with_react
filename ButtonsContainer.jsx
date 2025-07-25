import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({onButtonClick}) => {
  const buttonNames = [
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
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => {
        return <button className={styles.button} onClick={() =>onButtonClick(buttonName)}>{buttonName}</button>;
      })}
    </div>
  );
};

export default ButtonsContainer;
