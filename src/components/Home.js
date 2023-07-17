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
            <h3>As a newly graduated Full Stack Developer I am seeking for a position where I could leverage and apply my new earned skills being HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, progressive web apps, computer science, MongoDB, MySQL, Git, and more while contributing my full willingness to grow as a team player to best benefit an organization where I, as an employee could take advantage of gaining more experience and knowledge as a developer.</h3>
            <h3>
              Here is where I will share with you my projects from bootcamp.
            </h3>
          </div>
        </div >
<div className="projcontainer{">
        <Proj1 />
        <Proj2 />
        <Proj3 />
        </div>
      </div>
    );
}