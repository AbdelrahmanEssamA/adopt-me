import React from "react";
import { useLocation } from "react-router-dom";
import AdoptionForm from "../components/AdoptionForm";

const AdoptPage = () => {
  const search = useLocation().search;
  const petName = new URLSearchParams(search).get("name") || "";

  const handleAdoptSubmit = (data) => {
    alert("Adoption form submitted:", data);
    // Process the adoption form submission (e.g., send data to a server)
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <h2 className="text-3xl font-bold text-neutral mb-6">Adopt {petName}</h2>
      <AdoptionForm petName={petName} onSubmit={handleAdoptSubmit} />
    </div>
  );
};

export default AdoptPage;
