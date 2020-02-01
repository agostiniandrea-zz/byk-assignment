import React from 'react';
import { shallow } from 'enzyme';
import SuggestionsTable from './index';
import SuggestionItem from '../SuggestionItem';

const mockData = require("../../../api/_search.get.json");
const suggestions = mockData.suggestions;

let wrapper1;
let wrapper2;

beforeEach(() => {
  wrapper1 = shallow(<SuggestionsTable />);
  wrapper2 = shallow(<SuggestionsTable items={suggestions} typedString="trui" />);
})

afterEach(() => {
  wrapper1.unmount();
  wrapper2.unmount();
});

describe("component/SuggestionsTable/index.js", () => {
  it('renders without crashing (no props)', () => {
    expect(wrapper1).toMatchSnapshot();
    expect(wrapper1.find(SuggestionItem).length).toBe(0);
  });

  it('renders without crashing (with props)', () => {
    expect(wrapper2).toMatchSnapshot();
    expect(wrapper2.find(SuggestionItem).length).toBe(suggestions.length);
  });
});