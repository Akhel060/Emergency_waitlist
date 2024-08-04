document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('patient-form');
    const patientList = document.getElementById('patient-list').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const severity = document.getElementById('severity').value;

        const response = await fetch('../server/index.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, severity }),
        });

        if (response.ok) {
            form.reset();
            loadPatients();
        }
    });

    async function loadPatients() {
        const response = await fetch('../server/index.php');
        const patients = await response.json();
        
        patientList.innerHTML = '';
        patients.forEach(patient => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${patient.name}</td>
                <td>${patient.severity}</td>
                <td>${formatTimeInQueue(patient.time_in_queue)}</td>
            `;
            patientList.appendChild(row);
        });
    }

    function formatTimeInQueue(timestamp) {
        const now = Math.floor(Date.now() / 1000);
        const seconds = now - timestamp;
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
        if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
        if (hours > 0) return `${hours}h ${minutes % 60}m`;
        if (minutes > 0) return `${minutes}m`;
        return `${seconds}s`;
    }

    loadPatients();
});
