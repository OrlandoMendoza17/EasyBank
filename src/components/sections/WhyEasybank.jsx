import React, {useState} from 'react';
import initialState from '../../initialState';
import Feature from './Feature';

const WhyEasybank = () => {
  const [features, setstate] = useState(initialState.features)
  return (
    <section className="WhyEasybank">
      <div className="WhyEasybank__content">
        <h2 className="WhyEasybank__title">Why choose Easybank?</h2>
        <p className="WhyEasybank__description">
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
        </p>
      </div>
      <div className="WhyEasybank__feautures">
        {features.map(item =>(
          <Feature {...item} key={item.id}/>
        ))}
      </div>
    </section>
  )
}

export default WhyEasybank;
