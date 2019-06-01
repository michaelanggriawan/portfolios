import React, { Component } from 'react';
import {  MusicPlayerContainer, PlayButton } from './styles';
import KokoroNoKizuna from '../../../assets/sound/KokoroNoKizuna.mp3';
import Bounce from 'react-reveal/Bounce';

class KokoroKizunaSong extends Component {
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
        this.kokoroNoKizuna = new Audio(KokoroNoKizuna);
    }
    play = (e) => {
        this.setState({ play: true, pause: false, res: true, currentTime: e.target.currentTime, duration: e.target.duration});
        this.kokoroNoKizuna.play();
    }
    pause = (e) => {
        this.setState({ play: false, pause: true, res: false, currentTime: e.target.currentTime, duration: e.target.duration})
          this.kokoroNoKizuna.pause();
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
                        <Bounce left> <p style={{ padding: ' 20px 0'  }}>Kokoro No Kizuna - Cosmos</p> </Bounce>
                        </div>
                </MusicPlayerContainer>
            </div>
        )
    }
}

export default KokoroKizunaSong;
