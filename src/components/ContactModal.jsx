import React, { useState, useEffect } from "react";
import { COLORS, BORDER_RADIUS } from "../constants/theme";

const ContactModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "Jake Thompson",
    company: "Corporation.inc",
    email: "info@corporat",
    workType: [],
    projectDescription: "",
  });

  useEffect(() => {
    if (isOpen) {
      // Reset visibility state to trigger animation
      //setIsVisible(false);
      // Small delay to trigger animation from off-screen
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const workTypes = [
    "Product Design",
    "UI/UX",
    "Illustration/Graphic",
    "Other/not yet sure",
    "Branding",
    "Motion Design",
    "Development",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      workType: prev.workType.includes(type)
        ? prev.workType.filter((t) => t !== type)
        : [...prev.workType, type],
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed z-150 w-[510px] h-[100vh] top-0 right-0 ${isVisible ? "animate-contact-modal-enter" : "opacity-0 translate-x-full"
        }`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-[37px] right-[40px] w-[72px] h-[72px] bg-white rounded-[20px] flex justify-center items-center hover:scale-110 transition-transform duration-200 cursor-pointer z-10"
        style={{ borderRadius: BORDER_RADIUS.small }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.03125 12.6992L12.6985 1.03196"
            stroke="black"
            strokeWidth="2.0625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6985 12.6985L1.03125 1.03125"
            stroke="black"
            strokeWidth="2.0625"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* Modal Container */}
      <div
        className="flex flex-col relative w-full h-full border-[2px] bg-[#F5F5F5] overflow-y-auto"
        style={{
          borderColor: COLORS.border,
          padding: "62px 40px",
        }}
      >
        <p className="text-[48px] h-[34px]">
          Get in touch
        </p>
        <div className="flex flex-col pt-[40px]">
          <div className="flex gap-[20px] pb-[26px]">
            {/* Name Field */}
            <div>
              <label
                className="block mb-2 text-sm"
                style={{
                  fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
                  color: COLORS.primary.dark,
                }}
              >
                Your Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-[1px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#7b61ff]"
                  style={{
                    borderColor: COLORS.border,
                    fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
                  }}
                />
                {formData.name && (
                  <svg width="24" className="absolute top-[10px] right-[10px]" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                )}
              </div>
            </div>

            {/* Company Field */}
            <div>
              <label
                className="block mb-2 text-sm"
                style={{
                  fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
                  color: COLORS.primary.dark,
                }}
              >
                Your Company
              </label>
              <input
                type="text"
                name="company"
                // value={formData.company}
                placeholder="Corporation.inc"
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-[1px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#7b61ff]"
                style={{
                  borderColor: COLORS.border,
                  fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
                }}
              />
            </div>
          </div>
          {/* Email Field */}
          <div>
            <label
              className="block mb-2 text-sm"
              style={{
                fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
                color: COLORS.primary.dark,
              }}
            >
              Email Address
            </label>
            <div className="relative pb-[36px]">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-[1px] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#7b61ff]"
                style={{
                  borderColor: COLORS.border,
                  fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
                }}
              />
              {formData.email && (
                <svg width="24" className="absolute top-[10px] right-[10px]" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </div>

          {/* Work Type Checkboxes */}
          <div className="pb-[40px]">
            <label
              className="block mb-3 text-sm font-medium"
              style={{
                fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
                color: COLORS.primary.dark,
              }}
            >
              Type of Work
            </label>
            <div className="grid grid-cols-2 gap-2">
              {workTypes.map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-2 cursor-pointer"
                  style={{
                    fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={formData.workType.includes(type)}
                    onChange={() => handleCheckboxChange(type)}
                    className="w-4 h-4 rounded border-[1px]"
                    style={{ borderColor: COLORS.border }}
                  />
                  <span className="text-sm">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label
              className="block mb-2 text-sm"
              style={{
                fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
                color: COLORS.primary.dark,
              }}
            >
              Tell us about your project
            </label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              placeholder="Details, deadlines etc."
              rows="4"
              className="w-full px-4 py-3 border-[1px] rounded-[20px] focus:outline-none focus:ring-2 focus:ring-[#7b61ff] resize-none"
              style={{
                borderColor: COLORS.border,
                fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
              }}
            />
          </div>

          <div
            className="flex justify-end text-sm pt-[17px] pb-[14px]"
            style={{
              fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
              color: "#6b7280",
            }}
          >
            Not yet sure?
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 justify-between">
            <button
              className="w-[168px] h-[72px] justify-between bg-white border-[1px] rounded-[20px] flex items-center gap-0 hover:bg-gray-50 transition-colors"
              style={{
                borderColor: COLORS.border,
                fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
              }}
            >
              <span style={{ display: "flex", flexGrow: 1, color: COLORS.primary.dark, justifyContent: "center", alignItems: "center" }}>Submit</span>
              <div
                className="w-[72px] h-full bg-[#1c1737] rounded-[20px] flex items-center justify-center hover:bg-[#2a2245] transition-colors"
                style={{ borderRadius: BORDER_RADIUS.small }}
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle submit action
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L12 4M12 4H4M12 4V12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            <div className="flex items-center gap-2 w-[141px] h-[72px]">
              <button
                className="w-full h-full bg-white border-[1px] rounded-[20px] hover:bg-gray-50 transition-colors"
                style={{
                  borderColor: COLORS.border,
                  fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
                  color: COLORS.primary.dark,
                }}
              >
                Book a Call
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

