import { Input } from "antd";
import autobind from "autobind-decorator";
import * as React from "react";

interface EditableTextProps {
  editable: boolean;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
}

interface EditableTextState {
  value: string;
}

export class EditableText extends React.Component<EditableTextProps, EditableTextState> {
  constructor(props: EditableTextProps) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  public componentWillReceiveProps(props: EditableTextProps) {
    this.setState({
      value: props.value,
    });
  }

  public render() {
    if (!this.props.editable) {
      return this.state
                 .value
                 .split("\n")
                 .filter((line) => line.length)
                 .map((paragraph, index) => (
                   <p key={index}>{paragraph}</p>
                 ));
    }

    let InputComponent: any = Input;

    if (this.props.textarea) {
      InputComponent = Input.TextArea;
    }

    return (
      <p>
        <InputComponent
          onChange={this.updateValue}
          value={this.state.value}
          onBlur={this.triggerChangeEvent}
        />
      </p>
    );
  }

  @autobind
  private updateValue(event: any) {
    this.setState({
      value: event.target.value,
    });
  }

  @autobind
  private triggerChangeEvent() {
    this.props.onChange(this.state.value);
  }
}
