document.addEventListener("DOMContentLoaded", function () {
    // const menuLinks = document.querySelectorAll(".menu li.nav-item a");

    // menuLinks.forEach(link => {
    //     link.addEventListener("click", function (e) {
    //         //   e.preventDefault();
    //         menuLinks.forEach(link => link.classList.remove("active"));
    //         this.classList.add("active");
    //     });
    // });

    const darkModeToggle = document.querySelector('.dark-mode input[type="checkbox"]');

    darkModeToggle.addEventListener('change', function () {
        const isDark = this.checked;

        if (isDark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }

        updateChartTheme(isDark);
    });

    const isDarkInitially = document.body.classList.contains('dark-mode');
    updateChartTheme(isDarkInitially);
});

function updateChartTheme(isDark) {
    const textColor = isDark ? '#ffffff' : '#000000';
    const gridColor = isDark ? '#444' : '#e0e0e0';

    // Update Time Bar Chart
    chart.updateOptions({
        xaxis: {
            labels: { style: { colors: textColor } }
        },
        yaxis: {
            labels: { style: { colors: textColor } }
        },
        legend: {
            labels: { colors: textColor }
        },
        grid: {
            borderColor: gridColor
        },
        dataLabels: {
            style: {
                colors: [textColor]
            }
        }
    });

    // Update Tickets Line Chart
    ticketsChart.updateOptions({
        xaxis: {
            labels: { style: { colors: textColor } }
        },
        yaxis: {
            labels: { style: { colors: textColor } }
        },
        legend: {
            labels: { colors: textColor }
        },
        grid: {
            borderColor: gridColor
        }
    });

    // Update Attachments Donut Chart
    attachmentsChart.updateOptions({
        legend: {
            labels: { colors: textColor }
        },
        dataLabels: {
            style: { colors: [textColor] }
        }
    });
}