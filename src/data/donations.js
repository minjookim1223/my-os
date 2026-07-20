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
  name: 'Salad for a week',
  image: donationMap.costco,
  price: 34.99,
  link: `https://paypal.me/${PAYPAL_ME}/34.99`,
}, {
  name: 'Protein for a week 😭',
  image: donationMap.costco,
  price: 49.99,
  link: `https://paypal.me/${PAYPAL_ME}/49.99`,
}, {
  name: 'Custom Amount',
  image: paypal,
  link: `https://paypal.me/${PAYPAL_ME}`,
}];
