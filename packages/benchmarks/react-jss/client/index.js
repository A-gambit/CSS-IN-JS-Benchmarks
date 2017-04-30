import ReactDOM from 'react-dom';
import React from 'react';
import App from 'benchmarks-utils';
import Table from './Table';

import './index.html';

ReactDOM.render(<App table={Table} />, document.getElementById('root'));
