import Link from 'next/link';

function LinkEl({ href, text }) {
  return (
    <li className='mb-2'>
      <a
        className='hover:text-teal-300'
        href={href}
        target='_blank'
        rel='noreferrer'
      >
        {text}
      </a>
    </li>
  );
}

export default function StartPage() {
  return (
    <main className='min-h-screen w-full bg-slate-800 pt-4 font-convergence'>
      <Link href='/'>
        <div className='ml-4 mr-4 w-fit cursor-pointer rounded bg-slate-700 py-2 px-4 text-white'>
          Back
        </div>
      </Link>
      <div className='p-8'>
        <h1 className='mb-4 font-convergence text-6xl text-white'>Code Pens</h1>
        <ul className='ml-4 font-hyperlegible text-white'>
          <LinkEl
            href='https://codepen.io/nbjorling/pen/abGaQpK'
            text='Horizontal Scrollable 2 Row Grid in Tailwind CSS'
          />
          <LinkEl
            href='https://codepen.io/nbjorling/pen/eYrLPyz'
            text='Horizontal Scrollable 2 Row Grid
          '
          />
          <LinkEl
            href='https://codepen.io/nbjorling/pen/NWMGMVJ'
            text='First/Last of type for single and multiple children'
          />
          <LinkEl
            href='https://codepen.io/nbjorling/pen/LYmpBRa'
            text='Animated Accordion, Dynamic Children'
          />
        </ul>
      </div>
    </main>
  );
}
