import { Material, MaterialEnum } from "./index";

interface ToiletProps {
  handleClick: (material: Material) => void;
}

const MaterialSelect = ({ handleClick }: ToiletProps) => {
  return (
    <>
      <p>Would you prefer ceramic or marbel for your floor tiling ?</p>
      <button onClick={() => handleClick({ name: MaterialEnum.CERAMIC })}>
        Ceramic
      </button>
      <button onClick={() => handleClick({ name: MaterialEnum.MARBEL })}>
        Marbel
      </button>
    </>
  );
};

export default MaterialSelect;
