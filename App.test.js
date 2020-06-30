import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

/**
*  toBeTruthy(); Obtiene resultados por consola
*  toMatchSnapshot(); Imprime resulatados de test en archivo
**/
it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();  
  expect(rendered).toBeTruthy(); 
});
