import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatViki.css';

const WhatViki = () => {
  return (
    <div className='gem__viki section__margin' id='viki'>
      <div className='gem__viki-feature'>
        <Feature title='What is Viki' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error tempora exercitationem beatae eveniet labore?' />
      </div>
      <div className='gem__viki-heading'>
        <h1 className='gradient__text'>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem, ipsum dolor.</p>
      </div>
      <div className='gem__viki-container'>
        <Feature title='Chatbots' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error tempora exercitationem beatae eveniet labore?' />
        <Feature title='Knowledgebase' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error tempora exercitationem beatae eveniet labore?' />
        <Feature title='Education' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat error tempora exercitationem beatae eveniet labore?' />
      </div>
    </div>
  )
}

export default WhatViki;