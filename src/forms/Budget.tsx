import { useState } from "react";
import {
  Radio,
  RadioChangeEvent,
  InputNumber,
  message,
  Button,
  Divider,
} from "antd";
import { FormEnum, Data } from "../App";

interface State {
  /**
   * the options (yes or no) selected by the user
   */
  option: boolean | null;
  /**
   * the budget entered by the user (default is 0)
   */
  budget: string;
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
    budget: "",
  });
  const { budget, option, error } = state;

  const handleRadioChange = (event: RadioChangeEvent) => {
    setState((current) => ({
      ...current,
      option: event.target.id === "yes" ? true : false,
    }));
  };

  const handleBudgetChange = (value: string) => {
    setState((current) => ({
      ...current,
      budget: !Number.isNaN(value) ? value : current.budget,
    }));
  };

  const handleClick = () => {
    if (option === null) {
      message.error("Please select yes or not");
    } else {
      if (!option) {
        handleNext(FormEnum.SANITARYPRODUCTS, {
          budget: null,
        });
      } else if (budget && !Number.isNaN(budget)) {
        handleNext(FormEnum.SANITARYPRODUCTS, {
          budget: option ? Number(budget) : null,
        });
      } else {
        message.error("Please enter a number");
      }
    }
  };

  return (
    <>
      <p>Do you have a budget ?</p>
      <Radio
        id="yes"
        type="radio"
        checked={option === true}
        onChange={handleRadioChange}
      >
        Yes
      </Radio>
      <Radio
        id="No"
        type="radio"
        checked={option === false}
        onChange={handleRadioChange}
      >
        No
      </Radio>
      <Divider />
      {option && (
        <InputNumber
          type="number"
          value={budget}
          onChange={handleBudgetChange}
        />
      )}
      <br />
      {error}
      <br />
      <Button type="primary" onClick={handleClick}>
        Next
      </Button>
    </>
  );
};

export default Budget;
