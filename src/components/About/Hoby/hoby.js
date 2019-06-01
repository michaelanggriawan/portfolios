import React, { Component } from 'react';
import { Artist1, Artist2, Artist3 } from './artist';
import Wobble from 'react-reveal/Wobble';
import Closing from '../Closing/closing';

import './hoby.scss';

class Hoby extends Component {
    state = {
        show: false
    }
    toggle = ()=> {
        this.setState({
            show: true
        });
    }
    render(){
        let res;
        if(this.state.show){
            res = <Closing />
        }
        return(
            <div className="wrapper">
             <Wobble>
                <div className="artist-summary">
                    <p>Ok,well, I will share 3 of my artist I really like.</p>
                    <p> So here we go.</p>
                </div>
            </Wobble>
                <div className="artist" style={{marginTop: '20px'}}>
                    <Wobble>
                    <div>
                    <h3>1. Kim Soo Hyun</h3>
                    <p>I like the style of speaking and how he plays a role as Som Sam dong in Dream High. A poor man who has a dream to become a famous singer. I also like his voice when he sings.</p></div>
                    <div>
                        <Artist1 />
                    </div>
                    </Wobble>
                </div> 

                 <div className="artist flat" style={{marginTop: '20px'}}>
                 <Wobble>
                    <div style={{ paddingRight:'30px'}} className="artist-flat">
                    <div className="flat-artist">
                        <Artist2 />
                    </div>
                    </div>

                    <div>
                    <h3>2. Alicia Amanda</h3>
                    <p>I love her voice, when she's singing a gosple song.. She is my favorite gosple artist in my life ever I met.
                    I was meeting her in cc church, I hope i can met her again :). 
                    </p></div>
                    </Wobble>
                </div>   

                <div className="artist" style={{marginTop: '20px'}}>
                <Wobble>
                    <div>
                    <h3>3. Stephen Chow </h3>
                    <p>This is the  best  comedian ever for me, i love his role when he plays in movie.. this one always entertain me whe i got bored... I still watch his film till right now.
                    </p></div>

                    <div>
                        <Artist3 />
                    </div>
                    </Wobble>
                </div>  

                <div className="next-view" onClick={this.toggle} >
                    <div>Awesome</div>
                    <div style={{border:'2px solid black', width: '6rem', textAlign: 'center', marginLeft:'5px'}}>Right ?</div>
                </div>

                  <div>
                      { res }
                  </div>  
            </div>
        )
    }
}

export default Hoby;