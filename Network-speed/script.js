
        function runSpeedTest() {
            var liveDataDiv = document.getElementById("liveData");
            var totalTime = 15; // 15 seconds test duration
            var elapsedTime = 0;

            var interval = setInterval(function() {
                // Simulate download and upload speed every second
                var downloadSpeed = (Math.random() * 100).toFixed(2); // Simulate download speed
                var uploadSpeed = (Math.random() * 50).toFixed(2); // Simulate upload speed

                // Display live data
                liveDataDiv.innerHTML = 
                    "Live Speed - Download: " + downloadSpeed + " Mbps, Upload: " + uploadSpeed + " Mbps";

                elapsedTime++;

                // After 15 seconds, stop the interval
                if (elapsedTime >= totalTime) {
                    clearInterval(interval);
                    document.getElementById("result").innerHTML = "Test completed!";
                }
            }, 1000); // Update every second
        }

