import './project.scss';
import Title from "../../components/elements/title";
import ProjectCard from '../../components/project/projectCard';



const Project = () => {

    const projectData = [
      {
        name: "Project 1",
        detail: "perfect solution. Once you arrive at this page, you'll see a random paragraph. If you need another one, all you need to do is click on the  ",
        image: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-512630175-e1692383207927.jpg?w=1024",
      },
        {
        name: "Project 2",
        detail: "perfect solution. Once you arrive at this page, you'll see a random paragraph. If you need another one, all you need to do is click on the ",
        image: "https://www.thefarmersdog.com/digest/wp-content/uploads/2023/01/Schnauzer-top-1400x754.jpg",
      },
        {
        name: "Project 3",
        detail: "perfect solution. Once you arrive at this page, you'll see a random paragraph. If you need another one, all you need to do is click on the ",
        image: "https://money.asda.com/media/ttdjpvxj/miniature-schnauzer-hero.png?anchor=center&mode=crop&width=767&height=400&rnd=133094573147400000",
      }
    ];

    return (
      <section className="project" id="project">
        <Title>Project</Title>
        <div className="project-wrapper">
            {projectData.map(({name,detail,image} )=> {
                return (
                  <ProjectCard
                    projectName={name}
                    projectDetails={detail}
                    projectImage={image}
                  />
                );
            })}
        </div>
      </section>
    );

}

export default Project