import * as donationMap from 'images/donations';

// Replace each hosted_button_id with your own PayPal hosted button IDs:
// PayPal > Pay & Get Paid > PayPal Buttons > Create "Donate" button, then copy
// the hosted_button_id value from the generated form code.
export default [{
  name: 'Iced Americano Venti',
  image: donationMap.starbucks,
  price: 4.95,
  hosted_button_id: 'REPLACE_WITH_YOUR_BUTTON_ID_1',
}, {
  name: 'Chicken & Bacon Ranch Footlong',
  image: donationMap.subway,
  price: 10.99,
  hosted_button_id: 'REPLACE_WITH_YOUR_BUTTON_ID_2',
}, {
  name: 'Boneless Wings Medium',
  image: donationMap.buffalo,
  price: 16.79,
  hosted_button_id: 'REPLACE_WITH_YOUR_BUTTON_ID_3',
}, {
  name: 'Roasted Salmon',
  image: donationMap.anthonys,
  price: 32.95,
  hosted_button_id: 'REPLACE_WITH_YOUR_BUTTON_ID_4',
}, {
  name: 'Pavilion 21.5-inch Monitor',
  image: donationMap.hp,
  price: 119.99,
  hosted_button_id: 'REPLACE_WITH_YOUR_BUTTON_ID_5',
}, {
  name: 'Round Trip from SFO to Cancun',
  image: donationMap.spirit,
  price: 289.22,
  hosted_button_id: 'REPLACE_WITH_YOUR_BUTTON_ID_6',
}];
