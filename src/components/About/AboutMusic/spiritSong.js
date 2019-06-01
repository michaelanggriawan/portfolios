import React, { Component } from 'react';
import { MusicPlayerContainer, PlayButton } from './styles';
import Spirit from '../../../assets/sound/Spirit.mp3';
import Bounce from 'react-reveal/Bounce';

class SpiritSong extends Component {
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
        this.spirit = new Audio(Spirit);
    }
    componentDidMount(){
        this.setState({
            currentTime: this.state.currentTime,
            duration: this.state.duration
        })
    }
    play = (e) => {
        this.setState({ play: true, pause: false, res: true, currentTime: e.target.currentTime, duration: e.target.duration});
        this.spirit.play();
    }
    pause = (e) => {
        this.setState({ play: false, pause: true, res: false, currentTime: e.target.currentTime, duration: e.target.duration})
          this.spirit.pause();
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
                          <Bounce left> <p style={{ padding: ' 20px 0' }}>Ultraman Cosmos - Spirit</p> </Bounce>
                        </div>
                </MusicPlayerContainer>
            </div>
        )
    }
}

export default SpiritSong;
