(function (Drupal) {
    Drupal.behaviors.darkModeToggle = {
        attach: function (context, settings) {
            once('darkModeToggle', 'body', context).forEach(function () {
                // Get the checkbox input by its ID
                const darkModeCheckbox = document.getElementById('dark-mode');

                // Check if the checkbox exists
                if (darkModeCheckbox) {
                    // Add an event listener for the 'change' event
                    darkModeCheckbox.addEventListener('change', function () {
                        // Check if the checkbox is checked
                        if (darkModeCheckbox.checked) {
                            // Add the 'dark-mode' class to the body tag
                            document.body.classList.add('dark-mode');
                        } else {
                            // Remove the 'dark-mode' class from the body tag
                            document.body.classList.remove('dark-mode');
                        }
                    });
                }
            });
        }
    };
})(Drupal);
