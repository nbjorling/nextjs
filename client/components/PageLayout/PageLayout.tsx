const PageLayout = ({
  children,
  fullscreen,
}: {
  children: React.ReactNode;
  fullscreen?: boolean;
}) => (
  <main
    className={[
      'min-h-[calc(100vh_-_40px)] w-full bg-gradient-to-t from-[#0c111a] to-[#010518] font-hyperlegible text-white',
      fullscreen ? 'pb-8' : 'p-8',
    ].join(' ')}
  >
    {children}
  </main>
);

export default PageLayout;
