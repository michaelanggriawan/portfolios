import React, { Component } from  'react';
import Sound from '../../assets/sound/michael-sound.ogg';
import './about.scss';
import Roll from 'react-reveal/Roll';
import Rotate from 'react-reveal/LightSpeed';
import Mydesign from './mydesign';
import Quotes from './Quotes.json';

class About extends Component {
    constructor(props){
        super(props)
        this.state = {
            play: false,
            pause: true,
            res: false,
            toggle: false,
            show: false
        }
        this.sound = new Audio(Sound);
    }
    // componentWillMount(){
    //     clearInterval(this.interval);
    // }
    play = () => {
        this.setState({ play: true, pause: false, res:true});
        this.sound.play();
    }
    pause = () => {
        this.setState({ play: false, pause: true, res:false })
          this.sound.pause();
    }
    toggles = ()=> {
        this.setState({
            toggle: true
        });
    }
    Show = ()=>{
        this.setState({
            show: true
        })
    }
    render(){
    let showQuotes;
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
    if( this.state.toggle ){
    showQuotes =  <Rotate> <Mydesign Quotes={ Quotes } show={ this.state.show} Shows ={ this.Show}/>  </Rotate>;
    }

    return(
        <section className="container">
            <div className="about-me">
            <Roll>
                <h1>Hi there!</h1>
                <p className="text-1">You are here means that you want to know me. Ok, so, You already know
                that my name is { resSound }  Michael Anggriawan, I'am from Indonesia, Therefore Ang is my family name and please call me Michael. </p>
            </Roll>

                <div className="quotes" onClick={ this.toggles} >
                    <p>Hi Michael,</p>
                    <p>Nice to meet you, tell me something I don't know . What is your favorite</p>
                    <div className="button">Quotes ?</div>
                </div>
                <div className="motivator">
                    { showQuotes }
                </div>
            </div>
        </section>
    )
    }
}

export default About;