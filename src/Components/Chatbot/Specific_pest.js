import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Specific_pest extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        crop:'',
        states:[],
        flag:0,
      };
    }
  
    componentWillMount() {
        const { steps } = this.props;
        var pest=steps.specific_pest1.value;

        //var url="http://127.0.0.1:8080/chatbot_specific?pest=Whitefly;

        var url="http://127.0.0.1:8080/chatbot_specific?pest="+pest;
        fetch(url).then
         (res=>res.json()).then( 
          res=>  {
              console.log(res);
              var sum=0;
             for(var x in res){
                 if(x==0){
                     this.setState({
                         crop: res[0],
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
      
      if(this.state.flag==0) return(<div>Fetching</div>)
      else{
          return(
            <div>
            Most affected crop: {this.state.crop}
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

Specific_pest.propTypes = {
    steps: PropTypes.object,
};
  
Specific_pest.defaultProps = {
    steps: undefined,
};

export default Specific_pest
