import { useState } from "react";
import { Divider, Radio, RadioChangeEvent, Button, message } from "antd";
import { FormEnum, PriceRange, Data } from "../../App";
import Toilet from "./Toilet";
import Sink from "./Sink";
import Bathtub from "./Bathtub";

export enum StepsEnum {
  CHOICE = "Choice",
  TOILET = "Toilet",
  SINK = "Sink",
  BATHTUB = "Bathtub",
}

export interface SanitaryProductData extends PriceRange {
  /**
   * the name of the product
   */
  name: StepsEnum;
}

export interface State {
  /**
   * the options (yes or no selected by the user)
   */
  option: boolean;
  /**
   * the array of the sanitary products selected by the user
   */
  sanitaryProducts: Array<SanitaryProductData>;
  /**
   * the currently active step of the user
   */
  activeStep: StepsEnum;
}

interface SanitaryProductsProps {
  /**
   * the function to handle the next action after filling out the form
   */
  handleNext: (form: FormEnum, data: Data) => void;
}

const SanitaryProducts = ({
  handleNext,
}: SanitaryProductsProps): JSX.Element => {
  const [state, setState] = useState<State>({
    option: true,
    activeStep: StepsEnum.CHOICE,
    sanitaryProducts: [],
  });
  const { activeStep, option, sanitaryProducts } = state;

  const handleClick = (data: SanitaryProductData, nextStep: StepsEnum) => {
    setState((current) => ({
      ...current,
      sanitaryProducts: [...current.sanitaryProducts, data],
      activeStep: nextStep,
    }));
  };

  const handleRadioChange = (event: RadioChangeEvent) => {
    setState((current) => ({
      ...current,
      option: event.target.id === "yes",
    }));
  };

  const handleButtonClick = () => {
    if (option !== null) {
      if (option) {
        setState((current) => ({
          ...current,
          activeStep: StepsEnum.TOILET,
        }));
      } else {
        handleNext(FormEnum.FLOORTILING, {});
      }
    } else {
      message.error("Please select an option");
    }
  };

  const handleSubmit = (data: SanitaryProductData) => {
    setState((current) => ({
      ...current,
      sanitaryProducts: [...current.sanitaryProducts, data],
    }));

    handleNext(FormEnum.FLOORTILING, {
      sanitaryProducts: [...sanitaryProducts, data],
    });
  };

  return (
    <>
      {
        {
          [StepsEnum.CHOICE]: (
            <>
              <p>Do you want to change sanitary products ?</p>
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
              <Button type="primary" onClick={handleButtonClick}>
                Next
              </Button>
            </>
          ),
          [StepsEnum.TOILET]: <Toilet handleClick={handleClick} />,
          [StepsEnum.SINK]: <Sink handleClick={handleClick} />,
          [StepsEnum.BATHTUB]: <Bathtub handleClick={handleSubmit} />,
        }[activeStep]
      }
    </>
  );
};

export default SanitaryProducts;
