import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TasksCRUD from '../Logic/TasksCRUD';

describe('TasksCRUD component', () => {
  test('renders without crashing', () => {
    render(<TasksCRUD />);
  });



});