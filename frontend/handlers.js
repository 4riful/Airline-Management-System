// Function to delete a flight
  function deleteFlight(id) {
    fetch(`http://localhost:3000/flights/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          const row = document.querySelector(`tr[data-flight-id="${id}"]`);
          if (row) {
            row.remove();
          }
        } else {
          console.error('Error deleting flight:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error deleting flight:', error);
      });
  }
  