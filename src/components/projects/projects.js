import * as React from 'react'
import Card from '../card'

const Projects = ({ data, path }) => (
    <section id="projects" className="section section-projects">
      <h2 className="section-title">Projects</h2>
      <Card data={data} basePath={path} />
    </section>
);

export default Projects
