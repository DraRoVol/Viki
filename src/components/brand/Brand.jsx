import React from 'react';
import { face, faceFox } from './imports';
import './brand.css';

const Brand = () => {
  return (
    <div className='gem__brand section__padding'>
      <div>
        <img src={faceFox} alt='logo' />
      </div>
      <div>
        <img src={face} alt='logo' />
      </div>
      <div>
        <img src={faceFox} alt='logo' />
      </div>
      <div>
        <img src={face} alt='logo' />
      </div>
      <div>
        <img src={faceFox} alt='logo' />
      </div>
    </div>
  )
}

export default Brand