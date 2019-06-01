import React, { Component } from 'react';
import Spirit from './spiritSong';
import KokoroNoHane from './kokorHaneSong';
import KokoroNoKizuna from './kokoroKizunaSong';
import DemonSlayer from './demonSlayerSong';
import Zoom from 'react-reveal/Zoom';
import './aboutMusic.scss';
import Hoby from '../Hoby/hoby';


class AboutMusic extends Component {
    state = {
        show: false
    }
    Show = ()=> {
        this.setState({
            show: true
        });
    }
    render(){
        let res;
        if( this.state.show ){
            res = <Hoby/>
        }
        return(
            <div className="section ">
                <div className="music-container">
                <div className="music">
                    <div className="space">
                        <Spirit />
                    </div>

                    <div className="space">
                        <KokoroNoKizuna />
                    </div>
                    <div className="space">
                        <KokoroNoHane />
                    </div>           
                    <div className="space">
                        <DemonSlayer />
                    </div>
                </div>
                <div className="space"></div>
                    <Zoom bottom cascade>
                    <div className="right">
                        <p>Good question! You know that you can tell a lot about somebody through his music. Here are my top 4 songs (currently):</p>
                    </div>
                    </Zoom>
                </div>
                <div className="left" onClick={ this.Show }> 
                     <div style={{ fontSize:"30px"}}>Yeah... right. Tell me <div style={button}>more</div></div>
                 </div>
                 <div >
                     { res }
                </div>
            </div>
        )
    }
}

const button = {
    display: 'inline-block',
    width:'7rem',
    backgroundColor: 'transparent',
    border: '2px solid black',
    textAlign: 'center',
}

export default AboutMusic;