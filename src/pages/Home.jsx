import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import { COLORS, BORDER_RADIUS } from "../constants/theme";
import Union from "../assets/imgs/Union.png";
import showUp from "../assets/imgs/image 496.png";
import Table from "../components/Table";
import logo1 from "../assets/imgs/Group 47.png";
import chatgpt from "../assets/imgs/ChatGPT.png";
import rank from "../assets/imgs/rank.png";
import com from "../assets/imgs/Mask group.png";
import icons from "../assets/imgs/Mask group (1).png";
import phone from "../assets/imgs/Mask group (2).png";
import hand from "../assets/imgs/Ranketta.png";
import single_logo from "../assets/imgs/single-logo.png";
import Modal from "../components/Modal";
import ContactModal from "../components/ContactModal";
import Header from "../components/Header";
import { COLOR_PALETTE } from "../constants/colorPalette";
import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useContactModal } from "../hooks/useContactModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const scrollRef = useRef(null);
  const [isContactModalOpen, setIsContactModalOpen, handleScroll] = useContactModal();

  // Initialize custom hooks
  useHorizontalScroll(scrollRef);
  useScrollAnimation();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };


  const handleScrollToContact = () => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollLeft = container.scrollWidth;
  };

  const handleScrollToHero = () => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollLeft = 0;
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setHeaderFixed(false);
  };


  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleModalClose} />
      <PerfectScrollbar
        onScrollX={handleScroll}
        containerRef={(ref) => {
          scrollRef.current = ref;
        }}
      >
        <div className="total-container">
          <Header
            isModalOpen={isModalOpen}
            isFixed={headerFixed}
            onBackClick={() => { }}
            onLogoClick={handleScrollToHero}
            onContactClick={handleScrollToContact}
          />
          <div className="flex flex-row" style={{ width: 'max-content' }}>

            <section className="hero-section w-[1095px] h-[100vh] flex flex-col pl-[80px] pt-[322px] scroll-animate flex-shrink-0">
              <div className="flex flex-row gap-[80px] z-10">
                <div className="flex flex-col gap-[40px]">
                  <p className=" font-normal text-wrap text-color w-[410px] h-[121px] leading-[20px]">
                    We worked with Spaace to bring this immersive brand website for
                    their newly released gamification NFT marketplace.
                    <br />
                    From creative and production, we took their raw brand material
                    and take it into a whole new level of storytelling in this
                    interactive web experience.
                  </p>
                  <div className="w-[224px] h-[72px] border-[1px] rounded-[20px] border-white flex justify-between items-center">
                    <p className="px-[20px] text-color">Launch Project</p>
                    <button className="w-[72px] h-[72px] rounded-[20px] bg-color flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="40px"
                        height="40px"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <line x1="7" x2="17" y1="17" y2="7" />
                        <polyline points="10 7 17 7 17 14" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="text-color flex flex-col gap-[20px] w-[109px] h-[64px]">
                  <div className="subtitle letter_hover font-bold">Services</div>
                  <div>
                    <p className="leading-[100%] letter_hover font-bold">
                      Logo Design
                    </p>
                    <p className="letter_hover font-bold">
                      Brand Identify
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-[40px] text-color w-[111px] h-[206px]">
                  <div className="flex flex-col gap-[20px]">
                    <p className="letter_hover font-bold">Client</p>
                    <p className="font-normal letter_hover" style={{ overflowWrap: "normal", wordBreak: "normal" }}>Vojtěch Oravec</p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="letter_hover font-bold">Location</p>
                    <p className="font-normal letter_hover">Europe</p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <p className="letter_hover font-bold">Timing</p>
                    <p className="font-normal letter_hover">1 Week</p>
                  </div>

                </div>
              </div>
              <div className="pt-[123px]">
                <svg
                  width="820"
                  height="124"
                  viewBox="0 0 820 124"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_0_1)">
                    <path
                      d="M86.1677 120.636H51.6998L40.2112 103.4L34.4679 94.7848V94.7808L40.2112 86.1658L45.9565 77.5509L51.6998 68.9319L63.1864 86.1658L68.9337 94.7808L74.6791 103.4L86.1677 120.636Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M120.635 34.4624C120.635 37.4394 120.26 40.3273 119.549 43.0814C118.76 46.1354 117.567 49.0293 116.022 51.6963C112.997 56.9309 108.634 61.2941 103.399 64.3198C98.3305 67.2543 92.4433 68.9302 86.165 68.9302H51.6971L45.9558 60.3153V60.3112L43.0822 56.0048L40.2085 51.6943L34.4713 43.0793H86.167C90.9274 43.0793 94.786 39.2187 94.786 34.4603C94.786 29.702 90.9254 25.8454 86.167 25.8454L22.9783 25.8474L5.74255 -0.00146484H86.167C92.4453 -0.00146484 98.3325 1.67856 103.401 4.60898C108.636 7.63465 112.999 11.9978 116.024 17.2325C117.569 19.8994 118.766 22.7934 119.551 25.8474C120.26 28.6015 120.637 31.4853 120.637 34.4624H120.635Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M38.6539 68.932L21.6649 94.785H0L5.74532 86.166L17.2339 68.932L0 43.0832V43.0791L21.3532 43.0832L38.6539 68.932Z"
                      fill="#F5F5F5"
                    />
                  </g>
                  <path
                    d="M404.096 120.653V0.000488281H425.912V67.764L453.514 36.3614H481.445L447.398 74.3751L482.933 120.653H455.332L425.912 81.3168V120.653H404.096Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M576.814 55.3612V36.3543H592.02V12.3892H613.837V36.3543H632.678V55.3612H613.837V120.646H592.02V55.3612H576.814Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M638.394 55.3612V36.3543H653.599V12.3892H675.416V36.3543H694.258V55.3612H675.416V120.646H653.599V55.3612H638.394Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M813.5 23.3171L809.04 12.5181H811.284L814.175 19.913L817.08 12.5181H819.325L814.85 23.3171H813.5ZM808.35 23.3171V12.5181H810.8V23.3171H808.35ZM817.564 23.3171V12.5181H820V23.3171H817.564ZM800.75 23.3171V13.4571H803.185V23.3171H800.75ZM797.463 14.5576V12.5181H806.472V14.5576H797.463Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M164.452 120.582V36.2907H184.781V43.3976C189.574 37.1171 196.846 33.481 204.945 33.481C208.581 33.481 212.382 34.3073 216.183 35.7948L207.093 56.6197C204.449 55.4628 202.796 54.967 200.317 54.967C191.061 54.967 186.268 61.7433 186.268 74.8002V120.582H164.452Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M316.101 120.66V36.3688H336.43V42.3188C341.553 36.6993 349.652 33.5591 359.238 33.5591C378.906 33.5591 392.624 47.4423 392.624 67.4409V120.66H370.807V71.077C370.807 61.1603 364.196 53.7229 354.775 53.7229C345.355 53.7229 337.917 61.1603 337.917 70.4159V120.66H316.101Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M304.682 36.3625V120.654H284.022V113.216C276.585 119.497 266.998 123.133 256.586 123.133C232.29 123.133 212.788 103.3 212.788 78.5081C212.788 53.7165 232.29 33.8833 256.586 33.8833C266.998 33.8833 276.585 37.5194 284.022 43.7999V36.3625H304.682ZM235.761 78.5081C235.761 92.3913 246.174 102.969 259.396 102.969C272.453 102.969 282.865 92.3913 282.865 78.5081C282.865 64.6248 272.453 54.0471 259.396 54.0471C246.174 54.0471 235.761 64.6248 235.761 78.5081Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M568.311 105.944C559.716 117.018 546.329 123.133 530.628 123.133C503.192 123.133 483.028 104.291 483.028 78.8386C483.028 53.5513 502.861 33.8833 528.314 33.8833C553.105 33.8833 571.12 52.8902 571.12 77.847C571.12 80.3261 570.955 83.4664 570.625 86.6067H506.993C509.142 96.8538 517.571 103.465 530.132 103.465C538.726 103.465 544.841 100.325 550.957 93.0525L568.311 105.944ZM507.654 69.2526H547.816C546.494 59.6665 538.891 53.2207 528.148 53.2207C517.075 53.2207 510.299 59.9971 507.654 69.2526Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M791.843 36.3625V120.654H771.183V113.216C763.746 119.497 754.16 123.133 743.747 123.133C719.451 123.133 699.949 103.3 699.949 78.5081C699.949 53.7165 719.451 33.8833 743.747 33.8833C754.16 33.8833 763.746 37.5194 771.183 43.7999V36.3625H791.843ZM722.922 78.5081C722.922 92.3913 733.335 102.969 746.557 102.969C759.614 102.969 770.026 92.3913 770.026 78.5081C770.026 64.6248 759.614 54.0471 746.557 54.0471C733.335 54.0471 722.922 64.6248 722.922 78.5081Z"
                    fill="#F5F5F5"
                  />
                  <defs>
                    <clipPath id="clip0_0_1">
                      <rect width="120.652" height="120.652" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="w-[718.64px] h-[718.64px] absolute left-[376px] top-[162px]">
                <img src={Union} className="w-full h-full" />
              </div>
            </section>
            <section className="flex pt-[159px] gap-[45px] w-[2170px] h-[100vh] scroll-animate flex-shrink-0">
              <div className="min-w-[1200px] minW h-[720px]">
                <img src={showUp} className="w-full h-full" />
              </div>
              <Table />
            </section>
            <section className="pl-[80px] relative scroll-animate h-[100vh] flex-shrink-0">


              <div className="w-[1470px] h-[960px] bg-color rounded-tl-[40px] rounded-bl-[40px]">
                <button
                  onClick={() => {
                    handleOpenModal();
                    setHeaderFixed(true);
                  }}
                  className="w-[72px] h-[72px] rounded-[20px] bg-[#7b61ff] ml-[1115px] mt-[170px] hover:scale-110 transition-transform duration-200 cursor-pointer"
                  style={{ borderRadius: BORDER_RADIUS.small }}
                  aria-label="Open modal"
                >
                  <div className="w-full h-full flex justify-center items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M21 9V3H15"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 15V21H9"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 3L13.5 10.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.5 13.5L3 21"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <div className="px-[80px] w-full h-[270px]">
                  <img src={logo1} className="w-full h-full" />
                </div>
                <div className="flex gap-[80px] pt-[160px] pl-[80px]">
                  <p className="font-medium text-[28px]">Logo Construction</p>
                  <p className="small-text w-[530px] h-[44px] font-normal ">
                    The logo is built on a precise geometric grid to ensure visual
                    balance and consistency across all applications. Its
                    construction reflects clarity, strength, and a modern identity
                    system.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-color scroll-animate w-[1470px] h-[100vh] flex-shrink-0">
              <div className="flex w-[1470px] h-[960px]">
                {COLOR_PALETTE.map((color, index) => (
                  <div
                    key={index}
                    className={`flex flex-col h-full ${color.width}`}
                  >
                    <div className={color.top_class}>
                      <div className="font-normal text-[13px] color_css pt-[570px] pl-[32px]">
                        {color.text1.map((w, i) => (
                          <p
                            key={i}
                            className={`flex text-[13px] flex-col ${color.top_text_color}`}
                          >
                            {w}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className={color.bottom_class}>
                      <p
                        className={`pt-[32px] pl-[32px] text-[13px] font-normal color_css  ${color.bottom_text_color}`}
                      >
                        {color.text2}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="w-[488px] pt-[242px] px-[80px] gap-[40px] flex flex-col items-end bg-white">
                  <p className="font-medium text-[28px] w-full text-right tracking-[-5%]">
                    Brand Palette
                  </p>
                  <p className="font-normal text-[16.29px] text-right leading-[16.21px] tracking-[-0.3px]">
                    Bold. Minimal. Built for contrast.
                    <br />
                    Our palette uses three core colors — Medium
                    <br />
                    State Blue, Dark Purple, and White to keep the
                    <br />
                    brand clear, powerful, and future-facing.
                    <br />
                    Maximum impact, zero distractions.
                  </p>
                </div>
              </div>
            </section>
            <section
              className="bg-gradient-to-l scroll-animate w-[1315px] h-[100vh] h-[960px] flex-shrink-0"
              style={{
                background: `linear-gradient(to left, ${COLORS.primary.dark}, ${COLORS.primary.white})`,
              }}
            >
              <div className="w-[1315px] h-[960px] px-[80px] pt-[162px] flex gap-[21px] scroll-animate">
                <div className="flex flex-col gap-[18px]">
                  <Link
                    to="#"
                    className="w-[673px] h-[250px] overflow-hidden rounded-[10px] image-link-hover"
                  >
                    <img src={rank} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex gap-[21px] w-[673px] h-[220px]">
                    <Link to="#" className="w-[186px] h-full image-link-hover overflow-hidden rounded-[10px]">
                      <img src={icons} className="w-full h-full object-cover" />
                    </Link>
                    <Link
                      to="#"
                      className="w-[466px] h-full rounded-[10px] overflow-hidden image-link-hover"
                    >
                      <img src={chatgpt} className="w-full h-full object-cover" />
                    </Link>
                  </div>
                  <div className="flex gap-[21px] w-[673px] h-[212px]">
                    <Link to="#" className="w-[440px] h-full image-link-hover overflow-hidden rounded-[10px]">
                      <img src={phone} className="w-full h-full object-cover" />
                    </Link>
                    <Link
                      to="#"
                      className="rounded-[10px] overflow-hidden w-[212px] h-full image-link-hover"
                    >
                      <img src={single_logo} className="w-full h-full object-cover" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-[18px]">
                  <Link to="#" className="w-[460px] h-[388px] image-link-hover overflow-hidden rounded-[10px]">
                    <img src={com} className="w-full h-full object-cover" />
                  </Link>
                  <Link to="#" className="w-[460px] h-[313px] image-link-hover overflow-hidden rounded-[10px]">
                    <img src={hand} className="w-full h-full object-cover" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </PerfectScrollbar>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Home;
