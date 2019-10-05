import React from 'react';
import Card from './Card';

const Cards = () => {
  const info = [
    {
      imageName: '/images/icon1.png',
      title: 'hola',
      text: 'Pepe'
    },
    {
      imageName: '/images/icon2.png',
      title: 'hola',
      text: 'Pepe'
    },
    {
      imageName: '/images/icon3.png',
      title: 'hola',
      text: 'Pepe'
    },
    {
      imageName: '/images/icon4.png',
      title: 'hola',
      text: 'Pepe'
    }
  ];

  return (
    <div>
      {info.map((element) => {
        return (
          <Card imageName={element.imageName}></Card>
        )
      })}
    </div>
  )
};

export default Cards;
