import './styles/main.scss';
import fenner from './images/fenner.png';

const arrow = () => {
  console.log('webpack');
  const img = document.createElement('img');
  img.src = fenner;
  document.querySelector('body').appendChild(img);
};

arrow();
