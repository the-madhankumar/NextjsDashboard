import React from 'react';

const UserItem = () => {
  return (
    <div className="border p-4 flex items-center space-x-4 w-full rounded-lg">
      <div className="avatar rounded-full h-8 w-8 bg-emerald-500 text-white flex justify-center items-center font-semibold text-xs">
        MMK
      </div>
      <div className = "grow">
        <p className="font-semibold">Madhan Kumar M</p>
        <p className="text-[12px] text-gray-500 pr-2">madhankumarbusiness@gmail.com</p>
      </div>
    </div>
  );
};

export default UserItem;
