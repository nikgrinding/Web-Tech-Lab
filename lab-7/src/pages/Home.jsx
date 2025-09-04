import PageSection from '../components/PageSection';
import Heading from '../components/Heading';
import { summary } from '../data';

export default function Home() {
  return (
    <PageSection title="About Me">
      <Heading>Hi, this is Nikhilesh H :)</Heading>
      <p>{summary}</p>
    </PageSection>
  );
}