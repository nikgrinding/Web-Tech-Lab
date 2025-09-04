import PageSection from '../components/PageSection';
import ListItem from '../components/ListItem';
import { skills } from '../data';

export default function Skills() {
  return (
    <PageSection title="Skills">
      {skills.map((item, index) => (
        <ListItem key={index} title={item.title} description={item.description} />
      ))}
    </PageSection>
  );
}