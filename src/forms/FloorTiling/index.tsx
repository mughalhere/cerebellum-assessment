import { useState } from "react";
import { Radio, RadioChangeEvent, Button, Divider } from "antd";
import { FormEnum, PriceRange, Data } from "../../App";
import MaterialSelect from "./MaterialSelect";
import RangeSelect from "./RangeSelect";

export enum StepsEnum {
  CHOICE = "choice",
  MATERIALSELECT = "materialSelect",
  RANGESELECT = "rangeSelect",
}

export enum MaterialEnum {
  CERAMIC = "Ceramic Floor Tiling",
  MARBEL = "Marbel Floor Tiling",
}

export interface Material extends PriceRange {
  /**
   * the name of the material selected by the user
   */
  name?: MaterialEnum;
}

export interface State {
  /**
   * the option (yes or no) selected by the user
   */
  option: boolean;
  /**
   * the currently active step (form) of the user
   */
  activeStep: StepsEnum;
  /**
   * the material selected by the user
   */
  material?: Material;
}

interface FloorTilingProps {
  /**
   * the function to handle the next action after filling out the form
   */
  handleNext: (form: FormEnum, data: Data) => void;
}

const FloorTiling = ({ handleNext }: FloorTilingProps): JSX.Element => {
  const [state, setState] = useState<State>({
    option: true,
    activeStep: StepsEnum.CHOICE,
  });
  const { activeStep, option, material } = state;

  const handleClick = (material: Material) => {
    setState((current) => ({
      ...current,
      material: { ...current.material, ...material },
      activeStep: StepsEnum.RANGESELECT,
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
          activeStep: StepsEnum.MATERIALSELECT,
        }));
      } else {
        handleNext(FormEnum.RESULT, {});
      }
    }
  };

  const handleRangeSelect = (range: Material) => {
    setState((current) => ({
      ...current,
      range,
    }));
    handleNext(FormEnum.BATHROOMSIZE, {
      floorTilings: {
        material: { ...material, ...range },
      },
    });
  };

  return (
    <>
      {
        {
          [StepsEnum.CHOICE]: (
            <>
              <p>Do you want to change Floor tilings ?</p>
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
          [StepsEnum.MATERIALSELECT]: (
            <MaterialSelect handleClick={handleClick} />
          ),
          [StepsEnum.RANGESELECT]: (
            <RangeSelect
              material={state.material}
              handleClick={handleRangeSelect}
            />
          ),
        }[activeStep]
      }
    </>
  );
};

export default FloorTiling;
