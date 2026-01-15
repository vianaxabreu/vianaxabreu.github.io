// Define o conteúdo de cada seção
const sections = {
  home: `
    <h1 style="text-align:center;">Hi, I'm Alex</h1>
    <p class="intro-text">
      SAP TM/SD Consultant and data professional, specialized in transforming data into practical business solutions.
      Experience in analytics, data engineering, and clear technical documentation, connecting technical teams and stakeholders.
    </p>
  `,
  projects: `
    <h1 style="text-align:center;">Projects</h1>
    <p class="intro-text">
      Here are some of the projects I’ve worked on
    </p>
    <div id="projects-grid">
      <!-- Aqui você pode inserir seus cards de projetos -->
    </div>
  `,
  contact: `
  <h1 style="text-align:center;">Talk to me</h1>
    <p class="intro-text" style="text-align:center;">
      Email: <a href="mailto:a.viana@viana-tech-consulting.de">a.viana@viana-tech-consulting.de</a><br>
      LinkedIn: <a href="https://linkedin.com/in/vianaalex" target="_blank">vianaalex</a>
    </p>
  `,
  impressum: `
    <h1 style="text-align:center;">Impressum</h1>
    <p class="intro-text" style="text-align:center;">
      Alexsandro Viana<br>
      Schöneberg, 
      10783 Berlin, 
      Germany<br>
      Email: <a href="mailto:a.viana@viana-tech-consulting.de">a.viana@viana-tech-consulting.de</a><br>
      Umsatzsteuer-ID: X
    </p>
  `
};

// Função para trocar o conteúdo do main
function showSection(name) {
  const content = document.getElementById('content');
  content.innerHTML = sections[name];

  // Só depois de inserir no DOM, chamamos renderProjects
  if (name === 'projects') {
    // Pequeno delay garante que a div foi inserida
    setTimeout(renderProjects, 0);
  }
}

// Carrega a seção inicial (Home)
showSection('home');







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
  },
];

// Render projects
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return; // garante que a div existe
  grid.innerHTML = ""; // limpa antes de renderizar
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
}


