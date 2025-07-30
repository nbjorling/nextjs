import dayjs from 'dayjs';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import Title from '../components/Title';
import { ConcertProps, concerts } from '../public/assets/concertData';

// const ArtistCard = ({ concertData }: { concertData: ConcertProps }) => {
//   return (
//     <figure className='relative mb-4 aspect-video w-full cursor-pointer overflow-hidden rounded-lg bg-black shadow-md filter transition-all duration-300 hover:grayscale'>
//       <div className=''>
//         {concertData.img && (
//           <Image
//             width={1000}
//             height={1000}
//             className='w-full'
//             src={concertData.img}
//             alt={concertData.name}
//           />
//         )}
//       </div>
//       <figcaption className='absolute top-0 w-full bg-black bg-opacity-60 px-4 py-2 text-lg font-bold text-white'>
//         <div className='flex'>
//           <p className='grow text-lg font-bold'>{concertData.name}</p>
//           <p>{concertData.date}</p>
//         </div>
//         <div className='flex text-sm'>
//           <p className='grow font-thin'>@ {concertData.place}</p>
//           <p>{concertData.time}</p>
//         </div>
//       </figcaption>
//     </figure>
//   );
// };

const ArtistListItem = ({
  concertData,
  onClick,
  active,
}: {
  concertData: ConcertProps;
  onClick: () => void;
  active: boolean;
}) => {
  function getColorValue() {
    return Math.floor(Math.random() * 255);
  }

  const backgroundColor = useMemo(() => {
    return `rgb(${getColorValue()},${getColorValue()},${getColorValue()})`;
  }, [concertData.name]);

  return (
    <figure
      style={{
        boxShadow:
          '3px 3px 6px #000, -3px -3px 6px rgb(30 41 59 / var(--tw-bg-opacity))',
        border: '1px solid rgba(255,255,255,0.25)',
        backgroundColor: !concertData.img && backgroundColor,
      }}
      className={`${
        active ? 'h-60' : 'h-12'
      } relative w-full cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:aspect-video`}
      onClick={onClick}
    >
      <div>
        {concertData.img && (
          <Image
            fill
            quality={80}
            // width={1000}
            // height={1000}
            className='h-full w-full object-cover'
            src={concertData.img}
            alt={concertData.name}
          />
        )}
      </div>
      <figcaption className='absolute inset-0 flex w-full  bg-black bg-opacity-60 px-2 py-1 text-lg font-bold text-white'>
        <div className='flex h-10 w-full justify-between'>
          <p className='shrink-0 grow self-center font-bold'>
            {concertData.name}
          </p>
          <div className='mt-1 flex flex-col items-end '>
            <p className='ml-2 flex '>{concertData.date}</p>
            <p
              className={`${
                active ? 'opacity-100' : 'opacity-0'
              } ml-2 flex  transition-opacity duration-300`}
            >
              @ {concertData.place}
            </p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default function Concerts() {
  const [active, setActive] = useState<number | undefined>(undefined);

  const upcomingConcerts = [];
  const todayConcert = [];
  const pastConcerts = [];

  const todaysDate = dayjs().format('YYYY-MM-DD');

  function orderByDate(a, b) {
    if (dayjs(a) > dayjs(b)) return -1;
    else if (dayjs(a) < dayjs(b)) return 1;
    else return 0;
  }

  const sortedConcerts = concerts.sort((a, b) => orderByDate(a.date, b.date));

  sortedConcerts.forEach((concert) => {
    if (todaysDate === concert.date) {
      todayConcert.push(concert);
    } else if (dayjs(todaysDate).isBefore(concert.date)) {
      upcomingConcerts.push(concert);
    } else {
      pastConcerts.push(concert);
    }
    return concert;
  });

  const classes =
    'flex w-full flex-col gap-4 pb-4 mb-4 border-b border-black border-opacity-[0.2] lg:grid lg:grid-cols-3';

  return (
    <main className='w-full p-4'>
      <>
        <Title size='sm'>Upcoming ({upcomingConcerts.length.toString()})</Title>
        <div className={classes}>
          {upcomingConcerts.map((concert, index) => {
            return (
              <ArtistListItem
                active={active === index}
                key={index}
                concertData={concert}
                onClick={() =>
                  setActive((prev) => (prev === index ? undefined : index))
                }
              />
            );
          })}
        </div>
        <Title size='sm'>
          Today Concerts ({todayConcert.length.toString()})
        </Title>
        <div className={classes}>
          {todayConcert.map((concert, index) => {
            return (
              <ArtistListItem
                active={active === index + 1000}
                key={index + 1000}
                concertData={concert}
                onClick={() =>
                  setActive((prev) =>
                    prev === index + 1000 ? undefined : index + 1000
                  )
                }
              />
            );
          })}
        </div>

        <Title size='sm'>
          Past Concerts ({pastConcerts.length.toString()})
        </Title>
        <div className={classes}>
          {pastConcerts.map((concert, index) => {
            return (
              <ArtistListItem
                active={active === index + 10000}
                key={index + 10000}
                concertData={concert}
                onClick={() =>
                  setActive((prev) =>
                    prev === index + 10000 ? undefined : index + 10000
                  )
                }
              />
            );
          })}
        </div>
      </>
    </main>
  );
}
