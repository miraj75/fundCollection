const modal = document.getElementById('modal');

function showModal() {
    modal.classList.remove('hidden');
  }

  // Function to hide modal
  function hideModal() {
    modal.classList.add('hidden');
  }


  closeModal.addEventListener('click', hideModal);

    // Hide modal on background click
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        hideModal();
      }
    });