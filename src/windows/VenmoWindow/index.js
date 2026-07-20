import React from 'react';

import { Icon, Window } from 'components';
import { donations } from 'data';
import { venmo as venmoIcon } from 'images/icons';

import './stylesheet.scss';

const VENMO_URL = 'https://account.venmo.com/u/jaykim1223';

function VenmoWindow(props) {
  return (
    <Window className="VenmoWindow" noToolbar
            defaultWidth={54 * 16} defaultHeight={40 * 16}
            toolbarStyle={{
              backgroundImage: 'radial-gradient(circle at center, #008cff, #0074cc 125%)',
            }}
            contentStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            {...props}>
      <div className="message"/>
      <div className="donation-container">
        {
          donations.map(donation => (
            <a key={donation.name} className="donation" href={VENMO_URL}
               target="_blank" rel="noopener noreferrer">
              <Icon className="icon" iconUrl={donation.price !== undefined ? donation.image : venmoIcon}/>
              <div className="name">{donation.name}</div>
              {
                donation.price !== undefined &&
                <div className="price">{donation.price}</div>
              }
              <div className="donate"/>
            </a>
          ))
        }
      </div>
    </Window>
  );
}

export default VenmoWindow;
