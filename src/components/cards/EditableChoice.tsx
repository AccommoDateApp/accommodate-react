import { Radio } from "antd";
import * as React from "react";

export interface Choice<T> {
  value: T;
  text: string;
}

interface EditableChoiceProps<T = any> {
  editable: boolean;
  choice: T;
  choices: Array<Choice<T>>;
  onChange: (value: T) => void;
}

export const EditableChoice = (props: EditableChoiceProps) => {
  if (!props.editable) {
    for (const choice of props.choices) {
      if (choice.value === props.choice) {
        return (
          <p>{choice.text}</p>
        );
      }
    }

    return <p />;
  }

  const choices = props.choices.map((c, index) => (
    <Radio value={c.value} key={index}>{c.text}</Radio>
  ));

  const handleChange = (event: any) => props.onChange(event.target.value);

  return (
    <Radio.Group onChange={handleChange} value={props.choice}>
      {choices}
    </Radio.Group>
  );
};
