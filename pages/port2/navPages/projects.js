import { Content } from "../../../components/components";
import { projectData } from "../../../models";

const Projects = () => {
	return (
		<Content ht={"50%"}>
			<ul className="ulwrapper">
				{(projectData || []).map((e) => {
					return <li>{e.cat}</li>;
				})}
			</ul>
		</Content>
	);
};

export default Projects;
