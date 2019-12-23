import React from 'react';
import {
  View
} from 'react-native';

 import OverlayImgView from './component/overlayImgView'

 const imgs =[
  {
    image: require('./img/1.jpg'),
  },
  {
    image: require('./img/2.jpg'),
  },
  {
    image: require('./img/3.jpg'),
  },
  {
    image: require('./img/4.jpg'),
  },
  {
    image: require('./img/3.jpg'),
  },
]

class App extends React.PureComponent {
  render(){
  return (

    <OverlayImgView 
      columns='3' 
      mainViewBackgroundColor='gray' 
      mainImgWidth='30%'
      mainImgHeight='15%'
      openViewBackgroundColor='black'
      openImgHeight='80%'
      openImgWidth='100%'
      renderData = {imgs}
    />

  );
}

};


export default App;
