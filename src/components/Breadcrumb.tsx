import React from 'react';

const Breadcrumb: React.FC = () => {
  return (
    <div className="breadcrumb text-sm text-gray-600 mb-4">
      <a href="#" className="text-blue-600 hover:underline">Inicio</a> &gt; <a href="#" className="text-blue-600 hover:underline">Tecnología</a> &gt; Computadores
    </div>
  );
};

export default Breadcrumb;