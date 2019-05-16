// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GridLayout from 'react-grid-layout'
import styles from './SortableGrid.css'
// import routes from '../constants/routes';

export default class SortableGrid extends React.Component {
  render () {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    ]
    return (
      <GridLayout className='layout' layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key='a'>a</div>
        <div key='b'>b</div>
        <div key='c'>c</div>
        {/*        <div key='a'>ab</div>
        <div key='b'>bb</div>
        <div key='c'>cb</div>
        <div key='a'>ac</div>
        <div key='b'>bc</div>
        <div key='c'>cc</div> */}
      </GridLayout>
    )
  }
}
