import React from "react";
import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10 text-white">
      {/* Image */}
      <div className="w-full flex justify-center overflow-hidden">
        <Image
          src="/images/Handshake-Depositphotos.png" 
          alt="Contact Image"
          layout="responsive" 
          width={600} 
          height={150}
          className="object-cover" 
        />
      </div>

      {/* Thank you message */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold font-prociono">
          Thank you for taking the time to visit!
        </h2>
        <p className="mt-4 text-lg">
          {`Feel free to reach out through this form for any inquiries or
          opportunities. I'd be happy to connect!`}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
