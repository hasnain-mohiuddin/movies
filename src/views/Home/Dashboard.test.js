/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';
import { MemoryRouter } from 'react-router-dom';

describe('loads the component', () => {
    beforeAll(() => {
        render(
        <MemoryRouter>
            <Dashboard />
        </MemoryRouter>);
    })
  
    console.log(screen)
  })

