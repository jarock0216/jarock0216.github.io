// Example alert data
const alerts = [
  "Weapon detected at 10:32 AM",
  "Mask detected at 11:15 AM",
  "Suspicious movement at 12:04 PM"
];

// Example visitor log data
const logs = [
  { time: "2025-09-16 10:32", type: "Weapon", snapshot: "Image Placeholder" },
  { time: "2025-09-16 11:15", type: "Mask", snapshot: "Image Placeholder" },
  { time: "2025-09-16 12:04", type: "Suspicious Movement", snapshot: "Image Placeholder" }
];

// Update dashboard stats
const alertCount = document.getElementById("alerts-count");
if (alertCount) alertCount.textContent = alerts.length;

const trafficCount = document.getElementById("traffic-count");
if (trafficCount) trafficCount.textContent = 2; // example data

// Populate alerts list
const alertList = document.getElementById("alert-list");
if (alertList) {
  alertList.innerHTML = "";
  alerts.forEach(alert => {
    const li = document.createElement("li");
    li.textContent = alert;
    alertList.appendChild(li);
  });
}

// Populate logs table
const logTable = document.getElementById("log-table");
if (logTable) {
  logTable.innerHTML = "";
  logs.forEach(log => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${log.time}</td>
      <td>${log.type}</td>
      <td>${log.snapshot}</td>
    `;
    logTable.appendChild(row);
  });
}