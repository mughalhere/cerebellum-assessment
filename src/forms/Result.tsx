import { useEffect, useState } from "react";
import { Data } from "../App";

const Result = (props: Data) => {
  const [total, setTotal] = useState<number>(0);
  const { budget, sanitaryProducts, floorTilings, bathroomSize } = props;

  useEffect(() => {
    let calculateTotal = 0;
    if (sanitaryProducts?.length) {
      for (const product of sanitaryProducts) {
        calculateTotal += product?.price ?? 0;
      }
    }
    if (floorTilings?.material) {
      calculateTotal += floorTilings?.material?.price;
    }
    setTotal(calculateTotal);
  }, [sanitaryProducts, floorTilings, bathroomSize]);

  if (!sanitaryProducts?.length && !floorTilings?.material) {
    return (
      <>
        <h3>You have not opted for any option</h3>
        {budget !== null && `Your budget is ${budget} USD`}
      </>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Item</td>
          <td>Range</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {sanitaryProducts?.length &&
          sanitaryProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.range}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        {floorTilings && (
          <tr>
            <td>{floorTilings.material?.name}</td>
            <td>{floorTilings.material?.range}</td>
            <td>{floorTilings.material?.price}</td>
          </tr>
        )}
        <tr>
          <td>{budget !== null && `Budget: ${budget}`}</td>
          <td />
          <td>
            <span className={budget >= total ? "green" : "red"}> {total}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Result;
