<template>
  <div class="project-detail-container">
    <!-- Placeholder for Header -->
    <header class="project-header">
      <h1></h1>
      <p></p>
      <div class="project-meta">
        <span></span>
        <span></span>
      </div>
    </header>

    <main class="project-content">
      <!-- Content sections will be added here -->
      <section class="project-overview">
        <h2></h2>
        <p></p>
      </section>

      <section class="tech-stack-section">
        <h2></h2>
        <ul>
          <!-- Tech stack items -->
        </ul>
      </section>

      <section class="process-timeline">
        <h2></h2>
        <!-- Timeline steps will be rendered here -->
      </section>

      <section class="image-gallery">
        <h2></h2>
        <!-- Gallery items will be rendered here -->
      </section>
      
      <section class="challenges-solutions">
        <h2></h2>
        <!-- Challenges and solutions -->
      </section>

      <section class="results-section">
        <h2></h2>
        <!-- Results -->
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// Assuming project data is fetched or imported
// import { getProjectBySlug } from '@/data/projects'; // Example import

const projectData = ref(null);
const currentLang = ref('vi'); // Default to Vietnamese

onMounted(async () => {
  // In a real app, you would fetch data based on route param or similar
  // For now, simulating data loading
  // projectData.value = getProjectBySlug('internet-banking', currentLang.value);

  // Dummy data for initial structure
  projectData.value = {
    title: { en: "Internet Banking Project", vi: "Dự án Internet Banking" },
    subtitle: { en: "Enterprise Banking Platform", vi: "Nền tảng Ngân hàng Doanh nghiệp" },
    role: { en: "Collaborator", vi: "Cộng tác viên" },
    year: "2025",
    techStack: ["Java", "Spring Boot", "Next.js", "Vue.js", "PostgreSQL"],
    overview: { en: "Details about the project overview...", vi: "Chi tiết về tổng quan dự án..." },
    problem: { en: "Challenges faced...", vi: "Các thách thức đã gặp..." },
    processSteps: [
      { title: { en: "Step 1", vi: "Bước 1" }, description: { en: "Description 1", vi: "Mô tả 1" } },
      { title: { en: "Step 2", vi: "Bước 2" }, description: { en: "Description 2", vi: "Mô tả 2" } },
    ],
    results: [
      { value: 10, suffix: "+", label: { en: "Services", vi: "Dịch vụ" } }
    ],
    galleryImgs: [
      { src: "/portfolio/image/projects/internet-banking/screencapture-localhost-3001-dashboard-2026-03-30-14_52_45.png", type: "bento", aspect: "wide", title: {en: "Dashboard", vi: "Dashboard"} },
      { src: "/portfolio/image/projects/internet-banking/screencapture-localhost-3001-login-2026-03-30-09_49_40.png", type: "bento", aspect: "square", title: {en: "Login", vi: "Đăng nhập"} }
    ]
  };
});

// Basic translation helper for dynamic content
const t = (text) => {
  if (!text) return '';
  return typeof text === 'object' ? (text[currentLang.value] || text['en']) : text;
};
</script>

<style scoped>
.project-detail-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: 'Arial', sans-serif; /* Example font */
}

.project-header {
  text-align: center;
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}

.project-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #333;
}

.project-header p {
  font-size: 1.2em;
  color: #555;
  margin-bottom: 15px;
}

.project-meta {
  font-size: 0.9em;
  color: #777;
}

.project-meta span {
  margin: 0 15px;
}

.project-content section {
  margin-bottom: 40px;
}

.project-content h2 {
  font-size: 1.8em;
  margin-bottom: 20px;
  color: #333;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

.project-content p {
  font-size: 1em;
  color: #444;
  line-height: 1.6;
}

.tech-stack-section ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-stack-section li {
  background-color: #e0e0e0;
  color: #333;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 0.9em;
}

.process-timeline ul {
  list-style: none;
  padding-left: 0;
  position: relative;
}

.process-timeline li {
  margin-bottom: 25px;
  position: relative;
  padding-left: 30px; /* Space for timeline marker */
}

.process-timeline li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  width: 10px;
  height: 10px;
  background-color: #007bff; /* Primary color */
  border-radius: 50%;
}

.process-timeline li:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 4px;
  top: 20px; /* Start after the marker */
  height: calc(100% - 20px); /* Extend to bottom of the li */
  width: 2px;
  background-color: #007bff; /* Primary color */
}

.process-timeline h3 {
  font-size: 1.2em;
  color: #333;
  margin-bottom: 5px;
}

.process-timeline p {
  font-size: 0.95em;
  color: #555;
}

/* Add styles for Image Gallery and other sections as needed */
.image-gallery {
  /* Basic placeholder style */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.image-gallery h2 {
  grid-column: 1 / -1; /* Span across all columns */
}
</style>
