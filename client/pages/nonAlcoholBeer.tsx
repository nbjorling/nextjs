const beers = [
  {
    name: 'Mariestad',
    abv: '0,5%',
    niklas: {
      rating: 2.5,
      notes: 'knappt något doft, lite smak, bröd, järn dör ut fort.',
    },
    hjalmar: { rating: 2.5, notes: '' },
  },
  {
    name: 'Melleruds pilsner ',
    abv: '0,5%',
    niklas: { rating: 3, notes: '' },
    hjalmar: { rating: 3.5, notes: '' },
  },
  {
    name: 'Weihenstephaner Hefe Weissbier ',
    abv: '0,5%',
    niklas: { rating: 4.0, notes: '' },
    hjalmar: { rating: 5.0, notes: '' },
  },
  {
    name: 'Omnipollo Oat Pale Ale',
    abv: '0,3%',
    niklas: {
      rating: 5.0,
      notes: 'Så jäkla god, bra balans, mycket smak, mjuk, lite söt.',
    },
    hjalmar: { rating: 4.0, notes: '' },
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <span className='mb-2 flex text-yellow-400'>
      {'⭐'.repeat(fullStars)}
      {halfStar ? <span className='w-[0.5em] overflow-hidden '>⭐</span> : ''}
    </span>
  );
};

export default function BeerToplist() {
  return (
    <div className='min-h-screen bg-gray-900 font-sans text-gray-100'>
      {/* Hero Section */}
      <div
        className='relative h-96 bg-cover bg-center'
        style={{
          backgroundImage:
            'url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fran%C3%A7ois_Louis_Jaques_Paysans_fribourgeois_au_bistrot.jpg/1920px-Fran%C3%A7ois_Louis_Jaques_Paysans_fribourgeois_au_bistrot.jpg)',
        }}
      >
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <h1 className='text-4xl font-bold md:text-6xl'>
            Non Alcoholic Beers
          </h1>
        </div>
      </div>

      {/* Beer List */}
      <div className='mx-auto max-w-4xl py-12 px-6'>
        <h2 className='mb-6 text-center text-3xl font-semibold'></h2>
        <div className='space-y-6'>
          {beers.map((beer, index) => (
            <div key={index} className='rounded-xl bg-gray-800 p-6 shadow-md'>
              <div className='mb-3 flex justify-between border-b border-gray-700 pb-2'>
                <h3 className='text-2xl font-bold'>
                  {beer.name}
                  <p className='mt-3 text-lg text-gray-400'>ABV: {beer.abv}</p>
                </h3>
                <span className='text-lg font-semibold text-yellow-400'>
                  ⭐ {beer.niklas.rating + beer.hjalmar.rating}
                </span>
              </div>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div>
                  <h4 className='text-xl font-semibold'>Niklas</h4>
                  <p className='text-yellow-400'>
                    {renderStars(beer.niklas.rating)}
                  </p>
                  <p className='text-gray-400'>{beer.niklas.notes}</p>
                </div>
                <div className='border-t border-gray-700 pt-4 md:border-l md:border-t-0 md:pl-4'>
                  <h4 className='text-xl font-semibold'>Hjalmar</h4>
                  <p className='text-yellow-400'>
                    {renderStars(beer.hjalmar.rating)}
                  </p>
                  <p className='text-gray-400'>{beer.hjalmar.notes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
