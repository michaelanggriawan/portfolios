import React, { Component } from 'react';
import {  MusicPlayerContainer, PlayButton } from './styles';
import KokoroNoHane from '../../../assets/sound/KokoroNoHane.mp3';
import Bounce from 'react-reveal/Bounce';

class KokoroHaneSong extends Component {
    constructor(props){
        super(props);
        this.state = {
            play: false,
            pause: true,
            duration: 0,
            currentTime: 0,
            player:'stopped',
            res: false
        };
        this.kokoroNoHane = new Audio(KokoroNoHane);
    }
    play = (e) => {
        this.setState({ play: true, pause: false, res: true, currentTime: e.target.currentTime, duration: e.target.duration});
        this.kokoroNoHane.play();
    }
    pause = (e) => {
        this.setState({ play: false, pause: true, res: false, currentTime: e.target.currentTime, duration: e.target.duration})
          this.kokoroNoHane.pause();
    }
    render(){
        let play = <i className="fa fa-play fa-lg" onClick={this.play} style={{ marginRight: '3px'}} />;
        let pause = <i className="fa fa-pause fa-lg" onClick={this.pause} style={{marginRight: '3px'}} />;
        let resSound;
        if( !this.state.res ){
        resSound = play
        }
        else
        {
        resSound = pause
        }
        return(
            <div className="about-music">
                <MusicPlayerContainer>
                <PlayButton>
                    <p>
                    { resSound }
                    </p>
                            
                    </PlayButton>
                        <div>
                            <Bounce left><p style={{ padding: ' 20px 0' }}>Kokor No Hane - AKB 48</p> </Bounce>   
                        </div>
                </MusicPlayerContainer>
            </div>
        )
    }
}

export default KokoroHaneSong;
