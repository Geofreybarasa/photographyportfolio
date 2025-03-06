document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const imageNature = document.querySelector('.image-nature');
    const imageCity = document.querySelector('.city');
    const imageNairobi = document.querySelector('.nairobi');
    const videosSection = document.querySelector('.videos');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Filter images and videos
            if (filter === 'all') {
                imageNature.style.display = 'flex'; // Show nature images
                imageCity.style.display = 'flex'; // Show city images
                imageNairobi.style.display = 'flex'; // Show nairobi images
                videosSection.style.display = 'block'; // Show videos
            } else if (filter === 'nature') {
                imageNature.style.display = 'flex'; // Show nature images
                imageCity.style.display = 'none'; // Hide city images
                imageNairobi.style.display = 'none'; // Hide nairobi images
                videosSection.style.display = 'none'; // Hide videos
            } else if (filter === 'city') {
                imageNature.style.display = 'none'; // Hide nature images
                imageCity.style.display = 'flex'; // Show city images
                imageNairobi.style.display = 'none'; // Hide nairobi images
                videosSection.style.display = 'none'; // Hide videos
            } else if (filter === 'nairobi') {
                imageNature.style.display = 'none'; // Hide nature images
                imageCity.style.display = 'none'; // Hide city images
                imageNairobi.style.display = 'flex'; // Show nairobi images
                videosSection.style.display = 'none'; // Hide videos
            } else if (filter === 'video') {
                imageNature.style.display = 'none'; // Hide nature images
                imageCity.style.display = 'none'; // Hide city images
                imageNairobi.style.display = 'none'; // Hide nairobi images
                videosSection.style.display = 'block'; // Show videos
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset(); // Clear the form
        } else {
            alert('Please fill out all fields.');
        }
    });
});