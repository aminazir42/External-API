import React, { useState } from 'react';
import SplashScreen from './SplashScreen';
import CategoryPage from './Joke';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('splash');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'splash':
        return <SplashScreen onNext={() => handlePageChange('category')} />;
      case 'category':
        return <CategoryPage onSelectCategory={(category) => console.log(category)} />;

      default:
        return null;
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
}

export default App;
