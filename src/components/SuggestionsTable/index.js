import React from 'react';
import './suggestions-table.css';
import SuggestionItem from '../SuggestionItem';

class SuggestionsTable extends React.Component {
  render() {
    return (
      <div className="suggestions-table">
        {this.props.items && this.props.items.map((object, i) =>
          <SuggestionItem nrResults={object.nrResults} searchterm={object.searchterm} typedString={this.props.typedString} key={i} />
        )}
      </div>
    );
  }
};

export default SuggestionsTable;