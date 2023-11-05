//Health Details

document.addEventListener("DOMContentLoaded", function () {
    var labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    var sugarData = [110, 120, 115, 130, 125, 120];
    var cholesterolData = [180, 170, 175, 185, 190, 195];
    var bloodPressureData = [120, 130, 125, 140, 130, 135];
    var uricAcidData = [5.5, 6.0, 5.8, 6.2, 6.1, 5.9];

    var smallChartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                max: 200, 
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

//Scroll Function

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

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

document.getElementById('home-link').addEventListener('click', function() {
    scrollToTop();
});


//News API

//8564e15a607b48928a0208a6ec1512b6