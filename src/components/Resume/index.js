import React from 'react';
import './stylesheet.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
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
            <a className="item" href={bio.links.github}>
              <FontAwesomeIcon fixedWidth icon={faGithub} />
              <span>{removeProtocol(bio.links.github)}</span>
            </a>
            <a className="item" href={bio.links.linkedin}>
              <FontAwesomeIcon fixedWidth icon={faLinkedin} />
              <span>{removeProtocol(bio.links.linkedin)}</span>
            </a>
            <a className="item"
               href={`https://www.google.com/maps/place/${encodeURI(bio.location)}`}>
              <FontAwesomeIcon fixedWidth icon={faMapMarkerAlt} />
              <span>{bio.location}</span>
            </a>
            <a className="item" href={`mailto:${bio.email}`}>
              <FontAwesomeIcon fixedWidth icon={faEnvelope} />
              <span>{bio.email}</span>
            </a>
          </div>
        </div>
        <div className="body">
          <div className="narrow">
            <div className="section">
              <div className="title">Summary</div>
              <div className="content">
                <div className="item">
                  <div className="row paragraph">
                    {bio.description}
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="title">Education</div>
              <div className="content">
                <div className="item">
                  <div className="row">Georgia Institute of Technology</div>
                  <div className="bullet">Aug. 2024 - Dec. 2026 (Expected)</div>
                  <div className="bullet">MS in <b>Computer Science</b></div>
                  <div className="bullet">Specialization in Artificial Intelligence</div>
                </div>
                <div className="item">
                  <div className="row">University of Southern California</div>
                  <div className="bullet">Aug. 2017 - May 2021</div>
                  <div className="bullet">BS in <b>Business Administration</b></div>
                  <div className="bullet">Concentration in Data Science</div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="title">Skills</div>
              <div className="content">
                <div className="item">
                  {
                    Object.entries(bio.skills).map(([skill, level]) => (
                      <div className="row" key={skill}>
                        <div className="primary">{skill}</div>
                        <div className="spacer" />
                        <div className="secondary">{level}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="section">
              <div className="title">Tools & Frameworks</div>
              <div className="content">
                <div className="item">
                  <div className="row paragraph">
                    Django REST Framework, FastAPI, React, Node.js, PostgreSQL,
                    Redis, MongoDB, Apache Spark, Snowflake, PyTorch, Docker,
                    Kubernetes, AWS, Azure, GitHub Actions
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wide">
            <div className="section">
              <div className="title">Work Experience</div>
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
                    <div className="secondary">June 2026 - Current</div>
                  </div>
                  <div className="bullet">
                    Developed backend services to ingest and expose real-time telemetry data from battery storage and
                    grid assets, enabling monitoring and control across the platform.
                  </div>
                  <div className="bullet">
                    Designed and implemented the Peak Demand API pipeline, integrating data ingestion, time-series
                    processing, PostgreSQL storage, and REST endpoints to surface peak load events.
                  </div>
                  <div className="bullet">
                    Built and deployed containerized platform services on Azure using Docker and Kubernetes, and
                    implemented CI/CD pipelines with GitHub Actions, cutting incident detection time by 60%.
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="primary">Capital One</div>
                    <div className="spacer" />
                    <div className="secondary">McLean, VA</div>
                  </div>
                  <div className="row">
                    <div className="secondary">Data Analyst | Data Infrastructure, Analysis, and Engineering</div>
                    <div className="spacer" />
                    <div className="secondary">Aug. 2021 - Aug. 2023</div>
                  </div>
                  <div className="bullet">
                    Built a full-stack application using React and Python/Django REST Framework surfacing KPIs and
                    statistical stability metrics across 20+ bank models, replacing ad hoc analyst requests with
                    automated reporting.
                  </div>
                  <div className="bullet">
                    Engineered Apache Spark data pipelines that cleaned and transformed 100M+ rows of transaction data,
                    reducing model execution time by 25%.
                  </div>
                  <div className="bullet">
                    Developed Python tools automating transaction pattern analysis for digital asset monitoring,
                    accelerating AML alert reviews by 40%, and integrated the Holistic Risk Scoring Model into AML
                    pipelines, improving fraud alert escalation precision by 10%.
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
                    <div className="secondary">June 2020 - Aug. 2020</div>
                  </div>
                  <div className="bullet">
                    Developed a portfolio data management system and dashboard integrating internal REST APIs with
                    Snowflake to track portfolio data for 200+ clients, increasing operational efficiency by 90%.
                  </div>
                  <div className="bullet">
                    Migrated Alteryx portfolio tracking workflows to reusable Python libraries, and created a
                    back-testing engine measuring projected returns across 10+ fixed-income derivatives and ETF
                    strategies.
                  </div>
                  <div className="bullet">
                    Streamlined client cash data management with an automated data ingestion framework, projected to
                    save 300 work hours annually.
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
                    <div className="secondary">May 2019 - Aug. 2019</div>
                  </div>
                  <div className="bullet">
                    Designed reusable investment operations modules in Python that standardized Bloomberg feed parsing,
                    computed market metrics, and automated recurring operations reporting.
                  </div>
                  <div className="bullet">
                    Architected and deployed an Oracle SQL database with ETL pipelines consolidating financial data for
                    120+ clients, eliminating manual data entry.
                  </div>
                  <div className="bullet">
                    Implemented a Python-based Monte Carlo simulation model projecting financial plan success
                    probabilities for 120+ clients.
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
