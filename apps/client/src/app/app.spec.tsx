import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => [],
      });
    });
  });
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);

    expect(getByText(/Post Lists/)).toBeTruthy();
  });
});
