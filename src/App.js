import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './components/Containers/Router';
import theme from './constants/theme';

function App(props) {
	return (
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	);
}

export default App;
