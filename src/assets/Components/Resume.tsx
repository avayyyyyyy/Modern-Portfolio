import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdDescription } from "react-icons/md"; // Import the resume icon from React Icons

const Resume = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href =
      "https://drive.google.com/file/d/1RDYuPDlHVpZJaFOwhMiVuzo5KM_KbqE0";
  }, [navigate]);

  return (
    <div className="h-screen animate-pulse w-screen flex flex-col items-center justify-center bg-gray-100">
      <MdDescription className="text-6xl text-gray-700 mb-4" />
      <p className="md:text-lg text-sm  font-medium text-gray-800">
        Redirecting you to Shubhankit's resume...
      </p>
    </div>
  );
};

export default Resume;
