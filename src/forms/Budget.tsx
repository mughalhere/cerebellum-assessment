import { useState, ChangeEvent } from "react";
import { FormEnum, Data } from "../App";

interface State {
  /**
   * the options (yes or no) selected by the user
   */
  option: boolean | null;
  /**
   * the budget entered by the user (default is 0)
   */
  budget: number;
  /**
   * the error to show if the user press the next button without selecting an option
   */
  error: string;
}

interface BudgetProps {
  /**
   * the function to handle the next action after filling out the form
   */
  handleNext: (form: FormEnum, data: Data) => void;
}

const Budget = ({ handleNext }: BudgetProps): JSX.Element => {
  const [state, setState] = useState<State>({
    option: null,
    error: "",
    budget: 0,
  });
  const { budget, option, error } = state;

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState((current) => ({
      ...current,
      option: event.target.id === "yes" ? true : false,
    }));
  };

  const handleBudgetChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState((current) => ({
      ...current,
      budget: Number(event.target.value),
    }));
  };

  const handleClick = () => {
    if (option === null) {
      setState((current) => ({
        ...current,
        error: "Please select yes or not",
      }));
    } else {
      handleNext(FormEnum.SANITARYPRODUCTS, {
        budget: option ? budget : null,
      });
    }
  };

  return (
    <>
      <p>Do you have a budget ?</p>
      <label htmlFor="yes">Yes</label>
      <input
        id="yes"
        type="radio"
        checked={option === true}
        onChange={handleRadioChange}
      />
      <br />
      <label htmlFor="No">No</label>
      <input
        id="No"
        type="radio"
        checked={option === false}
        onChange={handleRadioChange}
      />
      <br />
      {option && (
        <input type="number" value={budget} onChange={handleBudgetChange} />
      )}
      <br />
      {error}
      <br />
      <button onClick={handleClick}>Next</button>
    </>
  );
};

export default Budget;
