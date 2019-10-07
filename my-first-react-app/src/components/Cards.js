import React from 'react';
import Card from './Card';

const Cards = () => {
  const info = [
    {
      imageName: '/images/icon1.png',
      title: 'Declarative',
      text: 'React makes it painless to create interactive UIs.'
    },
    {
      imageName: '/images/icon2.png',
      title: 'Components',
      text: 'Build encapsulated components that manage their state.'
    },
    {
      imageName: '/images/icon3.png',
      title: 'Single-Way',
      text: "A set of immutable values are passed to the component's."
    },
    {
      imageName: '/images/icon4.png',
      title: 'JSX',
      text: 'Statically-typed designed to run on modern browsers.'
    }
  ];

  return (
    <div className="Card-Container">
        {info.map((element) => {
          return (
            <Card
              imageName={element.imageName}
              title={element.title}
              text={element.text}
            ></Card>
          );
        })}
    </div>
  );
};

export default Cards;
