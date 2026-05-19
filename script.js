function openModal(type) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  let content = "";

  switch(type) {
    // PROJECTS
    case "webdesign":
      content = `
        <h2>Web Design</h2>
        <p>Web design is the process of planning, creating, and arranging digital content.</p>
        <img src="images/webdesign.png" 
        alt="Web Design Project" 
        style="max-width:100%; border:2px solid red; border-radius:10px; margin-top:15px;">
      `;
      break;

    case "typography":
      content = `
        <h2>Typography</h2>
        <p>Typography is the art of arranging text...</p>
        <img src="images/typography.png" 
        alt="Typography Example" 
        style="max-width:100%; border:2px solid red; border-radius:10px; margin-top:15px;">
      `;
      break;

    case "tasktracker":
  content = `
    <h2>Task-Tracker</h2>
    <p>Boost Workforce Productivity — Track leads, manage customer relationships, and coordinate team tasks from one tool.</p>
    <p>Task Tracker Project</p>
    <p>
      <a href="https://task-tracker.kesug.com" target="_blank" 
      style="color:red; text-decoration:underline;">
        View Task-Tracker Project
      </a>
    </p>
  `;
  break;


    // CERTIFICATES
    case "it":
      content = `
        <h2>IT Essentials</h2>
        <p>Cisco Networking Academy certification covering hardware, software, and troubleshooting basics.</p>
        <img src="images/it_essentials.png" 
        alt="IT Essentials Certificate" 
        style="max-width:100%; border:2px solid red; border-radius:10px; margin-top:15px;">
      `;
      break;

    case "ccna":
      content = `
        <h2>CCNA: Introduction to Networks</h2>
        <p>Cisco Networking Academy certification focusing on networking fundamentals and protocols.</p>
        <img src="images/ccna.png" 
        alt="CCNA Certificate" 
        style="max-width:100%; border:2px solid red; border-radius:10px; margin-top:15px;">
      `;
      break;

    case "packet":
      content = `
        <h2>Getting Started with Cisco Packet Tracer</h2>
        <p>Certification for using Cisco Packet Tracer to simulate and configure networks.</p>
        <img src="images/packet_tracer.png" 
        alt="Packet Tracer Certificate" 
        style="max-width:100%; border:2px solid red; border-radius:10px; margin-top:15px;">
      `;
      break;

    case "pcap":
      content = `
        <h2>PCAP Programming Essentials in Python</h2>
        <p>Cisco Networking Academy certification covering Python programming basics and applications.</p>
        <img src="images/pcap.png" 
        alt="PCAP Certificate" 
        style="max-width:100%; border:2px solid red; border-radius:10px; margin-top:15px;">
      `;
      break;
  }

  body.innerHTML = content;
  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};
