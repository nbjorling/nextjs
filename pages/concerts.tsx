import Image from 'next/image';
import * as React from 'react';
import Title from '../components/Title';
import {
  concerts,
  upcomingConcerts,
  ConcertProps,
} from '../public/assets/concertData';

const ArtistCard = ({ concertData }: { concertData: ConcertProps }) => {
  return (
    <figure className='relative mb-4 aspect-video w-full cursor-pointer overflow-hidden rounded-lg bg-black shadow-md filter transition-all duration-300 hover:grayscale'>
      <div className=''>
        {concertData.img && (
          <Image
            width={1000}
            height={1000}
            className='w-full'
            src={concertData.img}
            alt={concertData.name}
          />
        )}
      </div>
      <figcaption className='absolute top-0 w-full bg-black bg-opacity-60 px-4 py-2 text-lg font-bold text-white'>
        <div className='flex'>
          <p className='grow text-lg font-bold'>{concertData.name}</p>
          <p>{concertData.date}</p>
        </div>
        <div className='flex text-sm'>
          <p className='grow font-thin'>@ {concertData.place}</p>
          <p>{concertData.time}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default function Concerts() {
  const noFestival = [];
  const masterBotten = [];
  const lolla = [];

  const hex = '#323FFe';

  concerts.forEach((concert) => {
    if (concert.festival === 'Mästerbotten') {
      masterBotten.push(concert);
    }
    if (concert.festival === 'Lollapalooza') {
      lolla.push(concert);
    } else {
      noFestival.push(concert);
    }
    return concert;
  });

  return (
    <main className='min-h-screen w-full bg-slate-800 pt-4 font-hyperlegible'>
      <>
        <Title>Concerts</Title>
        <div className='flex w-full flex-col px-4 md:grid md:grid-cols-3 md:gap-4'>
          {noFestival.map((concert, index) => {
            return <ArtistCard key={index} concertData={concert} />;
          })}
          <div
            className='relative col-span-3 mt-8 w-full rounded-xl border-2 p-4 md:grid md:grid-cols-3 md:gap-4'
            style={{ border: `2px solid ${hex}`, background: `${hex}10` }}
          >
            <div className='absolute -top-12 flex items-center justify-center rounded-xl py-2 font-bold text-white'>
              <h2 className='text-4xl'>Mästerbotten</h2>
            </div>
            {masterBotten.map((concert, index) => {
              return <ArtistCard key={index} concertData={concert} />;
            })}
          </div>{' '}
          <div
            className='relative col-span-3 mt-8 w-full rounded-xl border-2 p-4 md:grid md:grid-cols-3 md:gap-4'
            style={{ border: `2px solid ${hex}`, background: `${hex}10` }}
          >
            <div className='absolute -top-12 flex items-center justify-center rounded-xl py-2 font-bold text-white'>
              <h2 className='text-4xl'>Lollapalooza</h2>
            </div>
            {lolla.map((concert, index) => {
              return <ArtistCard key={index} concertData={concert} />;
            })}
          </div>
        </div>
        <Title>Upcoming</Title>
        <div className='flex w-full flex-col px-4 md:grid md:grid-cols-3 md:gap-4'>
          {upcomingConcerts.map((concert, index) => {
            return <ArtistCard key={index} concertData={concert} />;
          })}
        </div>
      </>
    </main>
  );
}
