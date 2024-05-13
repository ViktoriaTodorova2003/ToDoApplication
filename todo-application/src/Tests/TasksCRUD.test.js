import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import TasksCRUD from '../Logic/TasksCRUD';

describe('TasksCRUD component', () => {
  test('renders without crashing', () => {
    render(<TasksCRUD />);
  });

  test('adds a task', async () => {
    render(<TasksCRUD />);
    
    // Input a task name
    const taskInput = screen.getByLabelText('Add a new task');
    fireEvent.change(taskInput, { target: { value: 'New Task' } });

    // Click the Add button
    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);

    // Wait for any list item to appear in the list
    await waitFor(() => {
      const listItem = screen.queryByRole('listitem');
      if (listItem) {
        expect(listItem).toBeInTheDocument();
      } else {
        throw new Error('List item not found');
      }
    });
  });

});