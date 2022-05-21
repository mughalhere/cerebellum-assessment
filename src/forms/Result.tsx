import { useEffect, useState } from "react";
import { Row, Col, Space, Table } from "antd";
import { Data } from "../App";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Range",
    dataIndex: "range",
    key: "range",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
];

const Result = (props: Data) => {
  const [total, setTotal] = useState<number>(0);
  const [dataSource, setDataSource] = useState([]);
  const { budget, sanitaryProducts, floorTilings, bathroomSize } = props;

  // calculating the total
  useEffect(() => {
    let calculateTotal = 0;
    if (sanitaryProducts?.length) {
      for (const product of sanitaryProducts) {
        calculateTotal += product?.price ?? 0;
      }
    }
    if (floorTilings?.material) {
      calculateTotal += floorTilings?.material?.price * bathroomSize;
    }
    setTotal(calculateTotal);
  }, [sanitaryProducts, floorTilings, bathroomSize]);

  // changing the data into an array for the table
  useEffect(() => {
    const data = [];
    if (sanitaryProducts?.length) {
      data.push(...sanitaryProducts);
    }
    if (floorTilings?.material) {
      data.push({
        ...floorTilings.material,
        price: floorTilings.material.price * bathroomSize,
      });
    }
    setDataSource(data);
  }, [bathroomSize, floorTilings, sanitaryProducts]);

  if (!sanitaryProducts?.length && !floorTilings?.material) {
    return (
      <>
        <h3>You have not opted for any option</h3>
        {budget !== null && `Your budget is ${budget} USD`}
      </>
    );
  }

  return (
    <>
      <Space size="large" direction="vertical">
        <Table
          className="result"
          columns={columns}
          pagination={false}
          dataSource={dataSource}
        />
        <Row>
          <Col span={12} className="text-left">
            {budget && <p>Budget: ${budget}</p>}
          </Col>
          <Col span={12} className="text-right">
            <p className={budget ? (budget >= total ? "green" : "red") : ""}>
              Total price: ${total}
            </p>
          </Col>
        </Row>
      </Space>
    </>
  );
};

export default Result;
