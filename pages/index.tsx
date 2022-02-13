import React from 'react';
import type { NextPage } from 'next'
import { SurveysTable } from '../surveys/Table';
import { SurveyForm } from '../surveys/Form';
import { Box, Container, Divider, Heading } from '@chakra-ui/react';

const Home: NextPage = () => {

  return (
    <>
      <Container w={"100%"} maxW={900} p={3} centerContent>
        <Heading>My Pet Type</Heading>
        <Box w={"100%"} border={"1px"} borderColor="gray.200" borderRadius={"md"} mt={3}>
          <SurveyForm />
        </Box>
      </Container>
      <Divider mt={6} mb={6} />
      <Container w={"100%"} maxW={900} p={3} centerContent>
        <Box w={"100%"} border={"1px"} borderColor="gray.200" borderRadius={"md"}>
          <SurveysTable />
        </Box>
      </Container>
    </>
  )
}

export default Home
