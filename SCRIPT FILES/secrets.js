const wordInput = document.getElementById('usrIn');
            const showButton = document.getElementById('showButton');

            // Add an event listener for the Enter key
            wordInput.addEventListener('keyup', function (event) {
                if (event.key === 'Enter') {
                    checkWord();
                }
            });

            // Function to check for the word "compass" and show the button
            function checkWord() {
                const inputValue = wordInput.value.toLowerCase();
                if (inputValue === 'paigersongs') {
                    showButton.style.display = 'block'; // Display the button
                } else {
                    showButton.style.display = 'none'; // Hide the button
                }
            }