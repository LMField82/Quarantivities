import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './style.css';
import UserTitle from "../ModalTitle";

class SMSForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: '',
        body: `You've set a reminder for ${this.props.title}, here is a link to the site! ${this.props.href}`
      },
      submitting: false,
      error: false
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  }

  onSubmit(event) {
    console.log("the message", this.state.message)
    event.preventDefault();
    this.setState({ submitting: true });
    
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => 
       res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: ''
            }
          });
          this.props.hide()
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }
  render() {
    const { show, hide } = this.props;
    return (
      <Modal show={show}>
        <Modal.Header closeButton onClick={hide}>
          <Modal.Title>Send Reminder For: <UserTitle title={this.props.title} /></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={this.onSubmit}
            className={this.state.error ? 'error sms-form' : 'sms-form'}
          >
            <div>
              <label htmlFor="to" >Enter Your Area Code and Phone Number:</label>
              <input
                placeholder="0123456789"
                type="tel"
                name="to"
                id="to"
                value={this.state.message.to}
                onChange={this.onHandleChange}
              />
            </div>
            <button type="submit" disabled={this.state.submitting}>Send Reminder</button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SMSForm;