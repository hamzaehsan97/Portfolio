import React from 'react';
import {Header} from './components/layout/Header';
import {Content} from './components/layout/Content';






export const App = () =>  (
    <div className="App" 
    style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80%'
    }}
    >
      <div><Header /></div>
      <div><Content /></div>

    </div>
  );

