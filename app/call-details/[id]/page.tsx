import CallDetails from '@/app/layout/CallDetails';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';

export default function CallDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className='flex h-screen flex-col items-center justify-between w-[320px] mx-auto'>
      <Header />
      <div className='flex-1 overflow-y-auto w-full border-x'>
        <CallDetails id={params.id}></CallDetails>
      </div>
      <Footer />
    </main>
  );
}
  