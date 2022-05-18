import { StepsEnum, SanitaryProductData } from "./index";
import { RangeEnum } from "../../App";

interface SinkProps {
  /**
   * to handle the click event of the user upon selecting a product
   */
  handleClick: (data: SanitaryProductData, nextStep: StepsEnum) => void;
}

const Sink = ({ handleClick }: SinkProps) => {
  return (
    <>
      <p>Select your Sink</p>
      <button
        onClick={() =>
          handleClick(
            { name: StepsEnum.SINK, price: 350, range: RangeEnum.ECONOMY },
            StepsEnum.BATHTUB
          )
        }
      >
        Economy
      </button>
      <button
        onClick={() =>
          handleClick(
            { name: StepsEnum.SINK, price: 700, range: RangeEnum.STANDARD },
            StepsEnum.BATHTUB
          )
        }
      >
        Standard
      </button>
      <button
        onClick={() =>
          handleClick(
            { name: StepsEnum.SINK, price: 1500, range: RangeEnum.PREMIUM },
            StepsEnum.BATHTUB
          )
        }
      >
        Premium
      </button>
    </>
  );
};

export default Sink;
