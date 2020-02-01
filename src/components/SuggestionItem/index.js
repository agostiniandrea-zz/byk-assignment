import React from 'react';
import './suggestion-item.css';

class SuggestionItem extends React.Component {
  getStrongString(input) {
    return `<strong>${input}</strong>`;
  }

  renderedString() {
    let newString = "";
    if (this.props.searchterm && this.props.nrResults) {
      if (this.props.typedString && this.props.searchterm.includes(this.props.typedString)) {
        const searchTerm = this.props.searchterm;
        const typedString = this.props.typedString;
        const stringSlices = searchTerm.split(typedString);
        if (searchTerm.startsWith(typedString)) {
          newString = typedString + this.getStrongString(stringSlices[1]);
        } else if (searchTerm.endsWith(typedString)) {
          newString = this.getStrongString(stringSlices[0]) + typedString;
        } else {
          newString = this.getStrongString(stringSlices[0]) + typedString + this.getStrongString(stringSlices[1]);;
        }
      } else {
        newString = `<strong>${this.props.searchterm}</strong>`;
      }
      newString += ` (${this.props.nrResults})`
    }
    return newString;
  }

  render() {
    return (
      <div className="suggestion-item">
        <p className="value" dangerouslySetInnerHTML={{ __html: this.renderedString() }} />
      </div>
    );
  }
};

export default SuggestionItem;