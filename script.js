// Mock data fetching function
function fetchSensorData() {
    // Simulate an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = {
                temperature: (Math.random() * 30 + 10).toFixed(1),
                humidity: (Math.random() * 100).toFixed(1),
                pressure: (Math.random() * 50 + 950).toFixed(1),
                light: (Math.random() * 1000).toFixed(1),
                cpu: `${(Math.random() * 100).toFixed(1)} %`,
                memory: `${(Math.random() * 100).toFixed(1)} %`,
                disk: `${(Math.random() * 100).toFixed(1)} %`,
                network: `${(Math.random() * 100).toFixed(1)} Mbps`
            };
            resolve(data);
        }, 1000);
    });
}

// Update the UI with the fetched data
async function updateData() {
    const data = await fetchSensorData();
    document.getElementById('temperature').innerText = `${data.temperature} °C`;
    document.getElementById('humidity').innerText = `${data.humidity} %`;
    document.getElementById('pressure').innerText = `${data.pressure} hPa`;
    document.getElementById('light').innerText = `${data.light} lux`;
    document.getElementById('cpu').innerText = data.cpu;
    document.getElementById('memory').innerText = data.memory;
    document.getElementById('disk').innerText = data.disk;
    document.getElementById('network').innerText = data.network;
}

// Initial data load
updateData();

// Refresh data every 5 seconds
setInterval(updateData, 5000);
