import { render } from '@testing-library/react';
import Board from './Board';

test('renders Board without crashing', () => {
    render(<Board nrows={5} ncols={5} chanceLightStartsOn={0.5} />);
});
  
 
test('renders Board correctly', () => {
    const { container } = render(<Board nrows={5} ncols={5} chanceLightStartsOn={0.5} />);
    expect(container.firstChild).toMatchSnapshot();
});