import { Button, Space } from "antd";
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
      <h3 className="text-center">Select your toilet</h3>
      <Space>
        <Button
          type="primary"
          onClick={() =>
            handleClick(
              { name: StepsEnum.TOILET, price: 200, range: RangeEnum.ECONOMY },
              StepsEnum.SINK
            )
          }
        >
          Economy
        </Button>
        <Button
          type="primary"
          onClick={() =>
            handleClick(
              {
                name: StepsEnum.TOILET,
                price: 1000,
                range: RangeEnum.STANDARD,
              },
              StepsEnum.SINK
            )
          }
        >
          Standard
        </Button>
        <Button
          type="primary"
          onClick={() =>
            handleClick(
              { name: StepsEnum.TOILET, price: 3000, range: RangeEnum.PREMIUM },
              StepsEnum.SINK
            )
          }
        >
          Premium
        </Button>
      </Space>
    </>
  );
};

export default Toilet;
