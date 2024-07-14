import React from 'react';

interface CardProps {
  title: string;
  number:number;
}

const Card: React.FC<CardProps> = ({title, number}) => {
  return (
    <div className='border border-black rounded-2xl p-3 hover:bg-black hover:text-white '>
      <div className='font-medium pb-5'>{title}</div>
      <div className='text-3xl font-bold'>{number}</div>
    </div>
  );
}

export default Card;
