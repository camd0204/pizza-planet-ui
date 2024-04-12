
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
  });
  
  async function fetchData() {
    try {
      const response = await fetch("http://127.0.0.1:5000/report/");
      const data = await response.json();
  
      displayData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  function displayData(data) {
    const template = document.getElementById("report-template");
    const report = document.getElementById("report");
    const clone = document.importNode(template.content, true);
  
    // Populate the template with data
    clone.getElementById("top_customers").innerHTML = `
      <p>${data.top_customers[0].name} - ${data.top_customers[0].total} orders</p>
      <p>${data.top_customers[1].name} - ${data.top_customers[1].total} orders</p>
      <p>${data.top_customers[2].name} - ${data.top_customers[2].total} orders</p>
    `;
  
    clone.getElementById("top_ingredient").textContent = `${data.top_ingredient.name} - ${data.top_ingredient.total}`;
  
    clone.getElementById("most_earning_month").textContent = `${data.most_earning_month.month} - $${data.most_earning_month.total}`;
  
    // Append the populated template to the report container
    report.appendChild(clone);
  }