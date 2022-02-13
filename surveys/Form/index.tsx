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

    if (name && pet) {
      createSurvey({ name, pet });
    }

    setLoading(false);
    setName('')
    setPet('')
  }

  return (
    <Container>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <FormControl mt={5}>
          <FormLabel htmlFor="name" textColor="brand.black" fontWeight="bold">Name</FormLabel>
          <Input type="text"
            id='name'
            name='name'
            placeholder='Your name'
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete={"off"}
          />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel htmlFor="pet" textColor="brand.black" fontWeight="bold">Pet</FormLabel>
          <Input type="text"
            id='pet'
            name='pet'
            placeholder='Your pet'
            value={pet}
            onChange={e => setPet(e.target.value)}
            autoComplete={"off"}
          />
        </FormControl>

        <Button type='submit'
          color={"brand.light-gray"}
          bg={"brand.dark-blue"}
          _hover={{
            bg: "brand.green"
          }}
          isLoading={loading}
          loadingText='Submitting'
          variant='outline'
          disabled={(name == '' || pet == '') ?? true}
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