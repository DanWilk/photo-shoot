import React from 'react';
import {render, cleanup, getByTestId} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '..'

const category = {category: 'portraits'}

afterEach(cleanup);

describe(('Photolist is rendering'), () => {
    it('renders', () => {
        render(<PhotoList
            category = {category}
        />)
    })

    it(('matches snapshop'), () => {
        const { asFragment } = render(<PhotoList 
            category = {category}
        />)
        expect(asFragment).toMatchSnapshot()
    })
})