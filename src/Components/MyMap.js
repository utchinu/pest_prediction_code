import React, { Component } from 'react'
import {Map,GeoJSON,Marker,Popup,TileLayer,CircleMarker} from "react-leaflet"
import countries  from './../Data/states_india.json'
import "leaflet/dist/leaflet.css"
import "./MyMap.css"
import L , { circleMarker, popup } from "leaflet";
import moment from 'moment';
import { cssNumber } from 'jquery'
import Image from '../Images/g.jpg';

const mapStyle ={
    backgroundColor: "coral",
};

function get_Icon(icon_size){
    return L.icon( {
            iconUrl: require("../Data/icons/cloudy.png"),
            iconSize: [icon_size],
        });
}


class MyMap extends Component {

    constructor(props){
        console.log(props);
        super(props);
        this.state ={
            position : [25,86],
            info:[],
            states:[],
            date:null,
        };
    }

    colors=["green","blue","yellow","grey","orange"]

    onEachCountry = (country,layer) =>{
        layer.options.fillOpacity = Math.max(Math.random(),0.5); //0-1 (0.1, 0.2, 0.3)
        const colorIndex = Math.floor(Math.random() * this.colors.length);
        layer.options.fillColor = this.colors[colorIndex]; //0
    }

    add_locations_in_map(location,count){
        console.log(location);
        var str = location.toString().split(" ");
        var lat=null,lon=null,url=null;
        if( (location.localeCompare(str[0])) == 0) {
            url="https://nominatim.openstreetmap.org/search?q=" + location + "&format=json";
        }
        else{

            url="https://nominatim.openstreetmap.org/search?q=" + str[0] + "%20" + str[1] + "&format=json";
        }
        fetch(url).then(res => res.json())
                    .then( json => {
                         lat =(json[0].lat);
                         lon  = (json[0].lon);
                         var pos=[lat,lon];
                         console.log(pos);
                         let temp =this.state.info;
                         temp.push({ 'loc':location, 'count':count, 'pos':pos});
                         this.setState({
                         info:temp, 
                        });
                });
     }

    add_location_in_map_new(location,count,lon,lat){
        var temp=this.state.info;
        temp.push({'loc':location,'count':count,'pos':[lon,lat]});
        this.setState({
            info:temp,
        });
    }

   get_country_list(){
       console.log(this.props.start_date);
       this.setState({
           info : [],
       });
       console.log(this.props.start_date);
       var date1=moment(this.props.start_date).format('YYYY-MM-DD');
       var date2=moment(this.props.end_date).format('YYYY-MM-DD');
       console.log(this.props.crop);
       var url="http://127.0.0.1:8080/home_page?date1=" + date1 + "T00:00:00Z&date2="+date2+"T00:00:00Z&crop="+this.props.crop+"&pest="+this.props.pest+"&state_name="+this.props.state+"&district_name="+this.props.district ; 

       //fetch('http://127.0.0.1:8080/home_page?date1=2013-01-02T00:00:00Z&date2=2016-01-02T00:00:00Z&crop=Tomato&pest=all&state_name=all&district_name=all').then
       fetch(url).then
       (res=>res.json()).then( 
        res=>  {
            console.log(res);
            for(var x in res){
                var sum=0;
                for(var y in res[x]) {
                    console.log(y);
                    this.add_location_in_map_new(y,res[x][y][0],res[x][y][1],res[x][y][2]);
                    sum=sum+res[x][y];
                    //console.log(y);
                    //this.add_locations_in_map(y,res[x][y]);
                }
            }
           //this.add_locations_in_map(res);
       }).catch(err => {
           console.log(err);
       }) 

       //this.add_locations_in_map("Kanpur",22);
       //this.add_locations_in_map("Budaun",122);
       //this.add_locations_in_map("Delhi",1222);
       //this.add_locations_in_map("Assam",122);
    }

    componentWillReceiveProps(next_props){
        this.get_country_list();
        //console.log(countries.features);
    }
    
    componentDidMount(){
        this.get_country_list();
    }

    country_style={
        color: "Black",
        fillColor: "#90EE90",
        fillOpacity : 0.8,
        backgroundImage: `url(${Image})`,
    }

 

    render() {
        return (
            <div style={mapStyle}> 
                <Map style={{height:"100vh",backgroundImage: `url(${Image})`}} zoom={4.5} center={[22,80]} > 
                 {/*<TileLayer
                url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                 attribution= 'Map data © <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' /> */}

      <GeoJSON  style={this.country_style} data={countries.features} onEachFeature={this.onEachCountry} /> 

                {
                    (this.state.info).map((e)=>(
                          <CircleMarker center={e.pos} color='red' radius={Math.max(Math.min(40,e.count/20),5)} >
                              <Popup>Location={e.loc} Queries={e.count}</Popup>
                            </CircleMarker>   
                    ))
                }
                </Map>
            </div>
        )
    }
}

export default MyMap
