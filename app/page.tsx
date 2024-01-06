import ActivityFeed from './layout/AcitivityFeed';
import Footer from './layout/Footer';
import Header from './layout/Header';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-between'>
      <Header />
      <div className='flex-1 overflow-y-auto'>
        <ActivityFeed />
      </div>
      <Footer />
    </main>
  );
}
