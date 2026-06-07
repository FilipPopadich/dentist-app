import './Designer.css';

const Designer = () => {
    return (
        <div className="container">
            <div className="hero designer-hero">
                <h1>About the Designer</h1>
                <p>This website was created as part of SEG3125 - User Interface Design</p>
            </div>

            <div className="section">
                <div className="designer-container">
                    <div className="card designer-card">
                        <h2>Filip Popadich</h2>
                        <p><strong>Course:</strong> SEG3125 - Analysis and Design of User Interfaces (Summer 2026)</p>
                        <p><strong>Assignment:</strong> #2 - Service Business Site (Dentist Appointment System)</p>
                        <p className="designer-button-group">
                            <a href="https://github.com/FilipPopadich" className="btn btn-outline designer-github-btn">📦 GitHub Repository</a>
                            <a href="/" className="btn btn-primary designer-home-btn">🏠 Return to Homepage</a>
                        </p>

                        <p className="designer-footer-note">
                            © 2026 Filip Popadich - SEG3125 Assignment 2 | User-Centered Design for Service Business Site
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Designer;