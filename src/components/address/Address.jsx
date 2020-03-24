import React, { useState } from "react";
import { search } from "./locationIq";
import { AutoComplete, Form } from "antd";
import { debounce } from "../../utils/debounce";

const { Option } = AutoComplete;

export default function Address() {
  const [result, setResult] = useState([]);

  const handleSearch = debounce(async value => {
    if (value) {
      const resp = await search(value);
      const res = await resp.json();
      if (!res.error) {
        setResult(res);
      } else {
        setResult([]);
      }
    } else {
      setResult([]);
    }
  }, 2100);
  console.log(result);
  const children = result.map(location => (
    <Option key={location.place_id} value={location.display_name}>
      {location.display_name}
    </Option>
  ));
  return (
    <Form.Item
      name="address"
      label="Укажите адрес"
      rules={[
        {
          required: true,
          message: "Пожалуйска укажите адрес!"
        }
      ]}
    >
      <AutoComplete
        style={{
          width: 600
        }}
        onSearch={handleSearch}
        placeholder="Ваш адрес"
      >
        {children}
      </AutoComplete>
    </Form.Item>
  );
}
