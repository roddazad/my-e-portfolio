import React from 'react';
import MyImage from './MyImage';
import Proj1 from './Proj1';
import Proj2 from './Proj2';
import Proj3 from './Proj3';



export default function Home() {
    return (
        <div className="container">
        <div className="img-box border">
          <div>
            <MyImage />
          </div>
          <div>
            <h2>Hi everyone, my name is Rodd Azad!</h2>
            <p>I've been enjoying Fullstack web Development courses so far.</p>
            <p>
              Here is where I will share with you my projects from bootcamp.
            </p>
          </div>
        </div>

        <Proj1 />
        <Proj2 />
        <Proj3 />
      </div>
    );
}