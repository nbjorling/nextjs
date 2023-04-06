import * as React from 'react';
import Title from '../components/Title';

type ConcertProps = {
  name: string;
  date: string;
  time: string;
  place: string;
  city: string;
  img: string;
};

const concerts = [
  {
    name: 'Infected Mushroom',
    date: '2023-02-25',
    time: '20:00',
    place: 'Annexet',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Infected_Mushroom_-_Shuni_2015_01_%28cropped%29.JPG',
  },
  {
    name: 'Dermot Kennedy',
    date: '2023-03-11',
    time: '19:00',
    place: 'Annexet',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Dermot_Kennedy_performing_at_2019_Lowlands_Festival.png',
  },
  {
    name: 'Loreen',
    date: '2023-03-11',
    time: '22:00',
    place: 'Berns',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Loreen_-_Melodifestivalen_2023%2C_Malm%C3%B6_118_%28cropped%29.jpg',
  },
  {
    name: 'Nordman',
    date: '2023-03-11',
    time: '22:00',
    place: 'Berns',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Nordman_2013-10-04_001.jpg',
  },
  {
    name: 'Planetos',
    date: '2023-03-11',
    time: '22:00',
    place: 'Berns',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Panetoz_p%C3%A5_presentationen_Mello_2023_Link%C3%B6ping_1.jpg',
  },
];

const ArtistCard = ({ concertData }: { concertData: ConcertProps }) => {
  return (
    <figure className='relative bg-black mb-4 shadow-md outline rounded-lg w-full aspect-video overflow-hidden transition-all duration-300 cursor-pointer filter hover:grayscale'>
      <div className=''>
        {concertData.img && (
          <img src={concertData.img} alt={concertData.name} />
        )}
      </div>
      <figcaption className=' absolute px-4 py-2 text-lg text-white font-bold top-0 bg-black bg-opacity-60 w-full'>
        <div className='flex'>
          <p className='grow font-bold text-lg'>{concertData.name}</p>
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
  return (
    <main className='min-h-screen w-full bg-slate-800 pt-4 font-hyperlegible'>
      <>
        <Title>Concerts</Title>
        <div className='mx-4 flex flex-col'>
          {concerts.map((concert) => {
            return <ArtistCard concertData={concert} />;
          })}
        </div>
      </>
    </main>
  );
}
