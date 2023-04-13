import React, { Component } from 'react'
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


export class About extends Component {
  render() {
    return (
      <div style={mystyle}>
        <h4> India is an agriculture based economy. Indian agriculture sector ac-
counts for around 20 per cent of India’s gross domestic product (GDP).
In recent years the growth of agricultural pest disasters has become
one of the major problems in agricultural crops. About 30-35 per-
cent of the annual crop yield in India gets wasted because of pests.
Predicting and controlling disasters of agricultural pests thus attracts
great research interest. The migration of agricultural pests is not only
related to time domain, but also to space. As a result, for effective
prediction of changes in the dynamics of insect populations a ma-
chine learning model can be useful. Our Pest prediction model, is a
time series model, for forecasting pest infestation in time domain. The application shows in various visual formats,
different information related to pest infestation in India, like queries
made for a particular pest and/or crop, pest forecast, a dialogue sys-
temx ,most dangerous pest of past years, district severity etc. </h4>
      </div>
    )
  }
}

export default About
