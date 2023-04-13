import React, { Component } from 'react'
import Image from '../Images/e.jpg';
import Prediction from './Prediction';
import Button from 'react-bootstrap/Button';

const mystyle ={
    paddingTop: "50px",
    paddingRight: "30px",
    paddingBottom: "50px",
    paddingLeft: "80px",
    backgroundImage: `url(${Image})`,
  };

  var states=["ANDHRA PRADESH",
  "ARUNACHAL PRADESH",
  "ASSAM",
  "BIHAR",
  "CHHATTISGARH",
  "GOA",
  "GUJARAT",
  "HARYANA",
  "HIMACHAL PRADESH",
  "JAMMU AND KASHMIR",
  "JHARKHAND",
  "KARNATAKA",
  "KERALA",
  "MADHYA PRADESH",
  "MAHARASHTRA",
  "MANIPUR",
  "MEGHALAYA",
  "MIZORAM",
  "NAGALAND",
  "ODISHA",
  "PUNJAB",
  "RAJASTHAN",
  "SIKKIM",
  "TAMIL NADU",
  "TELANGANA",
  "TRIPURA",
  "UTTAR PRADESH",
  "UTTARAKHAND",
  "WEST BENGAL",
  ];

  var pests=pests=["insect","dbm","fruit&shootborer","caterpiller","whitefly","aphid","thrip","stemborer","termite","mealybug","leaffolder","hopper","fruitfly","podborer","cutworm","borer","jassid","bug","beetle","leafhopper"]
  

export class Prediction_helper extends Component {

    constructor(){
        super();
        this.state = {
            pest: 'aphid',
            t_pest: 'aphid',
            location: 'UTTAR PRADESH',
            t_location: 'UTTAR PRADESH',
        };
    }

    onInputChange = (e) => {
        if(e.target.id.localeCompare("pest")==0){
            this.setState({
              t_pest: e.target.value
            });
          }

          if(e.target.id.localeCompare("location")==0){
            this.setState({
              t_location: e.target.value
            });
          }
    }

    get_location(){
      this.setState({
        t_location:'PUNJAB',
      })
    }

    update_state = (e) =>{
        for(var i=0;i<4000000000;i++){
          var a=1;
        }

        this.setState({
          pest:this.state.t_pest,
          location:this.state.t_location,      
        });
        e.preventDefault();
      }
        
    render() {
        return (
          <div style={mystyle}>
          <div class="row">
            <div class="col">
            <form onSubmit={this.update_state}>

            <label>Pest</label> 
                    <select class="form-control" id="pest" value={this.state.t_pest} onChange={this.onInputChange}>
                    { pests.map((e) =>(
                      <option value={e} >{e}</option>
                      ))
                    }
                    </select>
              <label>State</label> 
                    <select class="form-control" id="location" value={this.state.t_location} onChange={this.onInputChange}>
                    { states.map((e) =>(
                      <option value={e} >{e}</option>
                      ))
                    }
                    </select>
              <div class="form-row">
              <Button variant="success" onClick={() => this.get_location()}>Get current location</Button>
              </div>
              <div class="form-row">
              <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
            </div>
            <div className="col-md-8">
                <Prediction location={this.state.location} pest={this.state.pest}/>
            </div>
            </div>
            </div>
        )
    }
}


              