import PageLayout from '../components/PageLayout/PageLayout';

function LinkEl({ href, text }) {
  return (
    <li className='text-pretty mb-4 rounded-md bg-slate-800 p-2 shadow-lg'>
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
    <PageLayout>
      <div className='p-8'>
        <h1 className='mb-4 text-6xl text-white'>Code Pens</h1>
        <ul className='font-hyperlegible text-white underline'>
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
    </PageLayout>
  );
}
