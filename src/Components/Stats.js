import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../Images/heat_map1.png'
import img2 from '../Images/aphid.png'
import img3 from '../Images/insect.png'
import img4 from '../Images/dbm.png';
import img5 from '../Images/fruit_shoot_borer.png';
import img6 from '../Images/caterpiller.png';
import s_fruit from '../Images/seasonality_fruit_shoot_borer.png';
import s_whitefly from '../Images/seasonalty_whitfly_rajisthan.png';
import sarima_up from '../Images/whitefly_uttar_pradesh.png';
import sarima_haryana from '../Images/insect_haryana.png';
import Image from '../Images/e.jpg';

const mystyle ={
  paddingTop: "50px",
  paddingRight: "30px",
  paddingBottom: "50px",
  paddingLeft: "80px",
  backgroundImage: `url(${Image})`,
  //backgroundImage: `url("https://wallpaperaccess.com/full/427852.jpg")`,
  //backgroundRepeat: 'no-repeat',
  //backgroundPosition: 'center',
  //backgroundSize:'cover',
  //backgroundColor: 'rgba(0, 0, 0, 0.1)',

  //backgroundColor : '#BECD72',
};


export class Stats extends Component {
  render() {
    return (
      <div style={mystyle}>
      <div className='container-fluid' style={{'alignSelf':"center"}} > 
       <Carousel interval={1000} keyboard={false} pauseOnHover={true}>
         <Carousel.Item style={{'height':"700px"}} >
          <img style={{'height':"700px"}} className="d-block w-100" src={img1}></img>
        <Carousel.Caption style={{'color':"Blue",'fontSize':"25px"}}> Heat map of district severity</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':"700px"}} >
          <img style={{'height':"700px"}} className="d-block w-100" src={img2}></img>
        <Carousel.Caption style={{'color':"Blue",'fontSize':"25px"}}>Aphid infection on various crops </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':"700px"}} >
          <img style={{'height':"700px"}} className="d-block w-100" src={img3}></img>
        <Carousel.Caption style={{'color':"Blue",'fontSize':"25px"}}> Insect infection on various crops</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':"700px"}} >
          <img style={{'height':"700px"}} className="d-block w-100" src={img4}></img>
        <Carousel.Caption style={{'color':"Blue",'fontSize':"25px"}}> Dbm infection on various crops</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':"700px"}} >
          <img style={{'height':"700px"}} className="d-block w-100" src={img5}></img>
        <Carousel.Caption style={{'color':"Blue",'fontSize':"25px"}}> fruit_shoot_borer infection on various crops</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':"700px"}} >
          <img style={{'height':"700px"}}  className="d-block w-100" src={img6}></img>
        <Carousel.Caption style={{'color':"Blue",'fontSize':"25px"}}> Caterpiller infection on various crops</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':"700px"}} >
          <img style={{'height':"700px"}}  className="d-block w-100" src={s_whitefly}></img>
        <Carousel.Caption style={{'color':"Blue",'fontSize':"25px"}}> Displaying seasonality for whitefly in Rajisthan</Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{'height':"700px"}} >
          <img style={{'height':"700px"}}  className="d-block w-100" src={s_fruit}></img>
        <Carousel.Caption style={{'color':"Blue",'fontSize':"25px"}}> Displaying seasonality for Fruit and shoot borer</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height':"700px"}} >
          <img style={{'height':"700px"}}  className="d-block w-100" src={sarima_up}></img>
        <Carousel.Caption style={{'color':"Blue",'fontSize':"25px"}}> Displaying the sarima prediction for whitefly in UTTAR PRADESH(MSE:15.437)</Carousel.Caption>
        </Carousel.Item>  
        <Carousel.Item style={{'height':"700px"}} >
          <img style={{'height':"700px"}}  className="d-block w-100" src={sarima_haryana}></img>
        <Carousel.Caption style={{'color':"Blue",'fontSize':"25px"}}> Displaying the sarima prediction for insect in HARYANA(MSE:5.012)</Carousel.Caption>
        </Carousel.Item>

       </Carousel>

      </div>
      </div>
    )
  }
}

export default Stats
