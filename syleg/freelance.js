const toggleButton = document.getElementById('toggleButton');
      const content = document.getElementById('content');
      const backButton = document.getElementById('backButton');

      toggleButton.addEventListener('click', () => {
         content.classList.toggle('hidden');
      });

      backButton.addEventListener('click', () => {
         content.classList.add('hidden');
      });
