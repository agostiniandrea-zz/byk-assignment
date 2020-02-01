import React from 'react';
import SuggestionItem from './index';

export default { title: 'SuggestionItem' };

const mockData = require("../../../api/_search.get.json");
const suggestions = mockData.suggestions;
const mySuggestion = suggestions[0];

export const withoutText = () => <SuggestionItem />;
export const withText = () => <SuggestionItem nrResults={mySuggestion.nrResults} searchterm={mySuggestion.searchterm} typedString={"trui"} />;