(function (Drupal) {
    Drupal.behaviors.iframeVideo = {
        attach: function (context, settings) {
            var gradients = context.querySelectorAll('.iframe-gradient');

            gradients.forEach(function (gradient) {
                gradient.addEventListener('click', function () {
                    var wrapper = this.closest('.iframe-video__iframe');
                    this.classList.add('d-none');

                    if (wrapper) {
                        var iframe = wrapper.querySelector('iframe');

                        if (iframe) {
                            // Get the current src of the iframe
                            var src = iframe.getAttribute('src');

                            if (!src.includes('autoplay=1')) {
                                // Add autoplay=1 to the src
                                src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
                                iframe.setAttribute('src', src);
                            }
                        }
                    }
                });
            });
        }
    };
})(Drupal);