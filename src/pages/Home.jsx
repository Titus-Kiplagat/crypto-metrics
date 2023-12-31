import { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Chart from '../components/Chart';
import SearchInput from '../components/SearchInput';
import CoinsList from '../components/CoinsList';

const Home = () => {
  const { coins } = useSelector((state) => state.coins);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const filteredCoins = coins.filter(
    (coin) => coin.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div data-testid="home" className="h-screen md:w-1/2 lg:w-1/2 mx-auto space-y-5">
      <Header />
      <Chart title1="CRYPTO" title2="CURRENCY" count={`${coins.length} coins`} />
      <SearchInput onSearchChange={handleSearchChange} />
      <CoinsList coins={filteredCoins} />
    </div>
  );
};

export default Home;
