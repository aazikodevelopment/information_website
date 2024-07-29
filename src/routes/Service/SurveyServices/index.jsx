import React from 'react';
import { useEffect } from 'react';
import TalkToExpert from '../../../components/TalkToExpert';
import './SurveyServices.scss';
import SurveyServicesDetails from './SurveyServicesDetails';
export default function SurveyServices() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <SurveyServicesDetails/>

    </div>
  )
}
