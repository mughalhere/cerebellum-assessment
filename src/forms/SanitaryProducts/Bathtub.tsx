import { Button, Space } from "antd";
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
      <h3 className="text-center">Select your Bathtub</h3>
      <Space>
        <Button
          type="primary"
          onClick={() =>
            handleClick({
              name: StepsEnum.BATHTUB,
              price: 800,
              range: RangeEnum.ECONOMY,
            })
          }
        >
          Economy
        </Button>
        <Button
          type="primary"
          onClick={() =>
            handleClick({
              name: StepsEnum.BATHTUB,
              price: 1500,
              range: RangeEnum.STANDARD,
            })
          }
        >
          Standard
        </Button>
        <Button
          type="primary"
          onClick={() =>
            handleClick({
              name: StepsEnum.BATHTUB,
              price: 4650,
              range: RangeEnum.PREMIUM,
            })
          }
        >
          Premium
        </Button>
      </Space>
    </>
  );
};

export default Bathtub;
