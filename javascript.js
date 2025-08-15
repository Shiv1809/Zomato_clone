document.addEventListener("DOMContentLoaded", () => {
  // Dynamically add current year to footer
  const footer = document.querySelector("footer");
  const year = new Date().getFullYear();
  const yearElement = document.createElement("p");
  yearElement.innerHTML = `&copy; ${year} All rights reserved`;
  footer.appendChild(yearElement);

  // Logo zoom on hover
  const logo = document.querySelector("header .logo img");
  if (logo) {
    logo.addEventListener("mouseenter", () => {
      logo.style.transition = "transform 0.3s ease";
      logo.style.transform = "scale(1.1)";
    });

    logo.addEventListener("mouseleave", () => {
      logo.style.transform = "scale(1)";
    });
  }

  // Search bar enter key
  const searchInput = document.querySelector("input[placeholder='search for restaurant']");
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && searchInput.value.trim() !== "") {
        alert(`Searching for "${searchInput.value.trim()}"...`);
        searchInput.value = "";
      }
    });
  }

  // Animate numbers in table
  const headers = document.querySelectorAll("table h1");
  headers.forEach(header => {
    const finalVal = parseInt(header.textContent.replace(/[^0-9]/g, ""));
    let count = 0;
    const step = Math.ceil(finalVal / 100);
    const interval = setInterval(() => {
      count += step;
      if (count >= finalVal) {
        header.textContent = header.textContent.includes("billion")
          ? "3 billion+"
          : finalVal.toLocaleString() + "+";
        clearInterval(interval);
      } else {
        header.textContent = count.toLocaleString() + "+";
      }
    }, 15);
  });
});
