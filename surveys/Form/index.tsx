import { Button, Container, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { FormEvent, useState } from 'react'
import { createSurvey } from '../hooks/useSurveys'

const SurveyForm: React.FC = () => {
  const [name, setName] = useState('')
  const [pet, setPet] = useState('')
  const [loading, setLoading] = useState(false)


  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    createSurvey({ name, pet });

    setLoading(false);
    setName('')
    setPet('')
  }

  return (
    <Container>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <FormControl mt={5}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input type="text"
            id='name'
            name='name'
            placeholder='Your name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel htmlFor="pet">Pet</FormLabel>
          <Input type="text"
            id='pet'
            name='pet'
            placeholder='Your pet'
            value={pet}
            onChange={e => setPet(e.target.value)}
          />
        </FormControl>

        <Button type='submit'
          isLoading={loading}
          loadingText='Submitting'
          colorScheme='teal'
          variant='outline'
          mt={5}
          mb={5}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export { SurveyForm };