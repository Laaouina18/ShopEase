import React from 'react';
import { render } from '@testing-library/react-native'; 
import Cart from '../components/Cart';

describe('Cart component rendering', () => {
  test('renders course title and price', () => {
    const course = {
      title: 'Sample Course',
      price: 10,
    };

    const { getByText } = render(<Cart course={course} />);
    
    expect(getByText('Sample Course')).toBeTruthy();
    expect(getByText('10$$')).toBeTruthy();
  });
});
