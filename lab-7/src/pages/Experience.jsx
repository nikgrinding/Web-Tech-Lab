import PageSection from '../components/PageSection';
import ListItem from '../components/ListItem';
import { experience } from '../data';

export default function Experience() {
  return (
    <PageSection title="Experience">
      {experience.map((item, index) => (
        <ListItem key={index} title={item.title} description={item.description} />
      ))}
    </PageSection>
  );
}