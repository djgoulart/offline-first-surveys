import React from 'react'
import { surveysContainer } from "../hooks/useSurveys";

export default function SurveysTable() {
  const { surveys } = surveysContainer.useContainer()

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Pet</th>
        </tr>
      </thead>
      <tbody>
        {
          surveys && (
            surveys.map((item) => {

              return (
                <tr key={item.id}>
                  <td>{item.get('name')}</td>
                  <td>{item.get('pet')}</td>
                  <td>
                    {item.metadata.fromCache && 'local' || 'online'}
                    {item.metadata.hasPendingWrites && 'outdated'}
                  </td>
                </tr>
              )
            })
          )
        }
      </tbody>
    </table>
  )
}