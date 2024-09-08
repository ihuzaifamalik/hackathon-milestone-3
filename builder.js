// Capture the form and the section where the generated resume will be displayed
var form = document.getElementById('resumeBuilderForm');
var resumeDisplay = document.getElementById('generated-resume');
// Ensure the form and resume display exist
if (!form || !resumeDisplay) {
    console.error('Form or resume display section not found');
}
else {
    // Handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload
        // Collect form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var degree = document.getElementById('degree').value;
        var institution = document.getElementById('institution').value;
        var gradYear = document.getElementById('gradYear').value;
        var jobTitle = document.getElementById('jobTitle').value;
        var company = document.getElementById('company').value;
        var jobDescription = document.getElementById('jobDescription').value;
        var skills = document.getElementById('skills').value.split(',');
        // Generate the resume dynamically
        resumeDisplay.innerHTML = "\n            <div class=\"personal-header\">\n                <h1>".concat(name, "</h1>\n                <p>").concat(email, " | ").concat(phone, "</p>\n            </div>\n            <hr>\n            <section id=\"education\">\n                <h2>Education</h2>\n                <ul>\n                    <li><strong>").concat(degree, "</strong>, ").concat(institution, " (Expected Graduation: ").concat(gradYear, ")</li>\n                </ul>\n            </section>\n            <section id=\"work-experience\">\n                <h2>Work Experience</h2>\n                <ul>\n                    <li><strong>").concat(jobTitle, "</strong>, ").concat(company, "</li>\n                    <p>").concat(jobDescription, "</p>\n                </ul>\n            </section>\n            <section id=\"skills\">\n                <h2>Skills</h2>\n                <ul>\n                    ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n                </ul>\n            </section>\n        ");
    });
}
