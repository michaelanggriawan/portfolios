import React from 'react';
import ReactPlayer from "react-player";
import './artist.scss';

export const Artist1 = ()=> {
    return(
    <div className="artist-wrapper">
        <ReactPlayer 
            url="https://www.youtube.com/watch?v=5J_26vGesvw"
            className="artist-player"
            width="100%"
            height="100%"
            controls={false}
        />
    </div>
    )
}

export const Artist2 = ()=> {
    return(
    <div className="artist-wrapper">
        <ReactPlayer 
            url="https://www.youtube.com/watch?v=6RBebNVdmRc"
            className="artist-player"
            width="100%"
            height="100%"
            controls={false}
        />
    </div>
    )
}


export const Artist3 = ()=> {
    return(
    <div className="artist-wrapper">
        <ReactPlayer 
            url="https://www.youtube.com/watch?v=jtxNUhasFV0"
            className="artist-player"
            width="100%"
            height="100%"
            controls={false}
        />
    </div>
    )
}


