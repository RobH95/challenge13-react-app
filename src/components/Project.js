import React from 'react';

const Project = (props) => {
  const { title, deployedLink, repoLink, imageURL } = props;

  return (
    <div className="col-sm" style={{padding: '16px'}}>
      <h2>{title}</h2>
      <p>Deployed version: <a href={deployedLink}>{deployedLink}</a></p>
      <p>GitHub repository: <a href={repoLink}>{repoLink}</a></p>
      <img className="img-responsive fit-image" src={imageURL} alt={title} />
    </div>
  );
};

export default Project;