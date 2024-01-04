import React from 'react';
import KitchenSinkExample from './Card';
import productImage1 from '../Assets/waxing.webp';
import productImage2 from '../Assets/facial.webp';
import productImage3 from '../Assets/manicure.webp';
import productImage4 from '../Assets/threading.webp';
import productImage5 from '../Assets/tv.webp';
import productImage6 from '../Assets/plumbing.webp';
import productImage7 from '../Assets/ac.webp';
import productImage8 from '../Assets/wiring.webp';
import './CardMain.css';
export default function ProductsMain() {
  return (
      <div className='card-container'>
      <h1 id='hi'>Salon for Women</h1>
      <div className='card-row1'>
      <KitchenSinkExample productImage={productImage1} value={'Starts at ₹599'} name={'Waxing'}/>
      <KitchenSinkExample productImage={productImage2} value={'Starts at ₹749'} name={'Facial'}/> 
      <KitchenSinkExample productImage={productImage3} value={'Starts at ₹299'} name={'Manicure'}/> 
      <KitchenSinkExample productImage={productImage4} value={'Starts at ₹699'} name={'Threading'}/> 
      </div>
      <h1 id='hi'>Home Repairs</h1>
      <div className='card-row1'>
      <KitchenSinkExample productImage={productImage5} value={'Repair Cost ₹300'} name={'TV Repair'}/>
      <KitchenSinkExample productImage={productImage6} value={'Repair Cost ₹200'} name={'Plumbing'}/> 
      <KitchenSinkExample productImage={productImage7} value={'Repair Cost ₹900'} name={'AC Repair'}/> 
      <KitchenSinkExample productImage={productImage8} value={'Repair Cost ₹500'} name={'Wiring'}/> 
      </div>
      {/* <h1 id='hi'>DESCRIPTION</h1>
      <p>Resources are also available even when our Caregivers aren’t there through 24 Hour Monitoring. To learn more about our specific services, check out our Services page.</p>
        <p>Contact Us to find an agency near you and learn more about our comprehensive in-home care program.</p> */}
    </div>
  );
}