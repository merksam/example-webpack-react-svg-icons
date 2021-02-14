import React from 'react';
import { Button } from '../Button/Button';
import Icon from '../Icon/Icon';

import './App.css';

function App() {
  const [isOutlined, setIsOutlined] = React.useState(false);
  return (
    <div className='app'>
      <a href='https://github.com/merksam/example-webpack-react-svg-icons' className='app__github'><Icon raw name='github' /></a>
      <div className='app__content'>
        <h1 className='app__title'>SVG with React</h1>
        <p className='app__subtitle'>
          Discover the code from the <code>App</code> component to see how it works
        </p>
        <Button theme={isOutlined ? 'outlined' : undefined} iconName='search'>
          Explore the World
        </Button>
        <a className='app__link' href='#' onClick={() => setIsOutlined(!isOutlined)}>toggle style</a>
      </div>
    </div>
  );
}

export default App;
