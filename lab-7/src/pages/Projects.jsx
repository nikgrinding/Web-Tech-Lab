import PageSection from '../components/PageSection';
import ListItem from '../components/ListItem';
import { projects } from '../data';

export default function Projects() {
  return (
    <PageSection title="Projects">
      {projects.map((item, index) => (
        <ListItem key={index} title={item.title} description={item.description} />
      ))}
    </PageSection>
  );
}