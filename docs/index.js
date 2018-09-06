import React from 'react';
import ReactDOM from 'react-dom';

import SpectrumChart from '../src/index';

ReactDOM.render(
  <div>
    <SpectrumChart
      range={{lowerBound: 0, upperBound: 100}}
      labels={[
        {label: 'Cold', lowerBound: 0, upperBound: 50},
        {label: 'Hot', lowerBound: 51, upperBound: 100}
      ]} />
  </div>
  , document.getElementById('root')
);