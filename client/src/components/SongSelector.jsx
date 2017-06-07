import React from 'react'
import SongDetail from './SongDetail'


class SongSelector extends React.Component{
  constructor(props){
   super(props)
   this.state = {
    selectedIndex: ""

    
  }
  this.handleChange = this.handleChange.bind(this);
  }
  render(){
    
    const options = this.props.songs.map((song,index)=>{
      return  <SongDetail song = {song} key ={index} />


      });
    return(
      <div>{options}</div>
     )
  
}
handleChange(event){
  const index = event.target.value;
    this.setState({selectedIndex: index});

    const song = this.props.songs[index];
console.log(song)
    this.props.onSelectSong(song);

}


}



 export default SongSelector;