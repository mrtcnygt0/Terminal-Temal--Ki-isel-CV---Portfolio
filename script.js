const output = document.getElementById('output');
const input = document.getElementById('input');


const commands = {
    help: () => {
        output.innerHTML += `<span class="command"><b>Available commands</b>: about, skills, projects, certifications, social, clear</span><br>`;
    },
    about: () => {
        output.innerHTML += `Hello, I'm Mert Can Yiğit. I was born in Istanbul in 1999. I have gained experience in C#, Python, and Java by participating in various software development projects. I have knowledge in database management and system design. I want to start my career in software engineering, improve my skills, and create value. I am open to new experiences, adaptable to working in different locations, and eager to take on responsibilities.<br>`;
    },
    skills: () => {
        output.innerHTML += `Analytical Thinking<br>Teamwork<br>C# and JAVA<br>Database Systems (MySQL, MSSQL)<br>Python - Machine Learning<br>Web Development<br>HTML5, CSS, JAVASCRIPT<br>PHP<br>Excel and MS Office Programs<br>`;
    },
    projects: () => {
		output.innerHTML += `
		<div class="project-container">
			<span class="project-title">
				<a href="https://github.com/mrtcnygt0/Makine-Ogrenimi-ile-Gogus-Kanser-Tehisi" target="_blank">Machine Learning for Breast Cancer Diagnosis</a>
			</span>
			<p>The aim of the project is to classify breast cancer data without the need for complex applications and to achieve this at minimal cost. It also aims to simplify</p>
		</div>

		<div class="project-container">
			<span class="project-title">
				<a href="https://github.com/mrtcnygt0/Escherichia-bakteri-otomasyon" target="_blank">Protein Sequencing Automation</a>
			</span>
			<p>The aim of the project is to query proteins in the program within the error margins observed in genome sequencing methods to prevent the repetition of experiments. In this context, it focuses on examining the protein database of the E. coli bacterium.</p>
		</div>

		<div class="project-container">
			<span class="project-title">
				<a href="https://github.com/mrtcnygt0/Tap-Tap-Web-Game" target="_blank">Web Tabanlı Mobil Oyun (PWA Destekli)</a>
			</span>
			<p>Bu proje, kullanıcıların belirli aksiyonları gerçekleştirerek puan kazanmasını sağlayan, modern ve etkileşimli bir web oyunudur. Progressive Web App (PWA) desteği sayesinde, kullanıcılar oyunu hem tarayıcıda hem de mobil cihazlarına yükleyerek oynayabilirler.</p>
		</div>
	`;

	},
    certifications: () => {
        output.innerHTML += `JAVA<br>Turkcell Academy<br><br>C# Form with Visual and Object-Oriented Programming<br>Turkcell Academy<br><br>B1 Level English<br>BTK Academy<br>`;
    },
    social: () => {
        output.innerHTML += `Linkedin: <a href="https://www.linkedin.com/in/mert-can-yigit/" target="_blank">https://www.linkedin.com/in/mert-can-yigit/</a><br>Github: <a href="https://github.com/mrtcnygt0" target="_blank">https://github.com/mrtcnygt0</a><br>Mail: <a href="mailto:mertcanyigit54@outlook.com" target="_blank">mertcanyigit54@outlook.com</a><br>`;
    },
    clear: () => {
        output.innerHTML = ''; // 
        commands.help(); // 
    }
};

document.addEventListener('click', () => {
    input.focus();
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        let command = input.value.trim().toLowerCase(); 
        output.innerHTML += `<span class="command">$ ${input.value.trim()}</span><br>`; 

        if (commands[command]) {
            commands[command](); 
        } else {
            output.innerHTML += `<span class="error">Command not found. Type 'help' for a list of commands.</span><br>`;
        }

        input.value = ''; // 
        output.scrollTop = output.scrollHeight; 
		
    }
});

window.addEventListener('DOMContentLoaded', () => {
    input.focus();
    window.scrollTo(0, document.body.scrollHeight);
});


commands.help();