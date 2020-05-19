import React, { Component } from "react";
import "../css/contact.scss";
import logo from "../img/mainlog.png";
import * as emailjs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  changeHandler = (event) => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // sendMessage = event => {
  //     event.preventDefault();

  //     const { name, email, message } = this.state;

  //     let templateParams = {
  //       name: name,
  //       message: message,
  //       email: email,
  //      }

  //     let popup = document.getElementById('popUp');

  //      if(name && message && email) {
  //       emailjs.send(
  //         'gmail',
  //         'template_SPqTzvPP',
  //         templateParams,
  //         'user_ok070rGofhMku7T0N56rz'
  //       )
  //       .then((res) => {

  //           popup.style.opacity = '1';
  //           popup.innerHTML = 'Sent!'

  //           setTimeout(function(){ popup.style.opacity = '0' }, 3000)

  //         })
  //         .catch((err) => {
  //             console.error(err)
  //         })

  //         this.setState({ name: '', email: '', message: '' })
  //       }
  //       else {
  //         popup.style.opacity = '1';
  //         popup.innerHTML = 'Please fill out all fields.'

  //         setTimeout(function(){ popup.style.opacity = '0' }, 3000)
  //       }
  // }

  render() {
    return (
      <div className="contact-area" id="contact">
        <div className="mainBlock">
          <form>
            <form className="contactForm">
              <input
                onChange={this.changeHandler}
                value={this.state.name}
                name="name"
                type="text"
                placeholder="Name"
              ></input>
              <input
                onChange={this.changeHandler}
                value={this.state.email}
                name="email"
                type="text"
                placeholder="E-mail"
              ></input>
              <textarea
                onChange={this.changeHandler}
                value={this.state.message}
                name="message"
                type="text"
                placeholder="Message"
                rows="8"
                cols="50"
              ></textarea>
              <button type="submit">
                SEND A MESSAGE <i className="fas fa-arrow-right"></i>
              </button>
            </form>
          </form>
          <div className="contactInfo">
            <h5>Contact Us</h5>
            <img src={logo} alt="contactLogo" />
            <p>
              35 Maple Street, Unit 1<br />
              Lowell, MA
              <br />
              01852
            </p>
            <div className="contactIcon">
              <i className="fas fa-phone"></i>
              <h6>978 454 2741</h6>
            </div>
            <div className="contactIcon">
              <i className="fas fa-fax"></i>
              <h6>978 459 7999</h6>
            </div>
            <div className="contactIcon">
              <i className="fas fa-envelope"></i>
              <div className="bothEmails">
                <a href="sales@mcgarvin.com">sales@mcgarvin.com</a>
                <a href="info@mcgarvin.com">info@mcgarvin.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
