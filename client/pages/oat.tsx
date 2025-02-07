import PageLayout from '../components/PageLayout/PageLayout';

const getData = async () => {
  try {
    const res = await fetch('http://localhost:3333/users', {
      cache: 'no-cache',
      mode: 'no-cors',
    });
    console.log('Koca: res ', res);
    const data = await res.json();
    return data.users;
  } catch (err) {
    console.error('Failed to fetch data: ', err);
  }
};

const Oat = () => {
  const data = getData();
  data.then((res) => console.log('Koca: res ', res));

  return (
    <PageLayout>
      <p>Oat</p>
      <p>yeet</p>
    </PageLayout>
  );
};

export default Oat;
