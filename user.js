// Simulate ultrasonic sensor data
function updateSensorData() {
    const distance = Math.floor(Math.random() * 100); // Random distance between 0 and 100 cm
    document.getElementById('distance').innerText = distance;
}

// Event listeners for buttons
document.getElementById('pick').addEventListener('click', () => alert('Pick action'));
document.getElementById('drop').addEventListener('click', () => alert('Drop action'));
document.getElementById('forward').addEventListener('click', () => alert('Forward action'));
document.getElementById('backward').addEventListener('click', () => alert('Backward action'));

// Update sensor data every second
setInterval(updateSensorData, 1000);
