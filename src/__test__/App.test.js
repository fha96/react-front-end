import React from "react";
import {render, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('Display starter data', async () => {
    render(<App/>);
    const form = await waitFor(()=> screen.findByTestId('form'));
    expect(form).toBeVisible();
});

test('Check the header',  () => {
    render(<App/>);
     const heading =  screen.getByRole('heading');
    expect(heading).toHaveTextContent(/This is our first App in 401/);
})
