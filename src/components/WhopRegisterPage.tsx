
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import or fetch your plans.json data here
import plans from "../plans.json"; // adjust this import according to your project setup

const countries = [
  "India", "United States", "Japan", 
  "United Kingdom", "Germany", "Australia", "Canada"
];

const RegistrationForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    institute: "",
    country: "",
    registrationType: "Registration Only",
    presentationType: "Listener/Delegate",
    accommodationNights: "1 Night",
    guestCount: "1 Guest",
    captcha: "",
  });
  const [captchaValue] = useState("ED3KB8");
  const [error, setError] = useState("");

  // Helper: Convert dropdown values to numbers for matching
  const getNightsNumber = (value) => {
    const num = value.match(/\d+/);
    return num ? parseInt(num[0], 10) : 0;
  };

  const getGuestsNumber = (value) => {
    const num = value.match(/\d+/);
    return num ? parseInt(num[0], 10) : 0;
  };

  // Find the matching plan from JSON
  const selectedPlan = plans.find(plan =>
    plan.registrationtype === formData.registrationType &&
    plan.presentationtype === formData.presentationType &&
    plan.noofnights === getNightsNumber(formData.accommodationNights) &&
    plan.noofguests === getGuestsNumber(formData.guestCount)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captcha !== captchaValue) {
      setError("Invalid CAPTCHA code.");
      return;
    }
    setError("");
    // Pass planid if found
    onFormSubmit({ ...formData, planid: selectedPlan ? selectedPlan.planid : undefined });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      institute: "",
      country: "",
      registrationType: "Registration Only",
      presentationType: "Listener/Delegate",
      accommodationNights: "1 Night",
      guestCount: "1 Guest",
      captcha: "",
    });
    setError("");
  };

  return (
    <div className="w-full max-w-xl p-8 space-y-6 bg-white border border-gray-200 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800">Conference Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name *</label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone *</label>
          <input type="text" name="phone" required value={formData.phone} onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email *</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Institute/University *</label>
          <input type="text" name="institute" required value={formData.institute} onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Country *</label>
          <select name="country" required value={formData.country} onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
            <option value="">Choose Country</option>
            {countries.map(c =>
              <option key={c} value={c}>{c}</option>
            )}
          </select>
        </div>

        {/* Registration Type */}
        <div>
          <span className="block text-sm font-medium text-gray-700">Select Registration Type *</span>
          <div className="flex space-x-4 mt-1">
            <label className="flex items-center">
              <input type="radio" name="registrationType" value="Registration Only" checked={formData.registrationType === "Registration Only"} onChange={handleChange} className="mr-2"/>
              Registration Only
            </label>
            <label className="flex items-center">
              <input type="radio" name="registrationType" value="Registration and Accommodation" checked={formData.registrationType === "Registration and Accommodation"} onChange={handleChange} className="mr-2"/>
              Registration and Accommodation
            </label>
          </div>
        </div>
        {/* Presentation Type */}
        <div>
          <span className="block text-sm font-medium text-gray-700">Select Presentation Type *</span>
          <div className="flex flex-wrap gap-4 mt-1">
            {['Speaker', 'Poster', 'Listener/Delegate', 'Sponsor', 'Student', 'Exhibitor'].map(type => (
              <label key={type} className="flex items-center">
                <input type="radio" name="presentationType" value={type} checked={formData.presentationType === type} onChange={handleChange} className="mr-2"/>
                {type}
              </label>
            ))}
          </div>
        </div>
        {/* Accommodation */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Accommodation Type</label>
          <select name="accommodationNights" value={formData.accommodationNights} onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
            <option>1 Night</option>
            <option>2 Nights</option>
            <option>3 Nights</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Guests</label>
          <select name="guestCount" value={formData.guestCount} onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
            {[...Array(11).keys()].map(i => (
              <option key={i}>{i} Guest{ i !== 1 ? "s" : "" }</option>
            ))}
          </select>
        </div>

        {/* Payment Summary from selectedPlan */}
        <div className="border-t border-dashed pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Summary</h3>
          {selectedPlan ? (
            <>
              <div className="flex justify-between">
                <span>Registration Fee:</span>
                <span>{selectedPlan.registrationfee}</span>
              </div>
              <div className="flex justify-between">
                <span>Processing Fee:</span>
                <span>{selectedPlan.processingfee}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Amount Payable:</span>
                <span>{selectedPlan.totalfee}</span>
              </div>
              <div className="flex justify-between">
                <span>Plan ID:</span>
                <span>{selectedPlan.planid}</span>
              </div>
            </>
          ) : (
            <p className="text-sm text-red-600 mb-1">No plan found for this combination.</p>
          )}
        </div>

        {/* CAPTCHA */}
        <div className="flex items-center space-x-4 mt-4">
          <div className="bg-gray-100 px-4 py-2 font-mono text-lg tracking-widest rounded">{captchaValue}</div>
          <input type="text" name="captcha" placeholder="Enter the code" value={formData.captcha} onChange={handleChange}
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm w-1/2" />
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}

        {/* Buttons */}
        <div className="flex justify-between gap-4 mt-4">
          <button type="button" onClick={handleReset}
            className="flex-1 py-2 px-4 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold">
            Reset Form
          </button>
          <button type="submit"
            className="flex-1 py-2 px-4 rounded-md bg-teal-600 hover:bg-teal-700 text-white font-semibold">
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};

const WhopRegisterPage = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (data) => {
    // You can now access selected planid from data.planid and pass for payment
    navigate('/checkout', { state: { registrationData: data } });
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <RegistrationForm onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default WhopRegisterPage;

