import { Button, Space } from "antd";
import { Material, MaterialEnum } from "./index";

interface ToiletProps {
  handleClick: (material: Material) => void;
}

const MaterialSelect = ({ handleClick }: ToiletProps) => {
  return (
    <>
      <h3 className="text-center">
        Would you prefer ceramic or marbel for your floor tiling ?
      </h3>
      <Space className="flex-centered">
        <Button
          type="primary"
          onClick={() => handleClick({ name: MaterialEnum.CERAMIC })}
        >
          Ceramic
        </Button>
        <Button
          type="primary"
          onClick={() => handleClick({ name: MaterialEnum.MARBEL })}
        >
          Marbel
        </Button>
      </Space>
    </>
  );
};

export default MaterialSelect;
