import React from "react";

const ProjectDetails = props => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p>
              Fugiat labore culpa et consectetur et nisi deserunt ut proident.
              Mollit amet exercitation laboris excepteur anim magna consequat
              voluptate velit aliqua tempor irure. Eiusmod incididunt eiusmod
              magna dolor proident officia Lorem qui do. Ullamco id commodo
              consectetur cupidatat velit laboris aute dolore proident tempor.
              Cillum nisi qui reprehenderit esse adipisicing voluptate id quis
              deserunt. Consequat officia ea laboris deserunt minim.
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by The Net Ninja</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
