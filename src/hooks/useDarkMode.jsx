import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('dark-mode');
    if (storedDarkMode) {
      setDark(storedDarkMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dark-mode', dark);
  }, [dark]);

  return [dark, setDark];
};

export default useDarkMode;
