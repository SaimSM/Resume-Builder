// // script.ts

// function toggleSection(sectionId: string, buttonId: string) {
//     const section = document.getElementById(sectionId);
//     const button = document.getElementById(buttonId);
// }
// button.addEventListener('click'), (bu) => {
//     section.classList.toggle('hidden');
//     button.textContent}

// script.ts

// function toggleSection(sectionId: string, buttonId: string) {
//     const section = document.getElementById(sectionId);
//     const button = document.getElementById(buttonId);

//     if (section && button) {
//         button.addEventListener('click', () => {
//             section.classList.toggle('hidden');
//             if (section.classList.contains('hidden')) {
//                 button.textContent = 'Show';
//             } else {
//                 button.textContent = 'Hide';
//             }
//         });
//     } else {
//         console.error(`Error: Unable to find section or button with id ${sectionId} or ${buttonId}`);
//     }
// }

// // Call the toggleSection function for each section
// toggleSection('skills', 'toggle-skills');
// toggleSection('work-experience', 'toggle-work-experience');

// const skillsSection = document.getElementById('skills');
// const educationSection = document.getElementById('education');
// const workExperienceSection = document.getElementById('work-experience');

// const toggleSkillsButton = document.getElementById('toggle-skills');
// const toggleEducationButton = document.getElementById('toggle-education');
// const toggleWorkExperienceButton = document.getElementById('toggle-work-experience');

// toggleSkillsButton?.addEventListener('click', () => {
//   if (skillsSection) {
//     skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
//   }
// });

// toggleEducationButton?.addEventListener('click', () => {
//   if (educationSection) {
//     educationSection.style.display = educationSection.style.display === 'none' ? 'block' : 'none';
//   }
// });

// toggleWorkExperienceButton?.addEventListener('click', () => {
//   if (workExperienceSection) {
//     workExperienceSection.style.display = workExperienceSection.style.display === 'none' ? 'block' : 'none';
//   }
// });





const skillsSection = document.getElementById('skills');
const educationSection = document.getElementById('education');
const workExperienceSection = document.getElementById('work-experience');

const toggleSkillsButton = document.getElementById('toggle-skills');
const toggleEducationButton = document.getElementById('toggle-education');
const toggleWorkExperienceButton = document.getElementById('toggle-work-experience');

toggleSkillsButton?.addEventListener('click', () => {
  if (skillsSection) {
    skillsSection.classList.toggle('hidden');
  }
});

toggleEducationButton?.addEventListener('click', () => {
  if (educationSection) {
    educationSection.classList.toggle('hidden');
  }
});

toggleWorkExperienceButton?.addEventListener('click', () => {
  if (workExperienceSection) {
    workExperienceSection.classList.toggle('hidden');
  }
});

// Optional: You can add transition effects for toggling sections in CSS to make it more fluid.
