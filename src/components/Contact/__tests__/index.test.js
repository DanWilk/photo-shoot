import React from 'react';
import {cleanup, getByTestId, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup)

describe('contact form renders properly', () => {

    it('renders', () => {
        render(<ContactForm />);
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    })

    it(' has text content', () => {
        const { getByTestId } = render(<ContactForm />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })

})