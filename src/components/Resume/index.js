import React from 'react';
import './stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { bio } from '../../data';
import { removeProtocol } from '../../common/utils';

function Resume() {
  return (
    <div className="Resume">
      <div className="paper">
        <div className="header">
          <div className="name">{bio.full_name}</div>
          <div className="bar">
            <a className="item" href={`tel:${bio.phone.replace(/[^+\d]/g, '')}`}>
              <FontAwesomeIcon fixedWidth icon={faPhone} />
              <span>{bio.phone}</span>
            </a>
            <a className="item" href={`mailto:${bio.email}`}>
              <FontAwesomeIcon fixedWidth icon={faEnvelope} />
              <span>{bio.email}</span>
            </a>
            <a className="item" href={bio.links.linkedin}>
              <FontAwesomeIcon fixedWidth icon={faLinkedin} />
              <span>{removeProtocol(bio.links.linkedin)}</span>
            </a>
          </div>
        </div>
        <div className="body">
          <div className="wide">
            <div className="section">
              <div className="title">Education</div>
              <div className="content">
                <div className="item">
                  <div className="row">
                    <div className="primary">Georgia Institute of Technology</div>
                    <div className="spacer" />
                    <div className="secondary">Atlanta, GA</div>
                  </div>
                  <div className="row">
                    <div className="secondary">Master of Science, Computer Science (Specialization in Artificial Intelligence)</div>
                    <div className="spacer" />
                    <div className="secondary">December 2026</div>
                  </div>
                  <div className="bullet">
                    Specialization GPA: 4.0/4.0 | Cumulative GPA: 3.5/4.0
                  </div>
                  <div className="bullet">
                    Relevant Coursework: Advanced Internet Computing Systems and Application Development, Software
                    Development Process, Machine Learning, Knowledge-Based AI, Machine Learning for Trading, Security
                    Incident Response, Health Informatics
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="primary">University of Southern California</div>
                    <div className="spacer" />
                    <div className="secondary">Los Angeles, CA</div>
                  </div>
                  <div className="row">
                    <div className="secondary">Bachelor of Science, Business Administration (Concentration in Data Science)</div>
                    <div className="spacer" />
                    <div className="secondary">May 2021</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="title">Experience</div>
              <div className="content">
                <div className="item">
                  <div className="row">
                    <div className="primary">Qcells</div>
                    <div className="spacer" />
                    <div className="secondary">San Francisco, CA</div>
                  </div>
                  <div className="row">
                    <div className="secondary">Software Engineer | Data & Real-Time Intelligence</div>
                    <div className="spacer" />
                    <div className="secondary">June 2026 – Present</div>
                  </div>
                  <div className="bullet">
                    Developed backend services to ingest and expose real-time telemetry data from battery storage and
                    grid assets, enabling monitoring and control across the platform
                  </div>
                  <div className="bullet">
                    Designed and implemented Peak Demand API pipeline for battery, integrating data ingestion,
                    time-series processing, PostgreSQL storage, and REST endpoints to surface peak load events for grid
                    and battery management workflows
                  </div>
                  <div className="bullet">
                    Built and deployed containerized platform services on Azure using Docker and Kubernetes,
                    standardizing deployment for grid and battery management components
                  </div>
                  <div className="bullet">
                    Implemented CI/CD pipelines with GitHub Actions and Azure Monitor/Application Insights observability
                    for platform services, reducing deployment time and cutting incident detection time by 60%
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="primary">Capital One</div>
                    <div className="spacer" />
                    <div className="secondary">McLean, VA</div>
                  </div>
                  <div className="row">
                    <div className="secondary">Python Developer & Data Analyst | Data Infrastructure, Analysis, and Engineering</div>
                    <div className="spacer" />
                    <div className="secondary">August 2021 – August 2023</div>
                  </div>
                  <div className="bullet">
                    Built a full-stack application using React and Python/Django REST Framework that surfaced KPIs and
                    statistical stability metrics across 20+ bank models, replacing recurring ad hoc analyst requests
                    with standardized automated reporting
                  </div>
                  <div className="bullet">
                    Engineered Apache Spark data pipelines that cleaned and transformed 100M+ rows of transaction data,
                    reducing model execution time by 25% through targeted performance optimizations
                  </div>
                  <div className="bullet">
                    Developed internal Python tools that automated transaction pattern analysis for digital asset
                    monitoring workflows, accelerating AML alert reviews by 40%
                  </div>
                  <div className="bullet">
                    Integrated the Holistic Risk Scoring Model into AML data pipelines and engineered predictive
                    features from 3+ years of historical investigation outcomes, improving fraud alert escalation
                    precision by 10%
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="primary">Franklin Templeton (Western Asset Management)</div>
                    <div className="spacer" />
                    <div className="secondary">Pasadena, CA</div>
                  </div>
                  <div className="row">
                    <div className="secondary">Python Developer Intern | Quantitative Investment Operations</div>
                    <div className="spacer" />
                    <div className="secondary">June 2020 – August 2020</div>
                  </div>
                  <div className="bullet">
                    Developed a portfolio data management system and dashboard by integrating internal REST APIs with
                    Snowflake to assess and track portfolio data for 200+ clients, increasing operational efficiency by
                    90%
                  </div>
                  <div className="bullet">
                    Migrated Alteryx portfolio tracking workflows to reusable Python libraries, enabling identification
                    of underperforming assets and allocation analysis across fixed-income strategies
                  </div>
                  <div className="bullet">
                    Created a portfolio back-testing engine using Python and Alteryx to measure projected returns across
                    10+ fixed-income derivatives and ETF strategies using historical and benchmark return data
                  </div>
                  <div className="bullet">
                    Streamlined client cash data management by implementing an automated data ingestion framework for
                    uploading and downloading client data; projected to save 300 work hours annually
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="primary">Pacific Capital</div>
                    <div className="spacer" />
                    <div className="secondary">Newport Beach, CA</div>
                  </div>
                  <div className="row">
                    <div className="secondary">Quantitative Analytics Intern | Portfolio Management</div>
                    <div className="spacer" />
                    <div className="secondary">May 2019 – August 2019</div>
                  </div>
                  <div className="bullet">
                    Designed reusable investment operations modules in Python that standardized Bloomberg feed parsing,
                    computed market metrics, and automated recurring operations reporting
                  </div>
                  <div className="bullet">
                    Architected and deployed an Oracle SQL database with ETL pipelines to consolidate financial data for
                    120+ clients from raw sources, automating data retrieval and eliminating manual data entry
                  </div>
                  <div className="bullet">
                    Implemented a Python-based Monte Carlo simulation model that projected financial plan success
                    probabilities for 120+ clients and supported personalized customer reporting
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="title">Technical Skills</div>
              <div className="content">
                <div className="item">
                  <div className="row">
                    <div className="primary">Languages</div>
                    <div className="paragraph">Python, Java, C++, JavaScript, TypeScript, SQL, HTML/CSS</div>
                  </div>
                  <div className="row">
                    <div className="primary">Frameworks</div>
                    <div className="paragraph">Django REST Framework, FastAPI, Flask, React, Next.js, Node.js, Express.js, Testing (JUnit, PyTest)</div>
                  </div>
                  <div className="row">
                    <div className="primary">Databases</div>
                    <div className="paragraph">PostgreSQL, MySQL, Oracle Database, MongoDB, Redis, AWS DynamoDB</div>
                  </div>
                  <div className="row">
                    <div className="primary">Cloud/DevOps</div>
                    <div className="paragraph">AWS EC2, AWS S3, Microsoft Azure, Docker, Kubernetes, GitHub Actions, CI/CD</div>
                  </div>
                  <div className="row">
                    <div className="primary">Data/ML</div>
                    <div className="paragraph">Apache Spark, Databricks, Snowflake, Pandas, PyTorch, Scikit-Learn</div>
                  </div>
                  <div className="row">
                    <div className="primary">Tools</div>
                    <div className="paragraph">Git, GitHub, Jira, Postman, Splunk, Tableau, Alteryx</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
