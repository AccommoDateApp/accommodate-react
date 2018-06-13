import { Button, Checkbox, Form, Input } from "antd";
import * as React from "react";
const FormItem = Form.Item;

export interface RegisterState {
    name: string;
    lastname: string;
    email: string;
    password: string;
    repeatPassword: string;
    landlordOrTenant: boolean;
    confirmDirty: false;
}

export class RegistrationForm extends React.Component<any, RegisterState> {

    public handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err: any, values: any) => {
            if (!err) {
                console.log("Received values of form: ", values);
            }
        });
    }

    public render() {

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                sm: { span: 8 },
                xs: { span: 24 },
            },
            wrapperCol: {
                sm: { span: 16 },
                xs: { span: 24 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                sm: {
                    offset: 8,
                    span: 16,
                },
                xs: {
                    offset: 0,
                    span: 24,
                },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="First Name"
                >
                    { /* tslint:disable-next-line:jsx-no-multiline-js */
                        getFieldDecorator("firstname",
                            {
                                rules: [{ type: "string" },
                                { required: true, message: "Please input your Name!" }],
                            })
                            (<Input />)}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Last Name"
                >
                    { /* tslint:disable-next-line:jsx-no-multiline-js */
                        getFieldDecorator("lastname",
                            {
                                rules: [{ type: "string" },
                                { required: true, message: "Please input your Last Name!" }],
                            })
                            (<Input />)}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                >
                    {/* tslint:disable-next-line:jsx-no-multiline-js */
                        getFieldDecorator("email", {
                            rules: [{
                                message: "The input is not valid E-mail!", type: "email",
                            }, {
                                    message: "Please input your E-mail!", required: true,
                            }],
                        })(
                            <Input />,
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Password"
                >
                    {/* tslint:disable-next-line:jsx-no-multiline-js */
                        getFieldDecorator("password", {
                            rules: [{
                                message: "Please input your password!", required: true,
                            }],
                        })(
                            <Input type="password" />,
                        )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Confirm Password"
                >
                    {/* tslint:disable-next-line:jsx-no-multiline-js */
                        getFieldDecorator("confirm", {
                            rules: [{
                                message: "Please confirm your password!", required: true,
                            }],
                        })(
                            <Input type="password" />,
                        )}
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Checkbox>Landlord</Checkbox>
                    <Checkbox>Tenant</Checkbox>
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                </FormItem>
            </Form>
        );
    }
}

export const WrappedRegistrationForm = Form.create()(RegistrationForm);
