document.addEventListener('DOMContentLoaded', function() {
    // Toggle Dark Mode
    const darkModeToggle = document.getElementById('darkMode');
    const body = document.body;

    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });

    // Initialize Charts
    fetch('getServerHealthData.php')
        .then(response => response.json())
        .then(data => {
            const ctx1 = document.getElementById('serverHealthChart').getContext('2d');
            new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: data.timestamps,
                    datasets: [
                        {
                            label: 'CPU Usage (%)',
                            data: data.cpu_usage,
                            borderColor: 'rgba(255, 99, 132, 1)',
                            fill: false,
                            tension: 0.1
                        },
                        {
                            label: 'Memory Usage (%)',
                            data: data.memory_usage,
                            borderColor: 'rgba(54, 162, 235, 1)',
                            fill: false,
                            tension: 0.1
                        }
                    ]
                }
            });
        });

    fetch('getBandwidthUsageData.php')
        .then(response => response.json())
        .then(data => {
            const ctx2 = document.getElementById('bandwidthChart').getContext('2d');
            new Chart(ctx2, {
                type: 'line',
                data: {
                    labels: data.timestamps,
                    datasets: [
                        {
                            label: 'Download Speed (Mbps)',
                            data: data.download_speed,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            fill: false,
                            tension: 0.1
                        },
                        {
                            label: 'Upload Speed (Mbps)',
                            data: data.upload_speed,
                            borderColor: 'rgba(153, 102, 255, 1)',
                            fill: false,
                            tension: 0.1
                        }
                    ]
                }
            });
        });

    fetch('getServerStatusData.php')
        .then(response => response.json())
        .then(data => {
            const statusList = document.getElementById('serverStatusList');
            data.forEach(server => {
                const li = document.createElement('li');
                li.textContent = `${server.server_name}: ${server.status}`;
                li.style.backgroundColor = server.status === 'UP' ? '#d4edda' : '#f8d7da';
                statusList.appendChild(li);
            });
        });
});
