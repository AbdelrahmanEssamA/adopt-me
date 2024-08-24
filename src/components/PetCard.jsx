import React from "react";
import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={pet.image}
        alt={pet.name}
        className="rounded-md w-full h-80 object-cover mb-4"
      />
      <h4 className="text-xl font-bold text-neutral">{pet.name}</h4>
      <p className="text-neutral mt-2">{pet.description}</p>
      <Link to={`/adopt?name=${encodeURIComponent(pet.name)}`}>
        <button className="bg-primary text-white px-4 py-2 rounded mt-4 hover:bg-secondary">
          Adopt {pet.name}
        </button>
      </Link>
    </div>
  );
};

export default PetCard;
