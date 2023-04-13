import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Specific_crop extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        pest:'',
        states:[],
        flag:0,
      };
    }
  
    componentWillMount() {
        const { steps } = this.props;
        var crop=steps.specific_crop1.value;

        //var url="http://127.0.0.1:8080/chatbot_specific?crop=Cauliflower;

        var url="http://127.0.0.1:8080/chatbot_specific?crop="+crop;
        fetch(url).then
         (res=>res.json()).then( 
          res=>  {
              console.log(res);
              var sum=0;
             for(var x in res){
                 if(x==0){
                     this.setState({
                         pest: res[0],
                     });
                 }
                 else{
                    var pre_states=this.state.states;
                    pre_states.push(res[x]);
                    this.setState({
                        state:pre_states,
                    });
                }
            }
             this.setState({
                 flag:1,
             });
         }).
         catch(err => {
             console.log(err);
         }); 
    }
  
    render() {
      const { steps} = this.props;
      console.log(steps.specific_crop1.value);
      if(this.state.flag==0) return(<div>Fetching</div>)
      else{
          return(
            <div>
            Most affecting pest: {this.state.pest}
            <br></br>
            .............
            <br></br>
            Most affected states:
            <br></br>
            .............
            <br></br>
            { this.state.states.map((e) =>(
                <div>
                {e}
                <br></br>
                </div> 
                ))
            }
            </div>
          );
      }
  }
  }

Specific_crop.propTypes = {
    steps: PropTypes.object,
};
  
Specific_crop.defaultProps = {
    steps: undefined,
};

export default Specific_crop
