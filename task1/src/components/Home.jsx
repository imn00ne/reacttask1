import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Gallery</h1>
      <p className="text-lg mb-4">
        This is a simple gallery application built with React and Tailwind CSS.
      </p>
      <img 
        src="https://picsum.photos/800/300" 
        alt="Sample" 
        className="mx-auto mb-2 rounded-lg shadow-lg"
      />
      <Link to="/gallery">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Explore Gallery
        </button>
      </Link>
    </div>
  );
};

export default Home;