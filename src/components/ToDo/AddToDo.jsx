import { Button, Form, Input, Modal } from 'antd';
import React, { useRef, useState } from 'react';
const AddToDo=({addTask}) => {
    const form = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const submitHandler = (values)=>{
        addTask(values.name)
        form.current.resetFields()
        handleCancel()
    }
    return (
       
        <div>
            <Button type="primary" onClick={showModal}>
                Add ToDo
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
                        <Button htmlType='submit' type='primary'>Add</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
/*
const AddToDo = ({addTask}) => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(null);
    const submitHandler = (e) => {
        e.preventDefault();
        if(name.trim().length > 3){
            
            addTask(name)
            setName('')
            setNameError(null)
        }
        else{
            setNameError(' > 3 symbols')
        }
    }
    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                    <input type="text" value={name} onChange={handleChange} />
                    <p style={{color:'red'}}>{nameError??''}</p>
                    <button>Add</button>
            </form>
        </div>
    );
}*/

export default AddToDo;
