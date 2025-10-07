"use client";

import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const page2 = () => {
  const router = useRouter();
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
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
              <button className="text-white hover:text-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <div className="flex items-center space-x-2 text-blue-600 mb-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Terms and Conditions
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  Please read and accept our terms to continue with account
                  registration
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6 max-h-96 overflow-y-auto border border-gray-200">
                <div className="space-y-4 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">
                    Code we may provide you with:
                  </p>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>
                        GTV BANK ACCOUNT NUMBER, PASSWORD and ACCOUNT PIN:
                      </strong>{" "}
                      you choose to identify yourself when you use our online
                      service.
                    </li>
                    <li>
                      <strong>YOU, YOUR and YOURSELF:</strong> refer to the
                      person who has entered into this agreement with us.
                    </li>
                  </ul>

                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2. USING THE ONLINE SERVICE
                    </h3>
                    <p>
                      These conditions apply to your use of our online service.
                      We may change these terms and conditions from time to
                      time. By continuing to use the service, you agree to be
                      bound by the updated terms.
                    </p>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      3. SECURITY AND CONFIDENTIALITY
                    </h3>
                    <p>
                      You must take all reasonable precautions to keep your
                      account details, password, and PIN secure. Do not share
                      these with anyone. You are responsible for all
                      transactions made using your credentials.
                    </p>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      4. YOUR RESPONSIBILITIES
                    </h3>
                    <p>
                      You must ensure that all information provided is accurate
                      and up to date. You must notify us immediately of any
                      unauthorized access to your account or any security
                      breach.
                    </p>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      5. PRIVACY AND DATA PROTECTION
                    </h3>
                    <p>
                      We collect and process your personal data in accordance
                      with applicable data protection laws. Your information
                      will be used to provide banking services and may be shared
                      with regulatory authorities as required by law.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => router.push("/form-page")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition duration-200 shadow-md"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>I Accept & Proceed to Verification</span>
                </button>

                <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition duration-200 border-2 border-gray-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Decline</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page2;
