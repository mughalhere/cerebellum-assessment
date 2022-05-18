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
      <p>Please select your bathroom size ?</p>
      <button onClick={() => handleClick(9)}>Small</button>
      <button onClick={() => handleClick(12)}>Medium</button>
      <button onClick={() => handleClick(16)}>Large</button>
    </>
  );
};

export default BathroomSize;
