function runSpeedTest() {
    var liveDataDiv = document.getElementById("liveData");
    var resultDiv = document.getElementById("result");
    var finalResultDiv = document.getElementById("finalResult");

    var totalTime = 15; // 15 seconds test duration
    var elapsedTime = 0;

    var totalDownload = 0;
    var totalUpload = 0;

    var prevDownloadSpeed = 0;
    var prevUploadSpeed = 0;

    var interval = setInterval(function() {
        // Simulate download and upload speed every second
        var downloadSpeed = (Math.random() * 100).toFixed(2); // Simulate download speed
        var uploadSpeed = (Math.random() * 50).toFixed(2); // Simulate upload speed

        // Add the speeds to total values for averaging
        totalDownload += parseFloat(downloadSpeed);
        totalUpload += parseFloat(uploadSpeed);

        // Display live data
        liveDataDiv.innerHTML = 
            "Live Speed - Download: " + downloadSpeed + " Mbps, Upload: " + uploadSpeed + " Mbps";

        // Update download circle animation
        var downloadArc = document.getElementById("downloadArc");
        var downloadText = document.getElementById("downloadSpeed");
        var downloadDiff = downloadSpeed - prevDownloadSpeed;
        var downloadProgress = (downloadSpeed / 100) * 440; // Max circumference (440)
        downloadArc.style.strokeDashoffset = 440 - downloadProgress;

        if (downloadDiff > 0) {
            downloadArc.style.stroke = '#4CAF50'; // Green for increase
        } else {
            downloadArc.style.stroke = '#F44336'; // Red for decrease
        }
        prevDownloadSpeed = downloadSpeed;

        // Update upload circle animation
        var uploadArc = document.getElementById("uploadArc");
        var uploadText = document.getElementById("uploadSpeed");
        var uploadDiff = uploadSpeed - prevUploadSpeed;
        var uploadProgress = (uploadSpeed / 50) * 440; // Max circumference (440)
        uploadArc.style.strokeDashoffset = 440 - uploadProgress;

        if (uploadDiff > 0) {
            uploadArc.style.stroke = '#4CAF50'; // Green for increase
        } else {
            uploadArc.style.stroke = '#F44336'; // Red for decrease
        }
        prevUploadSpeed = uploadSpeed;

        // Update the speed values in text
        downloadText.innerHTML = downloadSpeed + " Mbps";
        uploadText.innerHTML = uploadSpeed + " Mbps";

        elapsedTime++;

        // After 15 seconds, stop the interval and show the average
        if (elapsedTime >= totalTime) {
            clearInterval(interval);
            var avgDownload = (totalDownload / totalTime).toFixed(2);
            var avgUpload = (totalUpload / totalTime).toFixed(2);
            
            resultDiv.innerHTML = "Test completed!";
            finalResultDiv.innerHTML = "Average Speed - Download: " + avgDownload + " Mbps, Upload: " + avgUpload + " Mbps";
        }
    }, 1000); // Update every second
}