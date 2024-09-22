// SocialMediaLinks.js
import React from 'react';
import { socialMediaData } from '../constants/data';
import style from '../styles';

const SocialMediaLinks = () => {
  return (
    <div>
    <div className={`${style.SocialMediaLinksContainer}`}>

      {
          socialMediaData.map((data, index) => (

            <div key={index} className={`${style.SocialMediaLinksWrapper}`}>

                 <img src={data.icon} className={`${style.SocialMediaLinksIcon} text-white`}/>
          
                <span className={`${style.SocialMediaLinksTitle}`}>{data.title}</span>

                <p className={`${style.SocialMediaLinksDescription}`} >
                    {data.description}
                </p>
            </div>
          ))
    
    }
    </div>
    </div>
  );
};

export default SocialMediaLinks;