// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Contact form alert
const contactForm = document.querySelector("#contact form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
  });
}

// Generate Travel Plan
const planForm = document.getElementById("planForm");     // ✅ matches HTML
const resultDiv = document.getElementById("planResult");

if (planForm && resultDiv) {
  planForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const destination = document.getElementById("destination").value.trim();
    const days = parseInt(document.getElementById("days").value, 10);
    const budget = document.getElementById("budget").value; // low/medium/high

    if (!destination || !days || !budget) {
      alert("Please fill all fields to generate a plan.");
      return;
    }

    const budgetText = { low: "Low", medium: "Medium", high: "High" }[budget] || budget;

    // Simple sample plan
    const activities = [
      "City walking tour",
      "Local cuisine tasting",
      "Top landmark visit",
      "Sunset viewpoint",
      "Museum or cultural site",
      "Shopping in local market",
      "Free day / relax"
    ];

    // Build a day-by-day plan
    let daysHtml = "";
    for (let i = 1; i <= days; i++) {
      const idea = activities[(i - 1) % activities.length];
      daysHtml += `<li><strong>Day ${i}:</strong> ${idea} in ${destination}</li>`;
    }

    resultDiv.innerHTML = `
      <div class="plan-output">
        <h3>Your Travel Plan</h3>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Duration:</strong> ${days} days</p>
        <p><strong>Budget:</strong> ${budgetText}</p>
        <h4>Suggested Itinerary</h4>
        <ol>${daysHtml}</ol>
        <p><em>Tip:</em> Book attractions in advance during peak season.</p>
      </div>
    `;

    this.reset();
  });
}
