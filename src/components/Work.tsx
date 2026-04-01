import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "DevSecOps Automation on AWS",
    category: "Secure CI/CD",
    tools: "Git-Github, AWS, Jenkins, gitleaks, SonarQube, Trivy, Owasp ZAP, Docker",
    image: "/images/sapphire.png",
  },
  {
    title: "Containerization and CI/CD",
    category: "Infrastructure",
    tools: "Docker, Jenkins, AWS, Devsecops, Terraform",
    image: "/images/radix.png",
  },
  {
    title: "Kubernetes Deployment",
    category: "Orchestration",
    tools: "Kubernetes, Pods, Nginx Ingress , Docker, AWS , monitoring & logging ( prometheus & Grafana )",
    image: "/images/bond.png",
  },
  {
    title: "Infrastructure Automation",
    category: "Infrastructure as Code",
    tools: "Terraform, AWS, Strapi, monitoring & logging ( prometheus & Grafana )",
    image: "/images/sapphire.png",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        
        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-card" key={index}>
              <div className="work-image-wrapper">
                <WorkImage image={project.image} alt={project.title} />
              </div>
              <div className="work-info">
                <div className="work-details">
                  <h4>{project.title}</h4>
                  <p className="work-category">{project.category}</p>
                  <div className="work-tools">
                    <span className="tools-label">Tools & Features</span>
                    <p>{project.tools}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
