import { Button, Space } from "antd";
import { FormEnum, Data } from "../App";

interface BathroomSizeProps {
  handleNext: (form: FormEnum, data: Data) => void;
}

const BathroomSize = ({ handleNext }: BathroomSizeProps) => {
  const handleClick = (bathroomSize: number) => {
    handleNext(FormEnum.RESULT, { bathroomSize });
  };

  return (
    <>
      <h3 className="text-center">Please select your bathroom size ?</h3>
      <Space>
        <Button type="primary" onClick={() => handleClick(9)}>
          Small
        </Button>
        <Button type="primary" onClick={() => handleClick(12)}>
          Medium
        </Button>
        <Button type="primary" onClick={() => handleClick(16)}>
          Large
        </Button>
      </Space>
    </>
  );
};

export default BathroomSize;
