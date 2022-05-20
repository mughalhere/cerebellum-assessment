import { Button, Space } from "antd";
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
      <h3 className="text-center">Select your Sink</h3>
      <Space>
        <Button
          type="primary"
          onClick={() =>
            handleClick(
              { name: StepsEnum.SINK, price: 350, range: RangeEnum.ECONOMY },
              StepsEnum.BATHTUB
            )
          }
        >
          Economy
        </Button>
        <Button
          type="primary"
          onClick={() =>
            handleClick(
              { name: StepsEnum.SINK, price: 700, range: RangeEnum.STANDARD },
              StepsEnum.BATHTUB
            )
          }
        >
          Standard
        </Button>
        <Button
          type="primary"
          onClick={() =>
            handleClick(
              { name: StepsEnum.SINK, price: 1500, range: RangeEnum.PREMIUM },
              StepsEnum.BATHTUB
            )
          }
        >
          Premium
        </Button>
      </Space>
    </>
  );
};

export default Sink;
