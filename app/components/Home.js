// @flow
import * as io from 'socket.io-client';

import React, { Component } from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {
  // text: string,
  // field: string,
  // counter: number,
  // store: {},
  userAgent: string,
  messages: Array<T>
};

export default class Home extends Component<Props> {
  props: Props;

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    const messages = [];
    console.log('messages: ', messages);
    return { userAgent, messages };
  }

  static defaultProps = {
    userAgent: "",
    messages: []
  };

  constructor(props) {
    super(props);
    this.state = {
      // items: [],
      field: '',
      // text: "",
      messages: props.messages,
      userAgent: props.userAgent
    };
  }

  // connect to WS server and listen event
  componentDidMount() {
    this.socket = io('http://localhost:3000/');
    this.socket.on('message', this.handleMessage);
  }

  // close socket connection
  componentWillUnmount() {
    this.socket.off('message', this.handleMessage);
    this.socket.close();
  }

  // add messages from server to the state
  handleMessage = message => {
    console.log(message);
    this.setState(state => ({ messages: state.messages.concat(message) }));
  };

  handleChange = event => {
    this.setState({ field: event.target.value });
  };

  handleOpen = () => {
    console.log('open');
    this.socket.emit('message', 'open');
  };

  // send messages to server and add them to the state
  handleSubmit = event => {
    event.preventDefault();

    // create message object
    const { field } = this.state;
    const message = {
      id: new Date().getTime(),
      value: field
    };

    // send object to WS server
    this.socket.emit('message', message);

    // add it to state and clean current input value
    this.setState(state => ({
      field: '',
      messages: state.messages.concat(message)
    }));
  };

  render() {
    const { messages, userAgent, text } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home {userAgent}</h2>
        <a href="#$" onClick={this.handleOpen} onKeyDown={this.handleOpen}>
          OPEN
        </a>
        {messages.map(e => (
          <p key={`${e.id}`}> {e.value} </p>
        ))}
        {text}
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
