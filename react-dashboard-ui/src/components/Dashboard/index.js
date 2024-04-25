import { useState } from "react";

import { MdLibraryBooks } from "react-icons/md";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import SideBar from "../SideBar";
import Header from "../Header";

import "./index.css";
import ReactChrono from "../ReactChrono";

const slickData = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dchxbofyt/image/upload/v1714025548/image1_elyjlw.png",
    title: "State of Markets",
    description:
      "The market capitalization in Indian stocks crossed around US55 trillion in January",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dchxbofyt/image/upload/v1714025554/image2_cz67lk.png",
    title: "The Central Capex Surge",
    description:
      "The last few years have seen a substantial step up in capital",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dchxbofyt/image/upload/v1714025565/image3_oco15d.png",
    title: "Direct taxes and Business cycle",
    description:
      "The share of direct taxes in total tax collections have increased.",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dchxbofyt/image/upload/v1714025577/image4_uxc53c.png",
    title: "Banking monitor",
    description:
      "Credit growths have become broadly stable in the last few months",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dchxbofyt/image/upload/v1714028284/image5_v5ia1a.jpg",
    title: "Markets",
    description:
      "The market capitalization in Indian stocks crossed around US55 trillion in January",
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dchxbofyt/image/upload/v1714028292/image6_lnaeo4.jpg",
    title: "Capital",
    description:
      "The market capitalization in Indian stocks crossed around US55 trillion in January",
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dchxbofyt/image/upload/v1714028300/image7_n4v1s6.jpg",
    title: "Taxes",
    description:
      "The market capitalization in Indian stocks crossed around US55 trillion in January",
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dchxbofyt/image/upload/v1714028311/image8_b572dq.jpg",
    title: "Banking",
    description:
      "The market capitalization in Indian stocks crossed around US55 trillion in January",
  },
];

const Dashboard = () => {
  const [isSideBarOpen, setSideBarView] = useState(false);

  const [startIndex, setStart] = useState(0);
  const [endIndex, setEnd] = useState(4);

  const onClickOfNext = () => {
    if (startIndex >= 0 && endIndex < slickData.length) {
      setStart((prevState) => prevState + 4);
      setEnd((prevState) => prevState + 4);
    }
  };

  const onClickOfPrevious = () => {
    if (startIndex >= 4) {
      setStart((prevState) => prevState - 4);
      setEnd((prevState) => prevState - 4);
    }
  };

  const slicedData = slickData.slice(startIndex, endIndex);

  const width = isSideBarOpen ? "calc(100vw - 140px)" : "calc(100vw - 56px)";

  const toggleSideBarView = () => {
    setSideBarView(!isSideBarOpen);
  };

  return (
    <div className="dashboard">
      <SideBar
        isSideBarOpen={isSideBarOpen}
        toggleSideBarView={toggleSideBarView}
      />

      <div className="container" style={{ width: width }}>
        <Header />
        <div className="saved-libraries">
          <div>
            <MdLibraryBooks className="icon" size={20} color="#00ace6" />
            <h4 className="heading">My Saved Library 1</h4>
            <p>dd-mm-yyyy</p>
          </div>
          <div>
            <MdLibraryBooks className="icon" size={20} color="#00ace6" />
            <h4 className="heading">My Saved Library 1</h4>
            <p>dd-mm-yyyy</p>
          </div>
          <div>
            <MdLibraryBooks className="icon" size={20} color="red" />
            <h4 className="heading">My Saved Library 1</h4>
            <p>dd-mm-yyyy</p>
          </div>
          <div>
            <MdLibraryBooks className="icon" size={20} color="orange" />
            <h4 className="heading">My Saved Library 1</h4>
            <p>dd-mm-yyyy</p>
          </div>
          <div>
            <MdLibraryBooks className="icon" size={20} color="#00cc99" />
            <h4 className="heading">My Saved Library 1</h4>
            <p className="date">dd-mm-yyyy</p>
          </div>
        </div>
        <div className="flex">
          <div className="slick-details">
            <div className="slick-container">
              <button
                type="button"
                className="previous-next-btn"
                onClick={onClickOfPrevious}
              >
                <FaArrowAltCircleRight size={10} />
              </button>

              {slicedData.map((each) => {
                const { id, title, description, imageUrl } = each;
                return (
                  <div className="slick-item" key={id}>
                    <img src={imageUrl} className="image" alt={title} />
                    <div className="content">
                      <h2 className="heading-1">{title}</h2>
                      <p className="content-description">{description}</p>
                    </div>
                  </div>
                );
              })}

              <button
                type="button"
                className="previous-next-btn"
                onClick={onClickOfNext}
              >
                <FaArrowAltCircleLeft size={10} />
              </button>
            </div>
            <div className="button-container">
              <button
                type="button"
                className="view-more-btn"
                onClick={onClickOfNext}
              >
                View More
              </button>
            </div>
          </div>
          <ReactChrono />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
