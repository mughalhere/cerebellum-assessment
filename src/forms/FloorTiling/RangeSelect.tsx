import { Button, Space } from "antd";
import { MaterialEnum, Material } from "./index";
import { RangeEnum } from "../../App";

interface RangeSelectProps {
  material?: Material;
  handleClick: (range: Material) => void;
}

const RangeSelect = ({ material, handleClick }: RangeSelectProps) => {
  return (
    <>
      <h3 className="text-center">{material?.name} USD per m2</h3>
      <Space>
        <Button
          type="primary"
          onClick={() =>
            handleClick({
              price: material === MaterialEnum.CERAMIC ? 15 : 50,
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
              price: material === MaterialEnum.CERAMIC ? 35 : 95,
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
              price: material === MaterialEnum.CERAMIC ? 75 : 150,
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

export default RangeSelect;
