import React,{ Component } from 'react';
import MyMap from './MyMap';
import SimpleForm from './SimpleForm';
import '../App.css';
import Image from '../Images/e.jpg';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form, Button, FormGroup, FormControl, ControlLabel } from "../react-bootstrap";

var crops= ["all","none"];
var pests=["all","none"];
var states=["all","none","ANDHRA PRADESH",
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


const mystyle ={
  paddingTop: "50px",
  paddingRight: "30px",
  paddingBottom: "50px",
  paddingLeft: "80px",
  backgroundImage: `url(${Image})`,
};

class MapHelper extends Component {

  constructor(){
    super();
    this.state = {
      start_date : '2015-02-04',
      end_date : '2015-12-04',
      crop: 'Orange',
      pest: 'all',
      state: 'RAJASTHAN',
      district: 'all',
      t_start_date: '2015-02-04',
      t_end_date: '2015-12-04',
      t_crop: 'Orange',
      t_pest: 'all',
      t_state: 'RAJASTHAN',
      t_district: 'all',
      flag:0,
      show_chat:0,
    };
  }

  onInputChange = (e) => {
    if(e.target.id.localeCompare("district")==0){
      this.setState({
        t_district: e.target.value
      });
    }
    if(e.target.id.localeCompare("start_date")==0){
      this.setState({
        t_start_date: e.target.value
      });
    }
    if(e.target.id.localeCompare("end_date")==0){
      //console.log('aa');
      this.setState({
        t_end_date: e.target.value
      });
    }
    if(e.target.id.localeCompare("crop")==0){
      console.log('aa');
      this.setState({
        t_crop: e.target.value
      });
    }
    if(e.target.id.localeCompare("state")==0){
      //console.log('aa');
      this.setState({
        t_state: e.target.value
      });
    }
    if(e.target.id.localeCompare("pest")==0){
      //console.log('aa');
      this.setState({
        t_pest: e.target.value
      });
    }
    console.log(this.state.start_date);
    /*let name="t_"+e.target.name;
    let value=e.target.value;
    this.setState({
      [name]:value,
    });*/

  }

  clear_state = ()=>{
    this.setState(
      {
        start_date : null,
        end_date : null,
        crop: 'all',
        pest: 'all',
        state: 'all',
        district: 'all',
        t_start_date: null,
        t_end_date: null,
        t_crop: 'all',
        t_pest: 'all',
        t_state: 'all',
        t_district: 'all',
      }
    );
  }

  update_state = (e) =>{
    console.log(this.state.t_start_date)
    this.setState({
      start_date : this.state.t_start_date,
      end_date : this.state.t_end_date,
      crop: this.state.t_crop,
      pest: this.state.t_pest,
      state: this.state.t_state,
      district: this.state.t_district,      
    });
    e.preventDefault();
  }

  componentDidMount(){
    var url="http://127.0.0.1:8080/column_details?pest=1";
    fetch(url).then(res => res.json()).then(res=>{
       for(var x in res){
           pests.push(res[x][0]);
       }
       var url1="http://127.0.0.1:8080/column_details?crop=1";
       fetch(url1).then(temp => temp.json()).then(temp =>{
           for(var x in temp){
            crops.push(temp[x][0]);
           }
           this.setState({
               flag:1,
           })
       });

    });
  }

  startChat(){
    this.setState({
      showChat:1,
    });
  }

  hideChat(){
    this.setState({
      showChat:0,
    });
  }

  render(){ 
    if(this.state.flag==0){
        return(<h1>Loading</h1>);
    }
    else{
        return (
            <div style={mystyle}>

            <div class="row">
            <div class="col">
            <form onSubmit={this.update_state}>

              <div class="form-row"> 
                {/*<label for="start_date"><p><span style={{color:"red"}}>Start Date</span> </p></label> */}
                <label for="start_date">Start Date</label>
                <input type="date" class="form-control" id="start_date" value={this.state.t_start_date} placeholder="Enter Date" onChange={this.onInputChange}/>
              </div>
              <div class="form-row">
                <label for="end_date">End Date</label>
                <input type="date" class="form-control" id="end_date" value={this.state.t_end_date} placeholder="Enter Date" onChange={this.onInputChange}/>
              </div>
              <div class="form-row">
              <label for="crop">Crop</label> 
                    <select class="form-control" id="crop" value={this.state.t_crop} onChange={this.onInputChange}>
                    { crops.map((e) =>(
                      <option value={e} >{e}</option>
                      ))
                    }
                    </select>
              </div>
              <div class="form-row">
              <label>Pest</label> 
                    <select class="form-control" id="pest" value={this.state.t_pest} onChange={this.onInputChange}>
                    { pests.map((e) =>(
                      <option value={e} >{e}</option>
                      ))
                    }
                    </select>
              </div>
              <div class="form-row">
              <label>State</label> 
                    <select class="form-control" id="state" value={this.state.t_state} onChange={this.onInputChange}>
                    { states.map((e) =>(
                      <option value={e} >{e}</option>
                      ))
                    }
                    </select>
              </div>
              <div class="form-row">
                  <label>District</label> 
                  <input type="text" class="form-control" id="district" value={this.state.t_district} onChange={this.onInputChange}/>       
              </div>
              <br/>
              <div class="form-row">
              <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
            <br/>
            </div>
            <div class="col-md-8">
            
            <MyMap  start_date= {this.state.start_date} end_date={this.state.end_date} crop={this.state.crop} pest={this.state.pest} 
                state={this.state.state} district={this.state.district} />
            </div>
            <div className = "bot">
            <div style ={{display: this.state.showChat ? "" : "none"}}>
            <div class="temp" style={{ backgroundColor: "rgba(245, 245, 245, 0.4)"}} >
            <SimpleForm></SimpleForm>
            </div>
            </div>      
            {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
            <div>
             {!this.state.showChat 
              ? <button class="btn btn-deep-purple" onClick={() => this.startChat()}>click to chat... </button> 
              : <button class="btn btn-deep-purple" onClick={() => this.hideChat()}>click to hide... </button>}
            </div>
            </div> 
            </div>
            </div>

        );
     }
    }
}

export default MapHelper;
