import React, { useState } from 'react';
import "./App.css"

const CardSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLoveClick = () => {
    const groups = document.getElementsByClassName("card-group");
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      setActiveIndex(nextIndex);
    });
  };

  const handleHateClick = () => {
    const groups = document.getElementsByClassName("card-group");
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "before";

    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
      nextGroup.dataset.status = "active";
      setActiveIndex(nextIndex);
    });
  };

  return (
    <div className="card-swiper">
      <div className="card-groups">
        <div className="card-group" data-index="0" data-status={activeIndex === 0 ? "active" : "after"}>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
        </div>
        <div className="card-group" data-index="1" data-status={activeIndex === 1 ? "active" : "unknown"}>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
        </div>
        <div className="card-group" data-index="2" data-status={activeIndex === 2 ? "active" : "unknown"}>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
          <div className="little-card card"></div>
          <div className="big-card card"></div>
        </div>
      </div>
      <div className="card-swiper-buttons">
        <button id="hate-button" onClick={handleHateClick}>
          <i className="fa-solid fa-x"></i>
        </button>
        <button id="love-button" onClick={handleLoveClick}>
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default CardSwiper;
