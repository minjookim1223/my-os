import React from 'react';

import { Icon, Window } from 'components';
import { getUrlKeys } from 'common/utils';
import { donations } from 'data';

import './stylesheet.scss';

function PaypalWindow(props) {
  const { app } = props;
  const { url } = app;
  const [, status] = getUrlKeys(url);
  const isSuccess = status === 'success';

  return (
    <Window className="PaypalWindow" noToolbar
            defaultWidth={54 * 16} defaultHeight={40 * 16}
            toolbarStyle={{
              backgroundImage: 'radial-gradient(circle at center, #009cde, #003087 125%)',
            }}
            contentStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            {...props}>
      {
        isSuccess && (
          <div className="paypal-success"/>
        )
      }
      <div className="message"/>
      <div className="donation-container">
        {
          donations.map(donation => (
            <a key={donation.name} className="donation" href={donation.link}
               target="_blank" rel="noopener noreferrer">
              <Icon className="icon" iconUrl={donation.image}/>
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

export default PaypalWindow;
