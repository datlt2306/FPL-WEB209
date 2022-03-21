import React from 'react'
import { Table, Tag, Space } from 'antd';
import { useSelector } from 'react-redux';

const ProductManager = () => {
    const data = useSelector(data => data.products);
    const result = data?.map((item,index) => {
        return {
            key: index + 1,
            name: item.name,
            price: +item.price
        };
    });
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        },
        {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
            <a>Delete</a>
            </Space>
        ),
        },
    ];
  return (
    <div>
        <Table columns={columns} dataSource={result} />
    </div>
  )
}

export default ProductManager