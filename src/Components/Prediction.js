import React, { Component } from 'react'
import img1 from '../Images/img7.png'
import { Line } from 'react-chartjs-2';


  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Probability",
          },

        },
      ],
    },
  };



export class Prediction extends Component {

  constructor(props){
    console.log(props);
    super(props);
    this.state ={
        labels:['1', '2', '3', '4', '5', '6'],
        datasets:[],
        flag:0,
    };
  } 

    clear_states(){
      this.setState({
        labels:[],
        datasets:[],
        flag:0,
      });
    }

    get_month_val(month){
      if(month.localeCompare("JAN")==0){
        return(0);
      }
      else if(month.localeCompare("FEB")==0){
        return(1);
      }
      else if(month.localeCompare("MAR")==0){
        return(2);
      }
      else if(month.localeCompare("APR")==0){
        return(3);
      }
      else if(month.localeCompare("MAY")==0){
        return(4);
      }
      else if(month.localeCompare("JUN")==0){
        return(5);
      }
      else if(month.localeCompare("JUL")==0){
        return(6);
      }
      else if(month.localeCompare("AUG")==0){
        return(7);
      }
      else if(month.localeCompare("SEP")==0){
        return(8);
      }
      else if(month.localeCompare("OCT")==0){
        return(9);
      }   
      else if(month.localeCompare("NOV")==0){
        return(10);
      }
      else if(month.localeCompare("DEC")==0){
        return(11);
      }
    }

    convert_to_month(year){
      
      var year1=year.substring(4,8);
      var month=year.substring(0,3);
      var month1=this.get_month_val(month);
      var year2=0
      for(var i=0;i<year1.length;i++){
        year2=(year2*10+(year1[i]-'0'));
      }
      year2=year2+(month1/12);
      console.log(year2);
      return(year2);
    }

    add_label1(x_axis){
      var label1=[];
      for(var i=0;i<x_axis.length;i++){
        label1.push(this.convert_to_month(x_axis[i]));
      }
      this.setState({
        labels:label1
      })
    }

    add_label(x_axis){
      console.log(x_axis)
      this.setState({
        labels:x_axis
      })
    }

    add_to_dataset(y_axis,lower_bnd,upper_bnd){
      console.log(y_axis);

      var upper_bound=[],lower_bound=[];

      for(var i=0;i<48;i++){
        upper_bound.push(y_axis[i]);
        lower_bound.push(y_axis[i]);
      }
      for(var i=0;i<12;i++){
        upper_bound.push(upper_bnd[i]);
        lower_bound.push(lower_bnd[i]);
      }
      console.log(upper_bound);
      console.log(lower_bound);

      this.setState({
        datasets: [
          {
            label: 'Upper bound',
            data: upper_bound,
            fill: '+1',
            backgroundColor: 'rgb(255, 99, 132,0.2)',
            borderColor: 'rgba(0,0,0)',
            borderWidth:'1',
          },
          {
              label: 'predicted value',
              data: y_axis,
              fill: '+1',
              backgroundColor: 'rgb(255, 99, 132,0.2)',
              borderColor: 'rgba(255,0,0)',
              borderWidth:'1',
          },
          {
            label: 'Lower bound',
            data: lower_bound,
            fill: false,
            backgroundColor: 'rgb(100, 200, 103)',
            borderColor: 'rgba(0, 128, 0)',
            borderWidth:'1',
        },
        ],        
      })
    }


    get_data(pest,location){
      var str = location.toString().split(" "),url=null;

      /*http://127.0.0.1:8080/prediction?pest=aphid&state_name=UTTAR%20PRADESH*/

      if( (location.localeCompare(str[0])) == 0) {
        url="http://127.0.0.1:8080/prediction?pest="+pest+"&state_name="+str[0];
        }
      else{
        url="http://127.0.0.1:8080/prediction?pest="+pest+"&state_name="+str[0]+"%20"+str[1];
      }
      
      this.clear_states();
      fetch(url).then(temp=> temp.json()).then( temp =>{
        this.add_label(temp['x_axis']);
        this.add_to_dataset(temp['y_axis'],temp['lower_bnd'],temp['upper_bnd']);
      })


    }

    componentWillReceiveProps(next_props){
      this.get_data(this.props.pest,this.props.location)      
      //console.log(countries.features);
  }    

    componentDidMount(){
      console.log(this.props.pest)
      console.log(this.props.location)
      this.get_data(this.props.pest,this.props.location)
    }

    render() {
        return (
            <div>
              {/*<img src={img1} alt="Girl in a jacket" width="700" height="400"></img> */}
                 <Line data={{'labels':this.state.labels,'datasets':this.state.datasets}} options={options} style={{backgroundColor:'rgba(232,231,223)'}} />
            </div>
        )
    }
}

export default Prediction
