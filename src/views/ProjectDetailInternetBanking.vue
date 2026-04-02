<template>
  <div class="project-detail-container">
    <!-- Header Section -->
    <header class="project-header">
      <h1>{{ t(projectData.title) }}</h1>
      <h2>{{ t(projectData.subtitle) }}</h2>
      <div class="project-meta">
        <span>Year: {{ projectData.year }}</span>
        <span>Role: {{ t(projectData.role) }}</span>
      </div>
    </header>

    <main class="project-content">
      <!-- Overview Section -->
      <section class="project-overview">
        <h2>{{ t({en: 'Overview', vi: 'Tổng quan'}) }}</h2>
        <p>{{ t(projectData.overview) }}</p>
      </section>

      <!-- Tech Stack Section -->
      <section class="tech-stack-section">
        <h2>{{ t({en: 'Tech Stack', vi: 'Công nghệ sử dụng'}) }}</h2>
        <ul>
          <li v-for="tech in projectData.techStack" :key="tech">{{ tech }}</li>
        </ul>
      </section>

      <!-- Process & Timeline Section -->
      <section class="process-timeline">
        <h2>{{ t({en: 'Process & Timeline', vi: 'Quy trình & Tiến độ'}) }}</h2>
        <ul>
          <li v-for="(step, index) in projectData.processSteps" :key="index">
            <h3>{{ t(step.title) }}</h3>
            <p>{{ t(step.description) }}</p>
          </li>
        </ul>
      </section>

      <!-- Image Gallery Section -->
      <section class="image-gallery">
        <h2>{{ t({en: 'Gallery & Results', vi: 'Thư viện & Kết quả'}) }}</h2>
        <div class="bento-grid">
          <div v-for="(img, index) in projectData.galleryImgs" :key="index" :class="['bento-item', img.type, img.aspect]">
            <div class="bento-content">
              <img :src="img.src" :alt="t(img.title)" :class="{ 'scrollable-image': img.type === 'scrollable' }"/>
              <div class="bento-overlay">
                <h3>{{ t(img.title) }}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Challenges & Solutions Section -->
      <section class="challenges-solutions">
        <h2>{{ t({en: 'Challenges & Solutions', vi: 'Thách thức & Giải pháp'}) }}</h2>
        <p>{{ t(projectData.problem) }}</p>
      </section>

      <!-- Results Section -->
      <section class="results-section">
        <h2>{{ t({en: 'Results', vi: 'Kết quả đạt được'}) }}</h2>
        <ul>
          <li v-for="(result, index) in projectData.results" :key="index">
            <strong>{{ result.value }}{{ result.suffix }}</strong> {{ t(result.label) }}
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getProjectBySlug } from '@/data/projects'; // Import the helper function

const projectData = ref(null);
const currentLang = ref('vi'); // Default to Vietnamese

onMounted(async () => {
  // Fetch data for the 'internet-banking' slug
  projectData.value = getProjectBySlug('internet-banking', currentLang.value);
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

.project-header h2 { /* Subtitle style */
  font-size: 1.4em;
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

/* Image Gallery Styles */
.image-gallery {
  margin-top: 40px;
}

.image-gallery h2 {
  text-align: center;
  margin-bottom: 30px;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid */
  gap: 15px;
  grid-auto-rows: 200px; /* Default row height, will be adjusted by aspect ratio */
}

.bento-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.bento-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.2);
}

.bento-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bento-content img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the area, might crop */
  transition: transform 0.5s ease;
}

/* Specific styling for different image types */
.bento-item.bento .bento-content img {
  object-fit: cover; /* Bento items cover the area */
}

.bento-item.scrollable .bento-content img {
  object-fit: contain; /* For scrollable images, show the whole image */
  height: auto; /* Allow height to adjust */
  max-height: 100%; /* Ensure it doesn't exceed container */
  overflow-y: auto; /* Enable scroll if needed */
}

.bento-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.bento-item:hover .bento-overlay {
  opacity: 1;
}

/* Aspect Ratio Adjustments for Bento Grid */
.bento-item.bento.wide {
  grid-column: span 2; /* Example: make wide items span 2 columns */
}
.bento-item.bento.tall {
  grid-row: span 2; /* Example: make tall items span 2 rows */
}
.bento-item.bento.square {
  /* Default square item */
  grid-column: span 1;
  grid-row: span 1;
}

/* Responsive adjustments for grid */
@media (max-width: 768px) {
  .bento-grid {
    grid-template-columns: 1fr; /* Stack items on smaller screens */
    grid-auto-rows: 300px; /* Adjust height for mobile */
  }
  .bento-item.bento.wide,
  .bento-item.bento.tall {
    grid-column: span 1; /* Reset spans on mobile */
    grid-row: span 1;
  }
}
</style>
