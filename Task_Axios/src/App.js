import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    // Fetch data from the Express backend API (which will fetch from the external API)
      fetch('https://webdevelopmenttask-production.up.railway.app/api/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false); // Data fetched, set loading to false
      })
      .catch((error) => {
        setError(error.message); // Set error if there's an issue
        setLoading(false); // Set loading to false even in case of error
      });
  }, []); // Empty dependency array ensures it runs once after the component mounts

  if (loading) {
    return <p>Loading data...</p>; // Show loading message until data is fetched
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message if any
  }

  return (
    <div className="App">
      <h1>Data from the Backend (External API)</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Render data when available */}
    </div>
  );
}

export default App;
