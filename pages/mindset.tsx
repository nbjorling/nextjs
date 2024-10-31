import PageLayout from '../components/PageLayout/PageLayout';

// const StylishHeader = ({
//   title,
//   img,
// }: {
//   title: string;
//   img: StaticImageData;
// }) => {
//   return (
//     <h1 className='text-center font-tiltwarp text-[calc(5vh_+_5vw)]'>
//       <span
//         style={{ backgroundImage: `url(${img.src})` }}
//         className='bg-gradient-to-t from-brand  to-brand bg-cover bg-clip-text text-brand/20'
//       >
//         {title.toLocaleUpperCase()}
//       </span>
//     </h1>
//   );
// };

const Card = ({ children }) => {
  return (
    <div className='rounded-md border border-slate-500/30 bg-slate-900/50 p-8 shadow-lg'>
      {children}
    </div>
  );
};

// const Paragraph = ({ children }) => {
//   return <p className='mt-2'>{children}</p>;
// };

const Header = ({ children }) => {
  return <h2 className='mt-4 text-xl text-brand'>{children}</h2>;
};

export default function MindSet() {
  return (
    <PageLayout>
      {/* <StylishHeader title='Warrior' img={fire} /> */}
      <Card>
        <div className='flex flex-col gap-4 font-hyperlegible text-white/80'>
          {/* <Header>Method</Header>
          <Paragraph>Disciplin over motivation</Paragraph> */}
          <Header>Warrior Ehtos - Get shit done!</Header>
          <ul className='ml-4 flex list-disc flex-col gap-4'>
            <li>
              I am disciplined, focused, and relentless. I am driven by purpose,
              not comfort. I make no excuses, and I leave no task unfinished.
              <span className='block font-bold text-brand'>
                My mind is set in stone.
              </span>
            </li>
            <li>
              In the face of adversity, I adapt, stay calm, and push forward. I
              don’t fear failure—it’s a stepping stone to victory. I am
              resilient and open minded.
              <span className='block font-bold text-brand'>
                I improve relentlessly
              </span>
            </li>
            <li>
              I rely on preparation, not luck. My mind is my weapon, sharpened
              daily. I maintain my body as my armor and my mind as my guide,
              staying strong, fast, and precise.
              <span className='block font-bold text-brand'>
                I get shit done.
              </span>
            </li>
            <li>
              No challenge will break me; no obstacle will stop me. If i get
              knocked down, I will get up again, I am a warrior,
              <span className='block font-bold text-brand'>
                I overcome, always.
              </span>
            </li>
          </ul>
        </div>
      </Card>
    </PageLayout>
  );
}
