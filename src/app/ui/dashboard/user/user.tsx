import React from 'react';
import Image from 'next/image';

const User: React.FC = () => {
  return (
    <div>
      <div className='flex items-center gap-3 '>
      <Image
        src="/Avatar.jpg"
        alt="User Avatar"
        width={40}
        height={30}
        style={{ borderRadius: '15px' }}
      />
      <h1>Emma Tran</h1>
      </div>
    </div>
  );
};

export default User;