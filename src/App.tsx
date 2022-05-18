import { useState } from "react";
import "./App.css";

// ------ FORMS ------
import Budget from "./forms/Budget";
import SanitaryProducts, {
  SanitaryProductData,
} from "./forms/SanitaryProducts";
import FloorTiling, { Material } from "./forms/FloorTiling";
import BathroomSize from "./forms/BathroomSize";
import Result from "./forms/Result";

export enum FormEnum {
  BUDGET = "budget",
  SANITARYPRODUCTS = "sanitaryProducts",
  FLOORTILING = "floorTiling",
  BATHROOMSIZE = "bathroomsize",
  RESULT = "result",
}

export enum RangeEnum {
  ECONOMY = "Economy",
  STANDARD = "Standard",
  PREMIUM = "Premium",
}

export interface PriceRange {
  /**
   * the price of the product
   */
  price?: number;
  /**
   * the range of the product, could be Economy, Standard or Premium
   */
  range?: RangeEnum;
}

export interface Data {
  /**
   * the budget of the user
   */
  budget?: number;
  /**
   * the sanitary products selected by the user
   */
  sanitaryProducts?: Array<SanitaryProductData>;
  /**
   * the floor tilings selceted by the user
   */
  floorTilings?: { material?: Material };
  /**
   * the bathroom size selected  by the user
   */
  bathroomSize?: number;
}

interface State {
  /**
   * the form that is currently active and being filled by the user
   */
  activeForm: FormEnum;
  /**
   * the data obejct from which the result is created
   */
  data?: Data;
}

const App = (): JSX.Element => {
  const [state, setState] = useState<State>({ activeForm: FormEnum.BUDGET });
  const { activeForm } = state;

  /**
   *
   * @param form the form to show to the user
   * @param data the data object from which the result is created
   */
  const handleNext = (form: FormEnum, data: State["data"]) => {
    setState((current) => ({
      ...current,
      data: { ...current.data, ...data },
      activeForm: form,
    }));
  };

  return (
    <div className="contentRoot">
      <div>
        {
          {
            [FormEnum.BUDGET]: <Budget handleNext={handleNext} />,
            [FormEnum.SANITARYPRODUCTS]: (
              <SanitaryProducts handleNext={handleNext} />
            ),
            [FormEnum.FLOORTILING]: <FloorTiling handleNext={handleNext} />,
            [FormEnum.BATHROOMSIZE]: <BathroomSize handleNext={handleNext} />,
            [FormEnum.RESULT]: <Result {...state.data} />,
          }[activeForm]
        }
      </div>
    </div>
  );
};

export default App;
