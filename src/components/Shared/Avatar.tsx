import React from 'react';

interface AvatarProps {
  firstName: string;
  lastName: string;
}

const Avatar: React.FC<AvatarProps> = ({ firstName, lastName }) => {
  const initials = `${firstName?.[0] ?? ''}${lastName?.[0] ?? ''}`.toUpperCase();

  return (
    <div className="flex items-center space-x-3">
      <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
        {initials}
      </div>
      <div>
        <p className="font-semibold">
          {firstName} {lastName}
        </p>
      </div>
    </div>
  );
};

export default Avatar;
