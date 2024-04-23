import React from 'react';
import { Provider, useSelector } from 'react-redux'; // Import Provider and useSelector from react-redux
import store from './store/configureStore';
import SplashScreen from './components/SplashScreen';
import CategoryPage from './components/CategoryPage';
import JokePage from './components/JokePage';
import './App.css'; 

// Rest of the code...


function App() {
  return (
    <Provider store={store}> {/* Wrap your application with the Provider component */}
      <div className="app">
        <PageSelector /> {/* Render the PageSelector component */}
      </div>
    </Provider>
  );
}

const PageSelector = () => {
  const currentPage = useSelector(state => state.currentPage); // Use useSelector to access the currentPage state from Redux

  switch (currentPage) {
    case 'splash':
      return <SplashScreen />;
    case 'category':
      return <CategoryPage />;
    case 'joke':
      return <JokePage />;
    default:
      return null;
  }
};

export default App;
