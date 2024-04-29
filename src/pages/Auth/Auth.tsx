import { Button, Form, Input } from "antd"

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

const Auth = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
        <Form
        {...formItemLayout}
        variant='filled'
        className="w-[50%] flex flex-col gap-4 border-1 border-black shadow-sm bg-gray-50"
        >
            <Form.Item
            label = 'username'
            name = 'username'
            rules={[{required : true, message : 'Please enter your username'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
            label = 'password'
            name = 'password'
            rules={[{required : true, message : 'Please enter your password'}]}
            >
                <Input.Password/>
            </Form.Item>
            <Form.Item
            label = 'imgUrl'
            name = 'imgUrl'
            rules={[{required : true, message : 'Please enter the image in url form'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default Auth