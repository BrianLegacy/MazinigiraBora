import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom'
import video from '../images/bgvideo.mp4';

// <div className='video'>
// <video className='videoTag' autoPlay loop >
//   <source src={video} type='video/mp4' />
// </video>
// </div>



const Home = () => {
  return (
    <div className='mna'>



      <div className='home'>



        <div className='home1'>

          <h2 className='centretext'>Wondering how to send your parcel<br></br> or who to trust with your parcel
            worry no more,<br></br> we at send-it provide you with the ultimate guarantee <br></br>
            and efficiency in parcel delivery</h2>


          <Link to="/Login" className="btmary">SIGN IN</Link>


        </div>
        <div className='bot'>
          <iframe title="bot" src="https://web.powerva.microsoft.com/environments/Default-84c31ca0-ac3b-4eae-ad11-519d80233e6f/bots/new_bot_75a6a6eb82a04246b8b279880bbf2d30/webchat" frameborder="0" style={{ width: '100%', height: '100%' }}></iframe>
        </div>

      </div>
    </div>
  );
};

export default Home;