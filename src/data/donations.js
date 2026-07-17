import * as donationMap from 'images/donations';
import { paypal } from 'images/icons';

// Your PayPal.Me username (the part after paypal.me/).
const PAYPAL_ME = 'minjookim1223';

export default [{
  name: 'Iced Americano',
  image: donationMap.starbucks,
  price: 4.95,
  link: `https://paypal.me/${PAYPAL_ME}/4.95`,
}, {
  name: 'In-N-Out Combo #1',
  image: donationMap.innout,
  price: 11.65,
  link: `https://paypal.me/${PAYPAL_ME}/11.65`,
}, {
  name: 'Protein for a Week 😭',
  image: donationMap.costco,
  price: 50,
  link: `https://paypal.me/${PAYPAL_ME}/50`,
}, {
  name: 'Custom Amount',
  image: paypal,
  link: `https://paypal.me/${PAYPAL_ME}`,
}];
