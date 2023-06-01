import React from "react";
import people from '../../assets/people.png'
import picture from '../../assets/picture1.webp'
import "./header.css";

const Header = () => {
  return (
    <div className="gem__header section__padding" id="home">
      <div className="gem__header-content">
        <h1 className="gradient__text">Let's Build amazing with Viki OpenAI</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          obcaecati eum iusto numquam nulla maxime, a iure tenetur facere quo.
          Nisi maxime voluptatum veritatis voluptate voluptas nihil eos quam
          amet!
        </p>
        <div className="gem__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className='gem__header-content__people'>
          <img src={people} alt="people" />
          <p>Викуха хухрюха</p>
        </div>
        <div className='gem__header-image'>
          <img src={picture} alt='illustration' />
        </div>
      </div>
    </div>
  );
};

export default Header;
