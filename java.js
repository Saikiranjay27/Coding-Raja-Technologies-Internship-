function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const objective = document.getElementById('objective').value;
    const education = document.getElementById('education').value;
    const projects = document.getElementById('projects').value;
    const skills = document.getElementById('skills').value;
    const awards = document.getElementById('awards').value;
    const strengths = document.getElementById('strengths').value;
    const certifications = document.getElementById('certifications').value;
    const declaration = document.getElementById('declaration').value;

    const previewContent = `
        <div class="header">
            <h2>${name}</h2>
            <p>${address}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
        </div>
        <section>
            <h3>Career Objective</h3>
            <p>${objective.replace(/\n/g, "<br>")}</p>
        </section>
        <section>
            <h3>Educational Qualifications</h3>
            <p>${education.replace(/\n/g, "<br>")}</p>
        </section>
        <section>
            <h3>Technical Projects</h3>
            <p>${projects.replace(/\n/g, "<br>")}</p>
        </section>
        <section>
            <h3>Technical Skills</h3>
            <p>${skills.replace(/\n/g, "<br>")}</p>
        </section>
        <section>
            <h3>Awards/Achievements</h3>
            <p>${awards.replace(/\n/g, "<br>")}</p>
        </section>
        <section>
            <h3>Strengths</h3>
            <p>${strengths.replace(/\n/g, "<br>")}</p>
        </section>
        <section>
            <h3>Certifications</h3>
            <p>${certifications.replace(/\n/g, "<br>")}</p>
        </section>
        <section>
            <h3>Declaration</h3>
            <p>${declaration.replace(/\n/g, "<br>")}</p>
        </section>
    `;

    document.getElementById('resumePreview').innerHTML = previewContent;
}

function downloadPDF() {
    const resumeContent = document.getElementById('resumePreview').innerHTML;
    html2pdf().from(resumeContent).save('resume.pdf');
}
