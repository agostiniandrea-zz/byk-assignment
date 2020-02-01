import React, { Component } from 'react';

import SuggestionsTable from './components/SuggestionsTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      searchValue: '',
      showSuggestions: false,
      suggestions: []
    };

    this.onBlur = this.onBlur.bind(this);
    this.cleanSearch = this.cleanSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    this.handleSuggestionsVisibility = this.handleSuggestionsVisibility.bind(this);
    this.searchInfo = this.searchInfo.bind(this);

    this.textInput = React.createRef();
  }

  onBlur() {
    this.deleteSuggestions();
  }

  deleteSuggestions() {
    this.setState({
      suggestions: []
    });
  }

  handleChange(event) {
    this.handleSuggestionsVisibility();
    this.setState({ searchValue: event.target.value });
  }

  handleOnKeyUp() {
    this.handleSuggestionsVisibility(true);
    if (this.state.searchValue) {
      this.searchInfo();
    } else {
      this.deleteSuggestions();
    }
  }

  handleSuggestionsVisibility(value = false) {
    this.setState({ showSuggestions: value });
  }

  searchInfo() {
    fetch(`/search?q=${this.state.searchValue}`)
      .then(res => res.json())
      .then((result) => {
        this.setState({ suggestions: result.suggestions });
      },
        (error) => {
          this.setState({
            error
          });
        }
      );
  }

  cleanSearch() {
    this.setState({
      searchValue: '',
      suggestions: []
    });

    if (this.textInput && this.textInput.focus) {
      this.textInput.current.focus();
    }
  }

  render() {
    return (
      <div className="app">
        <div className="search-bar">
          {this.state.searchValue && <label className="delete-label" onClick={this.cleanSearch}>X</label>}
          <img alt="" className="search-icon" src={require('./assets/icons/search-icon.png')} />
          <input
            className="input-field"
            placeholder="Zoeken"
            maxLength="40"
            type="text"
            ref={this.textInput}
            value={this.state.searchValue}
            onBlur={this.onBlur}
            onChange={this.handleChange}
            onKeyUp={this.handleOnKeyUp}
          />
        </div>
        {this.state.showSuggestions && this.state.suggestions && <SuggestionsTable items={this.state.suggestions} typedString={this.state.searchValue} />}
      </div>
    );
  }
}

export default App;
