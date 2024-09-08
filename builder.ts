// Capture the form and the section where the generated resume will be displayed
const form = document.getElementById('resumeBuilderForm') as HTMLFormElement;
const resumeDisplay = document.getElementById('generated-resume') as HTMLElement;

// Ensure the form and resume display exist
if (!form || !resumeDisplay) {
    console.error('Form or resume display section not found');
} else {
    // Handle form submission
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // Prevent page reload

        // Collect form values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const degree = (document.getElementById('degree') as HTMLInputElement).value;
        const institution = (document.getElementById('institution') as HTMLInputElement).value;
        const gradYear = (document.getElementById('gradYear') as HTMLInputElement).value;
        const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
        const company = (document.getElementById('company') as HTMLInputElement).value;
        const jobDescription = (document.getElementById('jobDescription') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

        // Generate the resume dynamically
        resumeDisplay.innerHTML = `
            <div class="personal-header">
                <h1>${name}</h1>
                <p>${email} | ${phone}</p>
            </div>
            <hr>
            <section id="education">
                <h2>Education</h2>
                <ul>
                    <li><strong>${degree}</strong>, ${institution} (Expected Graduation: ${gradYear})</li>
                </ul>
            </section>
            <section id="work-experience">
                <h2>Work Experience</h2>
                <ul>
                    <li><strong>${jobTitle}</strong>, ${company}</li>
                    <p>${jobDescription}</p>
                </ul>
            </section>
            <section id="skills">
                <h2>Skills</h2>
                <ul>
                    ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
                </ul>
            </section>
        `;
    });
}
