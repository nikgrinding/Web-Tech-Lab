import PageSection from '../components/PageSection';
import ListItem from '../components/ListItem';
import { achievements } from '../data';

export default function Achievements() {
	return (
		<PageSection title="Achievements">
			{achievements.map((item, index) => (
				<ListItem
					key={index}
					title={item.title}
					description={item.description}
				/>
			))}
		</PageSection>
	);
}
