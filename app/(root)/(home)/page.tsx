import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  //const now = new Date();

  // const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  // const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          Where ideas meet action. Let's make every moment count with INDMEET
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
