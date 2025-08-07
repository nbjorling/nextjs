const PageLayout = ({
  children,
  fullscreen,
}: {
  children: React.ReactNode;
  fullscreen?: boolean;
}) => (
  <main
    className={[
      'min-h-[calc(100vh_-_40px)] w-full bg-[#010518] font-hyperlegible text-white',
      fullscreen ? 'pb-8' : 'p-8',
    ].join(' ')}
  >
    {children}
  </main>
);

export default PageLayout;
