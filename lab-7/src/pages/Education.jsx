import PageSection from '../components/PageSection';
import ListItem from '../components/ListItem';
import { education } from '../data';

export default function Education() {
  return (
    <PageSection title="Education">
      {education.map((item, index) => (
        <ListItem key={index} title={item.title} description={item.description} />
      ))}
    </PageSection>
  );
}