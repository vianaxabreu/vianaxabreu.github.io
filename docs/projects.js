// =========================
// SECTION CONTENTS
// =========================
const sections = {
  home: `
    <h1 class="section-title">Hi, I'm Alex</h1>
    <p class="intro-text">
      SAP TM/SD Consultant and data professional, specialized in transforming data into practical business solutions.
      Experience in analytics, data engineering, and clear technical documentation, connecting technical teams and stakeholders.
    </p>
  `,
  projects: `
    <h1 class="section-title">Projects</h1>
    <p class="intro-text">
      Here are some of the projects I’ve worked on
    </p>
    <div id="projects-grid"></div>
  `,
  contact: `
    <h1 class="section-title">Talk to me</h1>
    <p class="intro-text">
      Email: <a href="mailto:a.viana@viana-tech-consulting.de">a.viana@viana-tech-consulting.de</a><br>
      LinkedIn: <a href="https://linkedin.com/in/vianaalex" target="_blank">vianaalex</a>
    </p>
  `,
  impressum: `
    <h1 class="section-title">Impressum</h1>
    <p class="intro-text">
      Alexsandro Viana<br>
      Schöneberg, 10783 Berlin, Germany<br>
      Email: <a href="mailto:a.viana@viana-tech-consulting.de">a.viana@viana-tech-consulting.de</a><br>
      Umsatzsteuer-ID: X
    </p>
  `
};

// =========================
// PROJECT DATA
// =========================
const projects = [
  {
    title: "Attendance Tracker",
    description: "A web-based attendance system using GitHub login",
    image: "https://image.thum.io/get/width/1000000000/crop/600/https://vianaxabreu.github.io/attendance_page",
    link: "https://vianaxabreu.github.io/attendance_page/readme"
  },
  {
    title: "Greeweez Data Warehouse",
    description: "Data modeling with dbt in BigQuery for clean analytics",
    image: "https://image.thum.io/get/width/1000000000/crop/600/https://vianaxabreu.github.io/dbt_greenweez/",
    link: "https://vianaxabreu.github.io/dbt_greenweez/"
  }
];

// =========================
// DOM ELEMENTS
// =========================
const content = document.getElementById('content');
const hamburger = document.querySelector('.hamburger');
const mobileOverlay = document.querySelector('.mobile-overlay');

// =========================
// MENU TOGGLE
// =========================
hamburger.addEventListener('click', () => {
  mobileOverlay.classList.toggle('open');
});

// Fechar overlay e mudar seção ao clicar nos links mobile
mobileOverlay.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // impede comportamento padrão
    const target = link.getAttribute('href').replace('#',''); // pega id da seção
    showSection(target); // muda a seção
    mobileOverlay.classList.remove('open'); // fecha overlay
  });
});

// =========================
// SECTION SWITCHING
// =========================
function showSection(name) {
  content.innerHTML = sections[name] || '';
  if (name === 'projects') renderProjects();
}

// Desktop menu links
document.querySelectorAll('.navbar-left a, .navbar-right a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href').replace('#','');
    showSection(target);
  });
});

// =========================
// RENDER PROJECT CARDS
// =========================
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
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
}

// =========================
// INITIAL LOAD
// =========================
showSection('home');
