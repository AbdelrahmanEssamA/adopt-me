import React from "react";
import { useForm } from "react-hook-form";

const AdoptionForm = ({ petName }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Adoption form submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded shadow-md">
      <h3 className="text-xl font-bold text-neutral mb-4">Adopt {petName}</h3>

      <div className="mb-4">
        <label className="block text-neutral font-bold mb-2">Pet Name</label>
        <input
          {...register("name", { required: "Pet name is required" })}
          type="text"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter the pet's name"
          readOnly
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-neutral font-bold mb-2">Full Name</label>
        <input
          {...register("fullName", { required: "Full name is required" })}
          type="text"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your full name"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-neutral font-bold mb-2">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
          type="email"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-neutral font-bold mb-2">
          Phone Number
        </label>
        <input
          {...register("phoneNumber", {
            required: "Phone number is required",
            pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" },
          })}
          type="tel"
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your phone number"
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-neutral font-bold mb-2">Address</label>
        <textarea
          {...register("address", { required: "Address is required" })}
          className="w-full px-3 py-2 border rounded"
          placeholder="Enter your address"
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-neutral font-bold mb-2">
          Preferred Contact Method
        </label>
        <select
          {...register("contactMethod", {
            required: "Please select a contact method",
          })}
          className="w-full px-3 py-2 border rounded">
          <option value="">Select...</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
        {errors.contactMethod && (
          <p className="text-red-500 text-sm">{errors.contactMethod.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-neutral font-bold mb-2">
          <input
            {...register("agreeTerms", {
              required: "You must agree to the terms",
            })}
            type="checkbox"
            className="mr-2"
          />
          I agree to the terms and conditions
        </label>
        {errors.agreeTerms && (
          <p className="text-red-500 text-sm">{errors.agreeTerms.message}</p>
        )}
      </div>

      <div className="mt-2 mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
        You need to agree to the terms and conditions to submit the form.
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-neutral text-white px-4 py-2 rounded">
        Submit Adoption Form
      </button>
    </form>
  );
};

export default AdoptionForm;
