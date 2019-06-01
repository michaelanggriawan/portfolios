import React, {Component } from 'react';
import Coffe from '../../../assets/img/coffe.gif';
import { form } from '../../../actions/formAction';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import './closing.scss';

class Closing extends Component {
    state =  {
        name:'',
        email:'',
        message:'',
    }
    handleChange = (e)=> {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e)=> {
        e.preventDefault();
        console.log(this.props.form)
        this.props.form(this.state)

        this.setState(prevState => ({
            modal: !prevState.modal,
            name: '',
            email:'',
            message:''
          }));
    }
    toggle = ()=> {
        this.setState(prevState=>({
            modal: !prevState
        }))
      }
    render(){
    return(
        <div className="closing">
            <div className="field-text">
            <Fade left>
                <p>My life mission right now is to somehow big creativity in the web platform
                and to create engaging and interesting websites that visitors love to come back.</p>
            </Fade>

            <Fade left>
                <p>And now excuse me, I have a coffe for u.</p>
           
                <img src={ Coffe } alt="coffe"/>
            </Fade>

            <Fade left>
                <p>i gotta go, it's been so nice talking to u, let's keep in contact.</p> 
                <p>Shall we ? </p>
            </Fade>
            </div>

            <div className="form">
            <Fade left>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-one">
                        <div className="form-input1">
                            <input type="text"  placeholder="Your name (Required)" required id="name" onChange={ this.handleChange}
                                value={this.state.name}
                            />
                         </div>

                        <div className="form-input2" >
                            <input type="email" placeholder="Your email (Required)" required id="email" onChange={ this.handleChange}
                                value={this.state.email}
                            />
                        </div>
                    </div>

                    <div className="input-two">
                        <input type="text" placeholder="Your message (Required)" required id="message" onChange={ this.handleChange}
                            value={this.state.message}
                        />
                    </div>
                </form>
                </Fade>

                <div className="send" onClick={this.handleSubmit}><p>Send</p></div>
            </div>
        </div>
        )
    }
}


const mapDispatchToProps = (dispatch)=> {
    return{
        form: (request)=> dispatch(form(request))
    }
}
export default connect(null,mapDispatchToProps)(Closing);