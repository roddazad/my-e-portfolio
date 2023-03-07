import React from 'react';
import myImage from '../images/me.jpg'

export default function MyImage() {
    return (
        <div>
            <img src={myImage} alt="A man with a cowboy hat" />
          </div>
    );
}