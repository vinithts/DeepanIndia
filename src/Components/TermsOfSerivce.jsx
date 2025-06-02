import React, { useEffect } from 'react';

const TermsOfServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div style={{ backgroundColor: "#f9f3fe" }}>
      <div className="container mx-auto mt-20" style={{ padding: "50px" }}>
        <h1 className="text-3xl font-bold mb-4 border-b-2 pb-2">Terms and Conditions</h1>
        <p className="mb-4"  style={{color: "#49326b"}}>
          These Terms and Conditions ("Terms") govern your use of our services. By accessing our website and using our services, you agree to be bound by these Terms.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6">Use of Our Services</h2>
        <p className="mb-2" style={{color: "#49326b"}}>
          1. You agree to use our services for lawful purposes only and in a manner that does not infringe the rights of others.
        </p>
        <p className="mb-2" style={{color: "#49326b"}}>
          2. The content provided on our platform is for personal, non-commercial use. You may not modify, distribute, or reproduce any material without prior consent.
        </p>
        <p className="mb-2" style={{color: "#49326b"}}>
          3. Unauthorized use of our services, including but not limited to hacking, data mining, or any fraudulent activity, is strictly prohibited.
        </p>
        <p className="mb-2" style={{color: "#49326b"}}>
          4. We reserve the right to suspend or terminate access to our services if any violations of these Terms are detected.
        </p>

        <h2 className="text-2xl font-semibold mt-6">User Responsibilities</h2>
        <p className="mb-2" style={{color: "#49326b"}}>
          1. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
        </p>
        <p className="mb-2" style={{color: "#49326b"}}>
          2. You agree to provide accurate and up-to-date information when registering for our services.
        </p>
        <p className="mb-2" style={{color: "#49326b"}}>
          3. You must not share, transfer, or sell your account to another party without our consent.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Changes to Terms</h2>
        <p className="mb-4" style={{color: "#49326b"}}>
          We may update these Terms from time to time. Continued use of our services after changes signifies your acceptance of the revised Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Limitation of Liability</h2>
        <p className="mb-4" style={{color: "#49326b"}}>
          We are not liable for any direct, indirect, incidental, or consequential damages resulting from your use of our services. We do not guarantee that our services will be uninterrupted or error-free.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Governing Law</h2>
        <p className="mb-4" style={{color: "#49326b"}}>
          These Terms are governed by and interpreted in accordance with the laws of chennai. Any disputes arising under these Terms will be resolved in the applicable courts.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Contact Information</h2>
        <p className="mb-4" style={{color: "#49326b"}}>
          If you have any questions about these Terms, please contact us at enquiry@deepanindia.com.
        </p>
      </div>
    </div>
  );
};

export default TermsOfServices;
