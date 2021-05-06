import * as React from 'react'
import Card from '../card'

const Projects = ({ data, path }) => (
    <section id="projects" className="section section-projects">
      <div className="section__content">
        <h2 className="section__title">Projects</h2>
        <Card data={data} basePath={path} />
      </div>
    </section>
);

export default Projects
