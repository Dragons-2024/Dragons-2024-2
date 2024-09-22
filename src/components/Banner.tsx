import React from 'react';
import promo4 from '../components/promo4.png';
const Banner: React.FC = () => {
  return (
    <div className="banner text-center my-8">
      <img src={promo4} alt="Banner Publicitario" className="w-full h-auto rounded-lg" />
    </div>
  );
};

export default Banner;