import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
