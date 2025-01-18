import PageLayout from '../components/PageLayout/PageLayout';
import { Yahtzee } from '../components/Yahtzee/Yahtzee';

export default function StartPage() {
  return (
    <PageLayout fullscreen>
      <Yahtzee />
    </PageLayout>
  );
}
