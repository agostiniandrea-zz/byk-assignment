import React from 'react';
import SuggestionsTable from './index';

export default { title: 'SuggestionsTable' };

const mockData = require("../../../api/_search.get.json");
const suggestions = mockData.suggestions;

export const withoutItems = () => <SuggestionsTable />;
export const withItems = () => <SuggestionsTable items={suggestions} typedString="trui" />;