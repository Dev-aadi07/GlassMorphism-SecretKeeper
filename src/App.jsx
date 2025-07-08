import { useState } from 'react';
import BgChanger from './components/BgChanger';
import Secret from './components/Secret';

function App() {
  const [bgClass, setBgClass] = useState('bg-gradient-to-br from-gray-700 via-gray-800 to-zinc-900');

  return (
    <div className={`${bgClass} relative flex items-center justify-center h-screen transition-all duration-700`}>
      <BgChanger setBgClass={setBgClass} className="absolute top-4 left-4" />
      <Secret />
    </div>
  );
}

export default App;
