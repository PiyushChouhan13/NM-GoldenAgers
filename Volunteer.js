document.addEventListener("DOMContentLoaded", function () {
    // Sample data for the four graphs
    var labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    var sugarData = [110, 120, 115, 130, 125, 120];
    var cholesterolData = [180, 170, 175, 185, 190, 195];
    var bloodPressureData = [120, 130, 125, 140, 130, 135];
    var uricAcidData = [5.5, 6.0, 5.8, 6.2, 6.1, 5.9];

    var smallChartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                max: 200, // Adjust the maximum value as needed
            }
        }
    };

    createSmallChart('sugar-chart', 'Sugar', sugarData, smallChartOptions);
    createSmallChart('cholesterol-chart', 'Cholesterol', cholesterolData, smallChartOptions);
    createSmallChart('blood-pressure-chart', 'Blood Pressure', bloodPressureData, smallChartOptions);
    createSmallChart('uric-acid-chart', 'Uric Acid', uricAcidData, smallChartOptions);

    function createSmallChart(id, label, data, options) {
        var ctx = document.getElementById(id).getContext('2d');
        var chartData = {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                backgroundColor: 'rgb(164, 66, 123)',
            }]
        };

        var chart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: options,
        });
    }
});


document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const scrollOptions = {
                behavior: 'smooth',
            };
            
            targetElement.scrollIntoView(scrollOptions);
        }
    });
});
// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

// Add a click event listener to the "Home" link
document.getElementById('home-link').addEventListener('click', function() {
    scrollToTop();
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    if (slides.length === 0) return;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds (adjust as needed)
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n < 1) {
        slideIndex = slides.length;
    }
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}