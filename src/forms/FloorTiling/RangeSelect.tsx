import { MaterialEnum, Material } from "./index";
import { RangeEnum } from "../../App";

interface RangeSelectProps {
  material?: Material;
  handleClick: (range: Material) => void;
}

const RangeSelect = ({ material, handleClick }: RangeSelectProps) => {
  return (
    <>
      <p>{material?.name} USD per m2</p>
      <button
        onClick={() =>
          handleClick({
            price: material === MaterialEnum.CERAMIC ? 15 : 50,
            range: RangeEnum.ECONOMY,
          })
        }
      >
        Economy
      </button>
      <button
        onClick={() =>
          handleClick({
            price: material === MaterialEnum.CERAMIC ? 35 : 95,
            range: RangeEnum.STANDARD,
          })
        }
      >
        Standard
      </button>
      <button
        onClick={() =>
          handleClick({
            price: material === MaterialEnum.CERAMIC ? 75 : 150,
            range: RangeEnum.PREMIUM,
          })
        }
      >
        Premium
      </button>
    </>
  );
};

export default RangeSelect;
