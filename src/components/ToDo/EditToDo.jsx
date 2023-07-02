import { Button, Form, Input, Modal } from 'antd';
import React, { useRef, useState } from 'react';

const EditToDo = ({id,editTask}) => {
    const form = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const submitHandler = (values) => {
        editTask(id,values.name)
        form.current.resetFields()
        handleCancel()
    }
    return (
        <>
            <Button onClick={showModal}>
                Edit
            </Button>
            <Modal 
                title="ToDo" 
                open={isModalOpen}  
                onCancel={handleCancel}
                footer={null}>
                

                <Form
                    ref={form}
                    onFinish={submitHandler}>
                    <Form.Item label="Title:" name="name" rules={[{required:true}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit' type='primary'>Save</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default EditToDo;
