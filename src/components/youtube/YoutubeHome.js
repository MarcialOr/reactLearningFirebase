import React, {Component} from "react";
import YoutubeList from "./YoutubeList";
import { connect } from "react-redux";

class YoutubeHome extends Component {
    render (){

    const {videos} = this.props;

        return (
            <div>
                    <YoutubeList videos={videos}/>
            </div>
        )
    }
}

const mapsStateToProps = (state) =>{
    return{
        videos: state.video.videos
    }    
}
export default connect(mapsStateToProps)(YoutubeHome);