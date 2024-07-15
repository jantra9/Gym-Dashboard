import React from 'react';

interface CardProps {
  title: string;
  number:number;
}

const Card: React.FC<CardProps> = ({title, number}) => {
  return (
    <div className='mb-3 border border-black rounded-3xl p-3 hover:bg-black hover:text-white '>
      <div className='font-medium pb-5'>{title}</div>
      <div className='text-3xl font-bold'>{number}</div>
    </div>
  );
}

export default Card;
