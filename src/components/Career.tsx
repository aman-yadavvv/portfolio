import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AWS Foundations & Architecture</h4>
                <h5>Certifications</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed AWS Cloud Foundations and AWS Architecture Simulation Certificate, gaining expert knowledge in provisioning scalable and secure AWS infrastructure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DevOps – Zero To Hero</h4>
                <h5>TrainWithShubham</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Mastered building pipelines and automating deployments. Acquired hands-on experience in Jenkins, Ansible, Docker, and Kubernetes for robust infrastructure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Engineering</h4>
                <h5>SPPU</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Engineering at Savitribai Phule Pune University, developing strong analytical skills and practical experience in DevSecOps and Cloud Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
