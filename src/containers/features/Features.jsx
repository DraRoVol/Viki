import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora qui aliquid perferendis soluta asperiores.'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora qui aliquid perferendis soluta asperiores.'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora qui aliquid perferendis soluta asperiores.'
  },
  {
    title: 'Really boy law county',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora qui aliquid perferendis soluta asperiores.'
  }
]

const Features = () => {
  return (
    <div className='gem__features section__padding' id='features'>
      <div className='gem__features-heading'>
        <h1 className='gradient__text'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, cum!
        </h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='gem__features-container'>
        {featuresData.map((item, index) => 
          <Feature title={item.title} text={item.text} key={item.title + index} />
        )}
      </div>
    </div>
  )
}

export default Features;