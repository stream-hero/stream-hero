// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from '../constants/routes';

type Props = {};

export default class OsPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
