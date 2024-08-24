import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold text-primary mb-6">
        Welcome to Adopt a Pet
      </h1>
      <p className="text-neutral text-lg mb-8">
        Find your new best friend today!
      </p>
      <Link to="/pets">
        <button className="bg-primary text-white px-6 py-3 rounded hover:bg-secondary">
          View Available Pets
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
