import { SanitaryProductData, StepsEnum } from "./index";
import { RangeEnum } from "../../App";

interface BathtubProps {
  /**
   * to handle the click event of the user upon selecting a product
   */
  handleClick: (data: SanitaryProductData) => void;
}

const Bathtub = ({ handleClick }: BathtubProps) => {
  return (
    <>
      <p>Select your Bathtub</p>
      <button
        onClick={() =>
          handleClick({
            name: StepsEnum.BATHTUB,
            price: 800,
            range: RangeEnum.ECONOMY,
          })
        }
      >
        Economy
      </button>
      <button
        onClick={() =>
          handleClick({
            name: StepsEnum.BATHTUB,
            price: 1500,
            range: RangeEnum.STANDARD,
          })
        }
      >
        Standard
      </button>
      <button
        onClick={() =>
          handleClick({
            name: StepsEnum.BATHTUB,
            price: 4650,
            range: RangeEnum.PREMIUM,
          })
        }
      >
        Premium
      </button>
    </>
  );
};

export default Bathtub;
