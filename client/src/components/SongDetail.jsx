import React from 'react'

class SongDetail extends React.Component{

 render(){
   if(this.props.song === null) return null;
    
  return(
    <div>
    <ul>
     <li>Title:{this.props.song["im:name"]["label"]}</li>
     <li>Artist:{this.props.song["im:artist"]["label"]}</li>
    
     

    </ul>
    </div>
    )
}
}



export default SongDetail;
