import React from 'react';
//import { Link } from 'gatsby';
import {
  ConditionWrapper,
} from 'containers/App/app.style';

import DomainSection from 'containers/App/Banner';
import FeatureSection from 'containers/App/FeatureSection';
import ControllSection from 'containers/App/Control';
import TestimonialSection from 'containers/App/Testimonial';
import PartnerHistory from 'containers/App/PartnerHistory';
import PaymentSection from 'containers/App/PaymentSection';

import FeatureSlider from 'containers/App/FeatureSlider';
import FeatureSliderTwo from 'containers/App/FeatureSliderTwo';

export default function App({size,innerWidth,data}) {
  

  return (
    <>
      <DomainSection />
      <FeatureSection />
      <ControllSection />
      <ConditionWrapper id="keyfeature">
        {innerWidth > 1100 ? <FeatureSlider /> : <FeatureSliderTwo />}
      </ConditionWrapper>
      <PartnerHistory />
      <PaymentSection />
      <TestimonialSection />
    </>
  );
};
