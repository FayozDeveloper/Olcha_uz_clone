import { Form, Input, Button } from 'antd';
import {useState} from "react";
import axios from "axios";
import MainAdminPanel from "../components/main";

const Auth = () => {

    let [data,setData] = useState({})

    let [success,setSuccess] = useState(false)

    function handleInputChange(e){
        let authData = {
            ...data,
            [e.target.name]:e.target.value
        }
        setData(authData);
        console.log(authData)
    }

    function login(){
        axios.post('http://10.100.200.213:3399/api/shop/user/login',
            {username:data.username, password:data.password})
            .then(response=>{
                if (response.data.status === 0){
                    localStorage.setItem('token',response.data.data)
                    setSuccess(true)
                }
            })
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='bg-light mt-5'>
            {success ? <MainAdminPanel/> : <div className="col-md-8 offset-2">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input name="username" onChange={handleInputChange} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password  name="username" onChange={handleInputChange}/>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" onClick={login} htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </div>}
        </div>
    );
};

export default Auth;