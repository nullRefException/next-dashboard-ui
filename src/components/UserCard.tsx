import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className=" flex-1 p-4 odd: bg-lamaPurple even:bg-lamaYellow rounded-2xl gap-4 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="bg-white text-emerald-600 text-xs rounded-full px-2 py-1">
          2024/25
        </span>
        <Image src="/more.png" alt="" height={20} width={20} />
      </div>
      <h1 className="font-semibold text-2xl my-4">2,132</h1>
      <h2 className="text-gray-500 capitalize">{type}s</h2>
    </div>
  );
};

export default UserCard;
