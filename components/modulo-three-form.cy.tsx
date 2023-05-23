import React from 'react'
import ModuloThreeForm from './modulo-three-form'

describe('<ModuloThreeForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ModuloThreeForm />)
  })
})