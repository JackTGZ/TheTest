async function fetchCounts() {
    try {
      const response = await fetch('http://localhost:3000/api/counts');
      const counts = await response.json();
  
      document.getElementById('dengueCount').textContent = `Dengue Count: ${counts.dengue}`;
      document.getElementById('malariaCount').textContent = `Malaria Count: ${counts.malaria}`;
    } catch (error) {
      console.error('Error fetching counts:', error);
      alert('Error fetching counts. Please try again.');
    }
  }
  
  // Fetch counts initially
  fetchCounts();
  
  // Fetch counts every 10 seconds
  setInterval(fetchCounts, 10000);
  