import React from 'react';
import { withRouter } from 'react-router-dom'; //higher order component
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => {
      console.log('MenuItem => linkUrl', linkUrl);
      console.log('MenuItem => match', match);
      console.log('typeof match', typeof match);
      console.log('type of MenuItem', typeof MenuItem);
      console.log('MenuItem => match.url', match.url);
      console.log('type of linkUrl', typeof linkUrl);
      console.log('history', history);
      console.log('typeof history', typeof history);

      history.push(`${match.url}${linkUrl}`);

      console.log('history', history);
      console.log('typeof history', typeof history);
    }}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}></div>

    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
