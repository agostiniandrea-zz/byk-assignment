import React from 'react';
import { shallow } from 'enzyme';
import SuggestionItem from './index';

const mockData = require("../../../api/_search.get.json");
const suggestions = mockData.suggestions;
const mySuggestion = suggestions[0];

let wrapper1;
let wrapper2;

beforeEach(() => {
  wrapper1 = shallow(<SuggestionItem />);
  wrapper2 = shallow(<SuggestionItem nrResults={mySuggestion.nrResults} searchterm={mySuggestion.searchterm} typedString={"trui"} />);
})

afterEach(() => {
  wrapper1.unmount();
  wrapper2.unmount();
});

describe("component/SuggestionItem/index.js", () => {
  it('renders without crashing (no props)', () => {
    expect(wrapper1).toMatchSnapshot();
    expect(wrapper1.find("p.value").exists()).toBe(true);
  });

  it('renders without crashing (with props)', () => {
    expect(wrapper2).toMatchSnapshot();
    expect(wrapper2.find("p.value").exists()).toBe(true);
  });
});