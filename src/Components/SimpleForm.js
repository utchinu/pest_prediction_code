import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import pest11 from '../Images/pest11.png';
import pest12 from '../Images/pest12.png';
import crop11 from '../Images/crop11.png';
import crop12 from '../Images/crop12.png';
import Resources from './Chatbot/Resources';
import General_crop from './Chatbot/General_crop';
import General_pest from './Chatbot/General_pest';
import Specific_crop from './Chatbot/Specific_crop';
import Specific_pest from './Chatbot/Specific_pest';


class Review1 extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props.pest.value);
    if(this.props.pest.value=="all"){
      return(<div> 
                <img src={pest11} width="100" height="150" /> 
                <img src={crop11} width="100" height="150" /> 
            </div> 
      );
    }
    else{
      return(<div> 
                <img src={pest12} width="100" height="150" /> 
                <img src={crop12} width="100" height="150" /> 
            </div> 
      );
    }    

  }
}
 


class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start_date: '',
      end_date: '',
      city: '',
      district:'',
      crop:'',
      pest:'',
      flag: '0',
      state:'',
      count:0,
    };
  }

  componentWillMount() {
      var c=this.state.count;
      this.setState({
        count:c+1,
      });
      console.log(this.state.count);
    const { steps } = this.props;
    console.log(steps);
    const { start_date, end_date,city,district,crop,pest,state } = steps;

    var sd=new Date(start_date.value);
    sd=sd.getFullYear()+"-"+(sd.getMonth()+1)+"-"+sd.getDate();
    console.log(state.value);

    
    var ed=new Date(end_date.value);
    console.log(ed);
    ed=ed.getFullYear()+"-"+(ed.getMonth()+1)+"-"+ed.getDate();
    console.log(ed);

    this.setState({ start_date, end_date,city,district,crop,pest });
    var url="http://127.0.0.1:8080/home_page?date1=" + sd + "T00:00:00Z&date2="+ed+"T00:00:00Z&crop="+crop.value+"&pest="+pest.value+"&state_name="+state.value+"&district_name="+district.value ; 
    fetch(url).then
       (res=>res.json()).then( 
        res=>  {
            console.log(res);
            var sum=0;
            for(var x in res){
                console.log(x);
                for(var y in res[x]) {
                    sum=sum+res[x][y][0];
                    console.log(sum);
                   // console.log(y);
                   // this.add_location_in_map_new(y,res[x][y][0],res[x][y][1],res[x][y][2]);
                    //sum=sum+res[x][y];
                    //console.log(y);
                    //this.add_locations_in_map(y,res[x][y]);
                }
            }
            this.setState({
              count:sum,
            });
           //this.add_locations_in_map(res);
       }).
       catch(err => {
           console.log(err);
       }); 
  }

  render() {
    const { start_date, end_date, state,district,crop,pest } = this.state;
    return(
      <div>
        {this.state.count}
      </div>
    );
}
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      val:0,
    };
  }

  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            user: true,
            trigger: '2',
          },
          {
            id: '2',
            message: 'Hii,Welcome to the chatbot',
            trigger: 'start',
          },
          {
            id: 'start',
            message: 'Choose the type of query',
            trigger: 'option',
          },
          {
            id: 'option',
            options: [
              { value: 'name', label: 'Crop related', trigger: 'crop_related' },
              { value: 'gender', label: 'pest realated', trigger: 'pest_related' },
              { value: 'resources', label: 'some useful resources', trigger: 'resources' },
            ],
          },

          {
            id: 'resources',
            component: <Resources  />,
            asMessage: true,
            trigger: '7',              
          },

          {
            id: 'crop_related',
            message: 'Choose one of the following type of query',
            trigger: 'crop_options',
          },
          {
            id: 'crop_options',
            options: [
              { value: 'name', label: 'General_statistics', trigger: 'general_crop' },
              { value: 'gender', label: 'Query about a specific crop', trigger: 'specific_crop' },
            ],
          },
          {
            id: 'general_crop',
            component: <General_crop />,
            asMessage: true,
            trigger: '7',  
          },
          {
            id: 'specific_crop',
            message: 'Here are the top 10 crops: choose one',
            trigger: 'specific_crop1',
          },
          {
            id: 'specific_crop1',
            trigger: 'specific_crop2',
            id: 'specific_crop1',
            options: [
              { value: 'Paddy (Dhan)', label: 'Paddy (Dhan)', trigger: 'specific_crop2' },
              { value: 'Brinjal', label: 'Brinjal', trigger: 'specific_crop2' },
              { value: 'Cotton (Kapas)', label: 'Cotton (Kapas)', trigger: 'specific_crop2' },
              { value: 'Sugarcane (Noble Cane)', label: 'Sugarcane (Noble Cane)', trigger: 'specific_crop2' },
              { value: 'Wheat', label: 'Wheat', trigger: 'specific_crop2' },
              { value: 'Chillies', label: 'Chillies', trigger: 'specific_crop2' },
              { value: 'Bhindi(Okra/Ladysfinger)', label: 'Bhindi(Okra/Ladysfinger)', trigger: 'specific_crop2' },
              { value: 'Tomato', label: 'Tomato', trigger: 'specific_crop2' },
              { value: 'Mango', label: 'Mango', trigger: 'specific_crop2' },
              { value: 'Onion', label: 'Onion', trigger: 'specific_crop2' },
            ],
          },
          {
            id: 'specific_crop2',
            component: <Specific_crop />,
            asMessage: true,
            trigger: '7',  
          },   
          {
            id: 'pest_related',
            message: 'Choose one of the following type of pest query',
            trigger: 'pest_options',
          },
          {
            id: 'pest_options',
            options: [
              { value: 'name', label: 'General_statistics', trigger: 'general_pest' },
              { value: 'gender', label: 'Query about a specific pest', trigger: 'specific_pest' },
            ],
          },
          {
            id: 'general_pest',
            component: <General_pest />,
            asMessage: true,
            trigger: '7',  
          },
          {
            id: 'specific_pest',
            message: 'Here are the top15 pests,choose one:',
            trigger: 'specific_pest1',
          },
          {
            id: 'specific_pest1',
            options: [
              { value: 'insect', label: 'insect', trigger: 'specific_pest2' },
              { value: 'dbm', label: 'dbm', trigger: 'specific_pest2' },
              { value: 'fruit&shootborer', label: 'fruit&shootborer', trigger: 'specific_pest2' },
              { value: 'caterpiller', label: 'caterpiller', trigger: 'specific_pest2' },
              { value: 'whitefly', label: 'whitefly', trigger: 'specific_pest2' },
              { value: 'aphid', label: 'aphid', trigger: 'specific_pest2' },
              { value: 'thrip', label: 'thrip', trigger: 'specific_pest2' },
              { value: 'stemborer', label: 'stemborer', trigger: 'specific_pest2' },
              { value: 'termite', label: 'termite', trigger: 'specific_pest2' },
              { value: 'mealybug', label: 'mealybug', trigger: 'specific_pest2' },
              { value: 'leaffolder', label: 'leaffolder', trigger: 'specific_pest2' },
              { value: 'hopper', label: 'hopper', trigger: 'specific_pest2' },
              { value: 'fruitfly', label: 'fruitfly', trigger: 'specific_pest2' },
              { value: 'podborer', label: 'podborer', trigger: 'specific_pest2' },
              { value: 'cutworm', label: 'cutworm', trigger: 'specific_pest2' },
            ],
          },
          {
            id: 'specific_pest2',
            component: <Specific_pest />,
            asMessage: true,
            trigger: '7',  
          },    

          {
            id: '7',
            message: 'Do u want to repeat the query?',
            trigger: 8,
          },
          {
            id:'8',
            options: [
                { value: 'Yes', label: 'Yes', trigger: '2' },
                { value: 'No', label: 'No', trigger: '9' },
              ],
          },
          {
            id: '9',
            message: 'Thanks for interacting!',
            trigger:1,
          },

        ]}
      />
    );
  }
}

export default SimpleForm;