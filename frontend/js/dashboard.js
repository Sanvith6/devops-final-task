// Dummy stats
document.getElementById("users").innerText = 10;
document.getElementById("products").innerText = 25;

// Chart
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Users', 'Products'],
    datasets: [{
      label: 'System Data',
      data: [10, 25],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true
  }
});