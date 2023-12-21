async function updateCounts() {
    const dengueCount = document.getElementById('dengueCount').value;
    const malariaCount = document.getElementById('malariaCount').value;
  
    try {
      await fetch('http://localhost:3000/api/update-count', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'dengue', value: dengueCount }),
      });
  
      await fetch('http://localhost:3000/api/update-count', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'malaria', value: malariaCount }),
      });
  
      alert('Counts updated successfully!');
    } catch (error) {
      console.error('Error updating counts:', error);
      alert('Error updating counts. Please try again.');
    }
  }
  