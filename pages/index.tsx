import React from 'react';
import type { NextPage } from 'next'

import SurveysTable from '../surveys/Table';


import { surveysContainer } from '../surveys/hooks/useSurveys';
import SurveyForm from '../surveys/Form';

const Home: NextPage = () => {



  return (

    <surveysContainer.Provider>
      <SurveysTable />
      <hr />
      <SurveyForm />
    </surveysContainer.Provider>

  )
}

export default Home
