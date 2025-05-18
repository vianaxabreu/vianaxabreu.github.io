const projects = [
  {
    title: "Attendance Tracker",
    description: "A web-based attendance system using GitHub login",
    image: "https://image.thum.io/get/width/1000000000/crop/600/https://vianaxabreu.github.io/attendance_page",
    link: "https://vianaxabreu.github.io/attendance_page"
  },
];

// Render projects
const grid = document.getElementById("projects-grid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="project-content">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    </div>
  `;
  grid.appendChild(card);
});


