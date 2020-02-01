import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import SuggestionsTable from './components/SuggestionsTable';

const typedSearch = "trui";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
})

afterEach(() => {
  wrapper.unmount();
});

describe('App.js', () => {
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('updates properly state.searchValue - DOM way', () => {
    wrapper.instance().setState({ searchValue: typedSearch });
    expect(wrapper.find(".delete-label").exists()).toBe(true);
    wrapper.find(".delete-label").simulate("click");
    expect(wrapper.instance().state.searchValue).toBe("");
    expect(wrapper.instance().state.suggestions).toStrictEqual([]);
  });

  it('updates properly state.searchValue - manual way', () => {
    wrapper.instance().setState({ searchValue: typedSearch });
    expect(wrapper.find(".delete-label").exists()).toBe(true);
    wrapper.instance().setState({ searchValue: "" });
    expect(wrapper.instance().state.searchValue).toBe("");
    expect(wrapper.instance().state.suggestions).toStrictEqual([]);
  });

  it('toggles state.showSuggestions', () => {
    wrapper.find('.input-field').simulate("change", { target: { value: typedSearch } })
    wrapper.find(".input-field").simulate("keyDown");
    expect(wrapper.instance().state.showSuggestions).toBe(false);
    wrapper.find(".input-field").simulate("keyUp");
    expect(wrapper.instance().state.showSuggestions).toBe(true);
  });

  it('renders SuggestionsTable component', () => {
    expect(wrapper.find(SuggestionsTable).length).toBe(wrapper.instance().state.suggestions.length);
  });
});