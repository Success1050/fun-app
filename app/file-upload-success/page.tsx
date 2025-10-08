"use client";

import React from "react";
import { CheckCircle, Mail, Clock, Phone, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ApplicationSuccess() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-4 animate-bounce">
                <CheckCircle
                  className="w-16 h-16 text-green-500"
                  strokeWidth={2.5}
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Application Submitted!
            </h1>
            <p className="text-green-50 text-lg">
              Your account registration has been received successfully
            </p>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Application Number */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6 text-center">
              <p className="text-sm text-gray-600 mb-1">
                Application Reference Number
              </p>
              <p className="text-2xl font-bold text-blue-600">
                GTV-{new Date().getFullYear()}-
                {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Please save this number for future reference
              </p>
            </div>

            {/* What's Next */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-blue-600" />
                What Happens Next?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Application Review
                    </h3>
                    <p className="text-sm text-gray-600">
                      Our team will review your application and verify all
                      submitted documents within 2-3 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Email Confirmation
                    </h3>
                    <p className="text-sm text-gray-600">
                      You'll receive an email with your account details and next
                      steps once your application is approved.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Account Activation
                    </h3>
                    <p className="text-sm text-gray-600">
                      Follow the instructions in your email to activate your
                      account and start banking with GTV Bank.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Need Help?</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span>support@gtvbank.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>+1 (800) 123-4567</span>
                </div>
                <p className="text-gray-500 mt-2">
                  Our customer support team is available 24/7 to assist you with
                  any questions.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md flex items-center justify-center space-x-2">
                <Home
                  className="w-5 h-5"
                  onClick={() => router.replace("/agreement")}
                />
                <span>Return to Home</span>
              </button>
            </div>

            {/* Footer Note */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                This is an automated confirmation. Please do not reply to this
                page.
                <br />
                Check your email for further instructions.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Didn't receive a confirmation email? Check your spam folder or
            contact support.
          </p>
        </div>
      </div>
    </div>
  );
}
