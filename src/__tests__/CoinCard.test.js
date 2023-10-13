import {
  render, screen,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import store from '../store';
import CoinCard from '../components/CoinCard';

describe('app routes', () => {
  it('app elements', () => {
    const coin = {
      id: 'coinId',
      name: 'Bitcoin',
      symbol: 'BTC',
      priceUsd: '50000',
    };
    render(
      <Provider store={store}><MemoryRouter><CoinCard coin={coin} /></MemoryRouter></Provider>,
    );
    expect(screen.getByTestId('coin-card')).toBeInTheDocument();
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('$50000.0000')).toBeInTheDocument();
  });
});