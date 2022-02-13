import React from 'react'
import { Icon } from '@chakra-ui/react'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { BsCheck, BsCheckAll } from 'react-icons/bs'
import { RiWifiOffLine } from 'react-icons/ri'
import { listSurveys } from "../hooks/useSurveys"


export const SurveysTable: React.FC = () => {
  const surveys = listSurveys()
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Pet</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          surveys && (
            surveys.map((item) => {

              return (
                <Tr key={item.id}>
                  <Td>{item.get('name')}</Td>
                  <Td>{item.get('pet')}</Td>
                  <Td>
                    {item.metadata.fromCache && <Icon as={BsCheck} /> || <Icon as={BsCheckAll} color={"brand.green"} />}
                    {item.metadata.hasPendingWrites && <Icon as={RiWifiOffLine} color={"gray.500"} />}
                  </Td>
                </Tr>
              )
            })
          )
        }
      </Tbody>
    </Table>
  )
}