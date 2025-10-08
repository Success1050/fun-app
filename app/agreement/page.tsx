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
            <div className="bg-blue-600 px-6  py-4 flex items-center justify-between">
              <div className="flex items-center ">
                <div className="bg-white rounded">
                  <img
                    src="/atlass.jpg"
                    alt="Logo"
                    className="w-[80px] h-auto text-blue-600"
                  />
                  {/* <svg
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
                  </svg> */}
                </div>
                <h1 className="text-2xl font-bold text-white">Atlass</h1>
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
                  <p>
                    This agreement ("Agreement") is a legal contract between you
                    ("Borrower," "you," or "your") and Atlas Finance ("Company,"
                    "we," "us," or "our"). It governs your application for and
                    use of any loan products and services offered by Atlas
                    Finance. By submitting a loan application, accepting a loan
                    offer, or using our services, you acknowledge that you have
                    read, understood, and agree to be bound by all the terms and
                    conditions outlined below. If you do not agree to these
                    terms, you must not proceed with your loan application or
                    accept any loan funds.
                  </p>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Definitions
                  </h3>

                  <ul className="list-disc pl-5 space-y-2">
                    <p>
                      "Loan" refers to the sum of money we lend to you under the
                      terms specified in your Loan Agreement. "Loan Agreement"**
                      refers to the specific contract provided to you upon loan
                      approval, which details the exact loan amount, Annual
                      Percentage Rate (APR), repayment schedule, fees, and other
                      specific terms. In the event of any conflict, the terms of
                      your individual Loan Agreement will supersede these
                      general Terms and Conditions. "APR" (Annual Percentage
                      Rate) represents the annual cost of your loan, including
                      interest and any applicable fees, expressed as a
                      percentage.
                    </p>
                  </ul>

                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2. Services Offered
                    </h3>
                    <p>
                      Atlas Finance provides short-term, small-dollar
                      installment loans. All loans are subject to approval based
                      on our internal credit policies, eligibility criteria, and
                      applicable state and federal laws.
                    </p>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      3. Loan Application
                    </h3>
                    <p>
                      By applying for a loan, you represent and warrant that all
                      information you provide is true, accurate, current, and
                      complete. You authorize Atlas Finance to obtain consumer
                      reports, credit reports, and other information about you
                      from third parties, including credit bureaus and
                      employers, to evaluate your application, verify your
                      identity, and prevent fraud. Submission of an application
                      does not guarantee approval. We reserve the right to deny
                      any application for any reason permitted by law.
                    </p>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      4. Loan Terms & Repayment
                    </h3>
                    <p>
                      The specific terms of your loan, including the principal
                      amount, APR, finance charges, total repayment amount, and
                      due dates, will be explicitly detailed in your Loan
                      Agreement. You agree to repay the full loan amount, plus
                      all applicable finance charges and fees, according to the
                      payment schedule in your Loan Agreement. Payments will be
                      automatically debited from the checking account you
                      designated during the application process on the scheduled
                      due dates. It is your responsibility to ensure sufficient
                      funds are available.
                    </p>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      5.Fees and Charges
                    </h3>
                    <p>
                      Late Fees: If your payment is not received in full by its
                      due date, a late fee may be charged as permitted by your
                      Loan Agreement and state law. Returned Payment/NSF Fees: A
                      fee will be charged for any payment that is returned due
                      to insufficient funds, a closed account, or any other
                      reason. Prepayment: You may prepay your loan in full at
                      any time without any prepayment penalty.
                    </p>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      6. Borrower's Responsibilities
                    </h3>
                    <p>
                      Late Fees: If your payment is not received in full by its
                      You agree to: Provide accurate and truthful information.
                      Repay your loan on time as agreed. Inform us immediately
                      of any change in your name, address, email, telephone
                      number, or bank account information. Notify us immediately
                      if you dispute any debit charge.
                    </p>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      7.Default
                    </h3>
                    <p>
                      You will be considered in default if you: Fail to make a
                      payment when due. Provide false or misleading information.
                      Become insolvent, file for bankruptcy, or pass away. Upon
                      default, we may accelerate your loan, making the entire
                      outstanding balance immediately due and payable. We may
                      also report your default to consumer reporting agencies,
                      which may negatively impact your credit score.
                    </p>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      8. Communications
                    </h3>
                    <p>
                      You consent to receive all communications, disclosures,
                      and notices from us electronically via email or through
                      our online portal. Paper copies are available upon
                      request.
                    </p>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      9. Privacy
                    </h3>
                    <p>
                      Our use of your personal information is governed by our
                      Privacy Policy, which is incorporated into these Terms by
                      reference. Please review it to understand our practices.
                    </p>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      10. Limitation of Liability
                    </h3>
                    <p>
                      To the fullest extent permitted by law, Atlas Finance
                      shall not be liable for any indirect, incidental, special,
                      consequential, or punitive damages resulting from your use
                      of our services or your loan.
                    </p>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      11. Governing Law
                    </h3>
                    <p>
                      This Agreement and your Loan Agreement shall be governed
                      by and construed in accordance with the laws of the state
                      in which Atlas Finance is headquartered and the state
                      where you reside, as well as applicable federal laws.
                    </p>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      12. Changes to Terms
                    </h3>
                    <p>
                      We reserve the right to modify these Terms and Conditions
                      at any time. Changes will be effective upon posting to our
                      website. Your continued use of our services after such
                      changes constitutes your acceptance of the new terms.
                    </p>
                  </div>
                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      13. Contact Information
                    </h3>
                    <p>
                      For questions about these Terms or your loan, please
                      contact us: Atlas Finance Website: www.atlasfinancecc.com
                      Email: info@atlasfinancecc.com Phone: (361) 857-7633
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
