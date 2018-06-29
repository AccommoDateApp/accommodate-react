import { Col, Row } from "antd";
import autobind from "autobind-decorator";
import * as React from "react";
import { Preference } from "../../state/biography";
import { Choice, EditableChoice } from "./EditableChoice";
import { EditableText } from "./EditableText";
import { realEstateChoices } from "./RealEstateCard";

interface EditablePreferenceCollectionProps {
  elementsPerLine?: number;
  preferences: Preference[];
  onChange: (preferences: Preference[]) => void;
}

interface EditablePreferenceCollectionState {
  preferences: Preference[];
}

const booleanChoices: Array<Choice<boolean>> = [
  {
    text: "Yes",
    value: true,
  },
  {
    text: "No",
    value: false,
  },
];

export class EditablePreferenceCollection extends React.Component<EditablePreferenceCollectionProps, EditablePreferenceCollectionState> {
  constructor(props: EditablePreferenceCollectionProps) {
    super(props);

    this.state = {
      preferences: props.preferences,
    };
  }

  public render() {
    const rows = this.paginatePreferences().map((line, rowIndex) => {
      const columnSize = Math.floor(24 / line.length);

      const columns = line.map((preference, columnIndex) => (
        <Col span={columnSize} key={columnIndex}>
          <h4>{preference.name}</h4>
          {this.renderPreference(preference)}
        </Col>
      ));

      return (
        <Row gutter={48} key={rowIndex}>
          {columns}
        </Row>
      );
    });

    return (
      <>
        {rows}
      </>
    );
  }

  private paginatePreferences() {
    const { preferences } = this.state;

    const pages: Preference[][] = [];
    const elementsPerLine = Math.max(this.props.elementsPerLine || 0, 1);
    const pagesCount = Math.ceil(preferences.length / elementsPerLine);

    for (let i = 0; i < pagesCount; i++) {
      const start = i * elementsPerLine;
      const end = start + elementsPerLine;
      const page = preferences.slice(start, end);

      pages.push(page);
    }

    return pages;
  }

  private renderPreference(preference: Preference) {
    const onChangeEvent = (value: any) => this.updatePreference(preference, value);

    switch (preference.name) {
      case "Searching for":
        return (
          <EditableChoice
            editable={true}
            choice={preference.value}
            choices={realEstateChoices}
            onChange={onChangeEvent}
          />
        );

      case "Onsite parking":
      case "Onsite storage":
      case "Pet friendly":
      case "Smoker friendly":
        return (
          <EditableChoice
            editable={true}
            choice={preference.value}
            choices={booleanChoices}
            onChange={onChangeEvent}
          />
        );

      default:
        return (
          <EditableText
            editable={true}
            value={preference.value}
            onChange={onChangeEvent}
          />
        );
    }
  }

  @autobind
  private updatePreference(updatedPreference: Preference, value: any) {
    const updatedPreferences = this.state.preferences.map((preference) => {
      if (preference.name === updatedPreference.name) {
        return {
          ...updatedPreference,
          value,
        };
      }

      return preference;
    });

    this.setState({
      preferences: updatedPreferences,
    });

    this.props.onChange(updatedPreferences);
  }
}
