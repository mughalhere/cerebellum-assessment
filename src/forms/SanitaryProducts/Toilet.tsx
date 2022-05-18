import { StepsEnum, SanitaryProductData } from "./index";
import { RangeEnum } from "../../App";

interface ToiletProps {
  /**
   * to handle the click event of the user upon selecting a product
   */
  handleClick: (data: SanitaryProductData, nextStep: StepsEnum) => void;
}

const Toilet = ({ handleClick }: ToiletProps) => {
  return (
    <>
      <p>Select your toilet</p>
      <button
        onClick={() =>
          handleClick(
            { name: StepsEnum.TOILET, price: 200, range: RangeEnum.ECONOMY },
            StepsEnum.SINK
          )
        }
      >
        Economy
      </button>
      <button
        onClick={() =>
          handleClick(
            { name: StepsEnum.TOILET, price: 1000, range: RangeEnum.STANDARD },
            StepsEnum.SINK
          )
        }
      >
        Standard
      </button>
      <button
        onClick={() =>
          handleClick(
            { name: StepsEnum.TOILET, price: 3000, range: RangeEnum.PREMIUM },
            StepsEnum.SINK
          )
        }
      >
        Premium
      </button>
    </>
  );
};

export default Toilet;
