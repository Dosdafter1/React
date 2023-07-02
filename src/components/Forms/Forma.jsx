import { Button, Form, Input } from 'antd';
import React, { useRef } from 'react';

const Forma = () => {
    const form =  useRef(null)
    const submitHandler = (values) => {
        console.log(values)
        form.current.resetFields()
    }
    const initialValues = {
        name: '',
        amount: 1,
        price: 0.00
    }
    return (
        <div>
            <Form   ref={form}
                     onFinish={submitHandler}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }} 
                    initialValues={initialValues}>
                <Form.Item name="name" label="Product Name:"
                            rules={[{ required: true,message: 'Name is required' },
                                    {min:3,message:'min 3'},
                                    {max:50,message:'max 50'},
                                    {pattern:/^[a-z A-Z]+$/,message:'Only bukvy'}]}>
                    <Input />
                </Form.Item>
                <Form.Item name="amount" label="Product Amount:">
                    <Input />
                </Form.Item>
                <Form.Item name="price" label="Product Price:">
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType='submit'>Save</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Forma;
