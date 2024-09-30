import React from 'react';

export const Loading: React.FC = () => {
    return (
        <div className="font-poppins flex items-center justify-center h-full">
            <div className="text-4xl font-bold text-gray-600 animate-bounce">Cargando...</div>
        </div>
    );
};

