import { Checkbox, Input } from "antd";
import * as React from "react";
const {TextArea} = Input;

export const AboutMe = () => (
    <div>
        <div>
            <picture><Input type="image" src="" alt="" /></picture>
        </div>
        <h1>About me</h1>
    <TextArea />
        <div>
            <h4>Basic Information</h4>
            <div>
                <label>Birth Date</label> <Input type="datetime" name="calendar" id="" />
                <label>Gender</label> <Checkbox />
                <label>Education</label> <Input type="text" name="Education" id="" />
                <label>Languages</label> <Input type="text" name="Languages" id="" />
            </div>
        </div>
        <div>
            <h4>Contact Information</h4>
            <div>
                <label>E-Mail Address</label> <Input type="email" name="email" id="" />
                <label>Telephone Number</label> <Input type="text" name="number" id="" />
                <label>Address</label> <Input type="text" name="address" id="" />
            </div>
        </div>
    </div>
);
