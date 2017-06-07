import React from 'react'
import SongSelector from '../components/SongSelector'
import Header from '../components/Header'
import PropTypes from 'prop-types'

class AppleSongContainer extends React.Component{
  constructor(props){
    super(props);
    this.state={
      songs:[],
      selectedSong: null}
      this.setSelectedSong = this.setSelectedSong.bind(this);
    }
    render(){
      return(
        <div>
        <Header title="Top 20 Songs"/>
        <SongSelector songs={this.state.songs} onSelectSong={this.setSelectedSong} />
        </div>
        )

    }
    componentDidMount(){
      const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
      const request = new XMLHttpRequest();
      request.open('GET',url);
      request.addEventListener('load',()=>{
       if(request.status !== 200) return;
       const jsonString = request.responseText;
       const data = JSON.parse(jsonString);
     // console.log(data.feed.entry[0]["im:name"]);
     this.setState({
       songs: data.feed.entry

      // selectedMovie: data[0]
    });


   } );
      request.send();

    }
    setSelectedSong(song){

      this.setState({selectedSong: song.feed.entry})

    }
  }


  export default AppleSongContainer;