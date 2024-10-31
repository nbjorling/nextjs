import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { twJoin } from 'tailwind-merge';
import PageLayout from '../components/PageLayout/PageLayout';

const MONTHS = {
  0: 'Januari',
  1: 'Februari',
  2: 'Mars',
  3: 'April',
  4: 'Maj',
  5: 'Juni',
  6: 'Juli',
  7: 'Augusti',
  8: 'September',
  9: 'Oktober',
  10: 'November',
  11: 'December',
};

const DAYS = {
  0: 'Söndag',
  1: 'Måndag',
  2: 'Tisdag',
  3: 'Onsdag',
  4: 'Torsdag',
  5: 'Fredag',
  6: 'Lördag',
};

const prices = [
  {
    label: 'Enkelbiljett',
    price: 42,
  },
  {
    label: '24-timmarsbiljett',
    price: 175,
  },
  {
    label: '7-dagarsbiljett',
    price: 455,
  },
  {
    label: '30-dagarsbiljett',
    price: 1020,
  },
];

const FIRST_DAY_OF_WEEK = 1;

function countOccurrences(arr: number[], value: number) {
  return arr.reduce((acc, curr) => (curr === value ? acc + 1 : acc), 0);
}

function setupDays({ date }: { date: Date }) {
  const daysThisMonth = dayjs(date).daysInMonth();
  const daysLastMonth = dayjs(date).subtract(1, 'month').daysInMonth();
  const firstDayInMonth = dayjs(date).startOf('month').day();

  const days = [];
  for (let i = 1; i < daysThisMonth; i++) {
    // first day of month
    if (i === 1) {
      // If it is not the first day of the week
      if (firstDayInMonth !== FIRST_DAY_OF_WEEK) {
        // Add the days from the previous month
        const nMissingDayColumnsOnRow =
          firstDayInMonth === 0 ? 6 : firstDayInMonth - 1;
        for (let j = 1; j <= nMissingDayColumnsOnRow; j++) {
          days.push({
            day: '?',
            dayNumber: daysLastMonth - nMissingDayColumnsOnRow + j,
            isCurrentMonth: false,
          });
        }
      }
      // Add the first day
      days.push({
        index: i,
        dayNumber: i,
        day: DAYS[i],
        isCurrentMonth: true,
      });
    }

    days.push({
      index: i,
      dayNumber: i + 1,
      day: DAYS[(i + 1) % 7],
      isCurrentMonth: true,
    });

    if (i + 1 === daysThisMonth) {
      // after last day of month
      // Fill out the last row with the next month
      const missingDays = days.length % 7 === 0 ? 0 : 7 - (days.length % 7);

      for (let j = 1; j <= missingDays; j++) {
        days.push({
          index: i + j,
          day: DAYS[(i + j + 1) % 7],
          dayNumber: j,
          isCurrentMonth: false,
        });
      }
    }
  }
  return days;
}

export default function SlCardCalculator() {
  const [monthToLookAt, setMonthToLookAt] = useState(0);
  const [travelDays, setTravelDays] = useState<number[]>([]);
  const [boxes, setBoxes] = useState([]);
  const [count, setCount] = useState(0);

  const date = dayjs().add(monthToLookAt, 'month').toDate();
  const todaysDay = dayjs(date).date();
  const month = dayjs(date).month();
  const DAILY_COST = 42;

  useEffect(() => {
    setBoxes(setupDays({ date: date }));
  }, [travelDays, monthToLookAt]);

  function addRemoveTravel(e, index) {
    setCount(count + 1);
    const days = travelDays;
    days.push(index);
    setTravelDays(days);
  }

  const daysOrder = [];
  for (let i = 0; i <= 6; i++) {
    daysOrder.push((i + FIRST_DAY_OF_WEEK) % 7);
  }

  return (
    <PageLayout fullscreen>
      <div className='flex flex-col gap-4 p-4'>
        <div className='flex'>
          <button
            className='h-10 w-12 rounded-lg bg-slate-700'
            type='button'
            onClick={() => setMonthToLookAt(monthToLookAt - 1)}
          >{`<`}</button>
          <p className='text-bold  w-full text-center text-xl'>
            {MONTHS[month]}
          </p>
          <button
            className='h-10 w-12 rounded-lg bg-slate-700'
            type='button'
            onClick={() => setMonthToLookAt(monthToLookAt + 1)}
          >{`>`}</button>
        </div>

        <div className='grid grid-cols-7 gap-1 rounded-lg text-xs'>
          {daysOrder.map((day) => {
            return (
              <p className='mb-1 text-center font-bold' key={day}>
                {DAYS[day]}
              </p>
            );
          })}
          {boxes.map((box, index) => {
            const occurrences = countOccurrences(travelDays, index);
            const tickets = `🎟️x${occurrences}`;
            const bgColor =
              occurrences > 0
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-slate-500 hover:bg-slate-600';
            return (
              <div
                onClick={(e) => addRemoveTravel(e, index)}
                key={index}
                className={twJoin(
                  'flex h-16 w-auto cursor-pointer flex-col  px-1 text-sm',
                  box.index + 1 === todaysDay && monthToLookAt === 0
                    ? 'border border-cyan-900 bg-cyan-600 text-cyan-900 hover:bg-cyan-700'
                    : bgColor,
                  box.isCurrentMonth ? '' : 'text-gray-300 opacity-60',
                  index === 0 ? 'rounded-tl-md' : '',
                  index === 6 ? 'rounded-tr-md' : '',
                  index === boxes.length - 7 ? 'rounded-bl-md' : '',
                  index === boxes.length - 1 ? 'rounded-br-md' : ''
                )}
              >
                <p>{box.dayNumber}</p>
                <p>{occurrences > 0 && tickets}</p>
              </div>
            );
          })}
        </div>

        <div className='text-md flex justify-between rounded-md bg-slate-900 p-4'>
          <p className='text-green-400'>Total kostnad:</p>
          <p className='font-bold text-green-400'>
            {DAILY_COST * travelDays.length} kr
          </p>
        </div>

        <div className=' rounded-md bg-slate-900 p-4 text-sm '>
          <p className='mb-2 font-bold'>Prislista</p>
          {prices.map((price) => {
            return (
              <div key={price.label} className='flex justify-between'>
                <p>{price.label}</p>
                <p>{price.price} kr</p>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => setTravelDays([])}
          className='rounded-md bg-orange-300 p-2 text-black hover:bg-orange-400 active:bg-orange-500'
          type='button'
        >
          Rensa kalendern
        </button>
      </div>
    </PageLayout>
  );
}
