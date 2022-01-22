import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockcurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();


afterEach(cleanup);

describe('Nav component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav 
        categories={categories}
        setCurrentCategory = {mockSetCurrentCategory}
        currentCategory = {mockcurrentCategory}
        />);
    });

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav 
        categories={categories}
        setCurrentCategory = {mockSetCurrentCategory}
        currentCategory = {mockcurrentCategory}
        />);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('emoji is visible', () => {
    //arrange
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav 
        categories={categories}
        setCurrentCategory = {mockSetCurrentCategory}
        currentCategory = {mockcurrentCategory}
    />);
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
    //assert
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav 
            categories={categories}
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockcurrentCategory}
        />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})