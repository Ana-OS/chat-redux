import React, { Component } from 'react';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import { createMessage } from '../actions';



class MessageForm extends Component {
    constructor(props){
        super(props)

        state = {
            body: {
                author: '',
                content: '',
                // created_at: `${Date.now}`
            }
        }
    }

    handleSubmit = (e) => {
        this.setState({
            body: e.target.value
        })
        return createMessage()
    }

    render(){
        return(
           <form className="form-control" onChange={this.handleSubmit()}>
               <input type="text" name="author" />
           </form>
        )
    }
}


export default MessageForm;