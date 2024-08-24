import React from "react";
import PetCard from "../components/PetCard";

const pets = [
  {
    id: 1,
    name: "Buddy",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
    description: "A friendly dog.",
  },
  {
    id: 2,
    name: "Mittens",
    image: "https://i.ytimg.com/vi/wRx3Uvcktm8/maxresdefault.jpg",
    description: "A cute pug.",
  },
  {
    id: 3,
    name: "Fluffy",
    image:
      "https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg-900x510.jpg",
    description: "A fluffy dog.",
  },
];

const PetsPage = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <h2 className="text-3xl font-bold text-neutral mb-6">Available Pets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default PetsPage;
