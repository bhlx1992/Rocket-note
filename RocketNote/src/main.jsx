import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/global.js";

import theme from './styles/theme.js';

import {Routes} from './routes';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
