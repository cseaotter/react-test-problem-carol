import {render, screen} from '@testing-library/react';
import React from 'react'
import App from './App'

// import your story from App.stories.js
import {Large} from './App.stories';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library

it('Checks if the label matched after click from mock', () => {
    var state = false
    var text = "click me"
    const handleOnclick = () => {
        state = !state
        text = state ? `thanks` : `click me`
    }
    const {getByTestId, getByText} = render(<Large greeting={state} onClick={handleOnclick}/>);

    var button = screen.getByRole('button');
    button.click()
    expect(text).toBe('thanks')
    button.click()
    expect(text).toBe('click me')
});

it('Checks if the label matched after click from App', () => {
    render(<App/>);
    var button = screen.getByRole('button')
    button.click();
    expect(button).toHaveTextContent('thanks')
    button.click();
    expect(button).toHaveTextContent('click me')
});