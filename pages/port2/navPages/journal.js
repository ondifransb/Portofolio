import { Content } from "../../../components/components";
import { journalData } from "../../../models";

const Journal = () => {
	return (
		<Content ht={"8%"}>
			<ul className="ulwrapper">
				{(journalData || []).map((e) => {
					return <li key={e.id}>{e.cat}</li>;
				})}
			</ul>
		</Content>
	);
};

export default Journal;
