import React from "react";
import { Table, Popconfirm } from "antd";
import "../ShoppingBasket.css";
import { DeleteOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";

const { Column } = Table;

const ShoppingBasketTable = ({ products, handleDelete, totalAmount }) => {
  return (
    <>
      <Table dataSource={products}>
        <Column title="Имя" dataIndex="name" key="name" />
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Размер" dataIndex="selected" key="selected" />
        <Column
          title="Количество"
          dataIndex="amoundselected"
          key="amoundselected"
        />
        <Column title="Цена" dataIndex="pricesAndSizes" key="pricesAndSizes" />
        <Column
          title="Операции"
          dataIndex="operation"
          render={(_, record) =>
            products.length >= 1 ? (
              <Popconfirm
                title="Вы уверены?"
                onConfirm={() => handleDelete(record)}
              >
                <DeleteOutlined className="iconDelete" type="delete" />
              </Popconfirm>
            ) : null
          }
        />
      </Table>
      <div className="blockTableBasketText">
        <Text className="tableBasketText">
          Итоговая сумма: {totalAmount} Рублей
        </Text>
      </div>
    </>
  );
};
export default ShoppingBasketTable;
