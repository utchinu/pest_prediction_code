import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import pest11 from '../Images/pest11.png';
import pest12 from '../Images/pest12.png';
import crop11 from '../Images/crop11.png';
import crop12 from '../Images/crop12.png';



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
                //var sum=0;
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
            message: 'Enter the start date of your query (MM/DD/YY)?',
            trigger: 'start_date',
          },
          {
            id: 'image',
            component: <Review1 />,
            asMessage: true,
            end: true,
          },
          {
            id: 'start_date',
            user: true,
            trigger: '2',
            validator: (value) => {
                var dateWrapper = new Date(value);
                if(isNaN(dateWrapper.getDate())==0){
                    return true;
                }
                else{
                    return  value +'is not a valid date' ;
                }
            },
          },
          {
            id: '2',
            message: 'Enter the end date of your query(MM/DD/YY)',
            trigger: 'end_date',
          },
          {
            id: 'end_date',
            user: true,
            trigger: '3',
            validator: (value) => {
                var dateWrapper = new Date(value);
                if(isNaN(dateWrapper.getDate())==0){
                    return true;
                }
                else{
                    return  value +'is not a valid date' ;
                }
            },            
          },
          {
            id: '3',
            message: 'Enter the state name for your query?',
            trigger: 'state',
          },
          {
            id: 'state',
            user: true,
            trigger: '4',
          },
          {
            id: '4',
            message: 'Enter the district name for your query?',
            trigger: 'district',
          },
          {
            id: 'district',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'Enter the crop for your query?',
            trigger: 'crop',
          },
          {
            id: 'crop',
            user: true,
            trigger: '6',
          },
          {
            id: '6',
            message: 'Enter the pest name for your query?',
            trigger: 'pest',
          },
          {
            id: 'pest',
            user: true,
            trigger: 'result',
          },
          {
              id: 'result',
              component: <Review  />,
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
                { value: 'Yes', label: 'Yes', trigger: '1' },
                { value: 'No', label: 'No', trigger: '9' },
              ],
          },
          {
            id: '9',
            message: 'Thanks for interacting!',
            end:true,
          },

        /*  {
            id: 'gender',
            options: [
              { value: 'male', label: 'Male', trigger: '5' },
              { value: 'female', label: 'Female', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'How old are you?',
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            trigger: '7',
            validator: (value) => {
              if (isNaN(value)) {
                return 'value must be a number';
              } else if (value < 0) {
                return 'value must be positive';
              } else if (value > 120) {
                return `${value}? Come on!`;
              }

              return true;
            },
          },
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'update',
          },
          {
            id: 'update',
            message: 'Would you like to update some field?',
            trigger: 'update-question',
          },
          {
            id: 'update-question',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'update-yes' },
              { value: 'no', label: 'No', trigger: 'end-message' },
            ],
          },
          {
            id: 'update-yes',
            message: 'What field would you like to update?',
            trigger: 'update-fields',
          },
          {
            id: 'update-fields',
            options: [
              { value: 'name', label: 'Name', trigger: 'update-name' },
              { value: 'gender', label: 'Gender', trigger: 'update-gender' },
              { value: 'age', label: 'Age', trigger: 'update-age' },
            ],
          },
          {
            id: 'update-name',
            update: 'name',
            trigger: '7',
          },
          {
            id: 'update-gender',
            update: 'gender',
            trigger: '7',
          },
          {
            id: 'update-age',
            update: 'age',
            trigger: '7',
          },
          {
            id: 'end-message',
            message: 'Thanks! Your data was submitted successfully!',
            end: true,
          },
          */
        ]}
      />
    );
  }
}

export default SimpleForm;