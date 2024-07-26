import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

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

const FIRST_DAY_OF_WEEK = 1;

function countOccurrences(arr: number[], value: number) {
  return arr.reduce((acc, curr) => (curr === value ? acc + 1 : acc), 0);
}

function setupDays() {
  const daysThisMonth = dayjs().daysInMonth();
  const firstDayInWeek = dayjs().startOf('month').day();

  const days = [];
  for (let i = 1; i < daysThisMonth; i++) {
    if (i === 1) {
      // first day of month
      if (firstDayInWeek !== FIRST_DAY_OF_WEEK) {
        for (let j = 0; j < firstDayInWeek; j++) {
          days.push({ day: '?', dayNumber: i - j, isCurrentMonth: false });
        }
      } else {
        days.push({
          index: i,
          dayNumber: i,
          day: DAYS[i],
          isCurrentMonth: true,
        });
      }
    }
    days.push({
      index: i,
      dayNumber: i + 1,
      day: DAYS[(i + 1) % 7],
      isCurrentMonth: true,
    });
    if (i + 1 === daysThisMonth) {
      // last day of month
      for (let j = 1; j <= 7 - ((i + 1) % 7); j++) {
        days.push({
          index: i + j,
          day: DAYS[(i + j + 1) % 7],
          dayNumber: (i + j + 1) % daysThisMonth,
          isCurrentMonth: false,
        });
      }
    }
  }
  return days;
}

export default function SlCardCalculator() {
  const [travelDays, setTravelDays] = useState<number[]>([]);
  const [boxes, setBoxes] = useState([]);
  const [count, setCount] = useState(0);
  const todaysDay = dayjs().date();
  const month = dayjs().month();
  const firstDayInWeek = dayjs().startOf('month').day();
  const DAILY_COST = 42;

  useEffect(() => {
    setBoxes(setupDays());
  }, [travelDays]);

  function addRemoveTravel(e, index) {
    console.log('Koca: e ', e);
    setCount(count + 1);
    const days = travelDays;
    days.push(index);
    setTravelDays(days);
  }

  const daysOrder = [];
  for (let i = 0; i <= 6; i++) {
    daysOrder.push((i + firstDayInWeek) % 7);
  }

  return (
    <main className='min-h-screen w-full bg-slate-800 pt-4'>
      <div className='mb-5 flex gap-4 text-white'>
        {/* <p>Todays Date: {todaysDate}</p>
        <p>
          Todays Day: {DAYS[todaysDay % 7]} {todaysDay}
        </p> */}
        <p className='text-bold w-full text-center text-xl'>{MONTHS[month]}</p>
        {/* <p>Days in moth: {daysThisMonth}</p>
        <p>
          First day: {DAYS[firstDayInWeek]} {firstDayOfMonth}
        </p> */}
      </div>
      {/* {count} */}
      <div className='grid grid-cols-7 gap-1 p-2 text-xs text-white'>
        {daysOrder.map((day) => {
          return (
            <p className='text-center font-bold' key={day}>
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
              className={`flex h-16 w-auto cursor-pointer flex-col  ${
                box.dayNumber === todaysDay
                  ? 'border border-cyan-900 bg-cyan-600 text-cyan-900 hover:bg-cyan-700'
                  : bgColor
              } px-1 text-sm ${
                box.isCurrentMonth ? 'text-white' : 'text-gray-300 opacity-60'
              }`}
            >
              <p>{box.dayNumber}</p>
              <p>{occurrences > 0 && tickets}</p>
            </div>
          );
        })}
      </div>
      <p className='pl-2 text-white'>
        Kostnad: {DAILY_COST * travelDays.length} kr
      </p>
    </main>
  );
}
