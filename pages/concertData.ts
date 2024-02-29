type ConcertProps = {
  name: string;
  date: string;
  time: string;
  place: string;
  city: string;
  img: string;
  festival?: 'Lollapalooza' | 'Mästerbotten';
};

const concerts = [
  {
    name: 'Infected Mushroom',
    date: '2023-02-25',
    time: '20:00',
    place: 'Annexet',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Infected_Mushroom_in_Russia.jpg',
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
    name: 'Michael Bublé',
    date: '2023-03-10',
    time: '20:00',
    place: 'Globen',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MichaelBubleDanceFeb2011.jpg',
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
    time: '23:00',
    place: 'Berns',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Panetoz_p%C3%A5_presentationen_Mello_2023_Link%C3%B6ping_1.jpg',
  },
  {
    name: 'Roger Waters',
    date: '2023-04-15',
    time: '19:00',
    place: 'Tele 2 Arena',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Roger_Waters_Newport_Folk_Festival_2015.jpg',
  },
  {
    name: 'Post Malone',
    date: '2023-04-26',
    time: '19:30',
    place: 'Avicii Arena',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/63/CHRISALLMEID_CHRISALLMEID_POSTMALONE-3.jpg',
  },
  {
    name: 'Wutang Clan',
    date: '2023-06-02',
    time: '20:00',
    place: 'Avicii Arena',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Wu_Tang_Clan_on_Stage.jpg',
  },
  {
    name: 'Nas',
    date: '2023-06-02',
    time: '20:00',
    place: 'Avicii Arena',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Nas-01-mika.jpg',
  },
  {
    name: 'Jalazzi',
    date: '2023-04-26',
    time: '22:00',
    place: 'Slakthusområdet',
    festival: 'Mästerbotten',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Punctus_interrogativus_from_Bern%2C_B%C3%BCrgerbibliothek_Cod._162%2C_f._15r.jpg',
  },
  {
    name: 'Broder John',
    date: '2023-04-26',
    time: '23:00',
    place: 'Slakthusområdet',
    festival: 'Mästerbotten',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Punctus_interrogativus_from_Bern%2C_B%C3%BCrgerbibliothek_Cod._162%2C_f._15r.jpg',
  },
  {
    name: 'Hoopdiggas Club',
    date: '2023-04-26',
    time: '23:00',
    place: 'Slakthusområdet',
    festival: 'Mästerbotten',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Punctus_interrogativus_from_Bern%2C_B%C3%BCrgerbibliothek_Cod._162%2C_f._15r.jpg',
  },
  {
    name: 'Cleo',
    date: '2023-04-26',
    time: '23:30',
    place: 'Slakthusområdet',
    festival: 'Mästerbotten',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Valborg_Cleo_0785_120430_MPN_Original.jpg',
  },
  {
    name: 'Trainspotters',
    date: '2023-04-26',
    time: '00:30',
    place: 'Slakthusområdet',
    festival: 'Mästerbotten',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Trainspotters-Live_At_Umea_Jazz_Festival-Photo_by_Jonatan_Nylander.jpg',
  },
  {
    name: 'Fridlyst',
    date: '2023-04-26',
    time: '00:30',
    place: 'Slakthusområdet',
    festival: 'Mästerbotten',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Punctus_interrogativus_from_Bern%2C_B%C3%BCrgerbibliothek_Cod._162%2C_f._15r.jpg',
  },
  {
    name: 'Dean Lewis',
    date: '2023-06-30',
    time: '19:15',
    place: 'Gärdet',
    festival: 'Lollapalooza',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Punctus_interrogativus_from_Bern%2C_B%C3%BCrgerbibliothek_Cod._162%2C_f._15r.jpg',
  },
  {
    name: 'Thomas Stenström',
    date: '2023-06-30',
    time: '20:15',
    place: 'Gärdet',
    festival: 'Lollapalooza',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Punctus_interrogativus_from_Bern%2C_B%C3%BCrgerbibliothek_Cod._162%2C_f._15r.jpg',
  },
  {
    name: 'Zara Larsson',
    date: '2023-06-30',
    time: '21:15',
    place: 'Gärdet',
    festival: 'Lollapalooza',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Punctus_interrogativus_from_Bern%2C_B%C3%BCrgerbibliothek_Cod._162%2C_f._15r.jpg',
  },
  {
    name: 'Marcus Mumford',
    date: '2023-06-30',
    time: '21:30',
    place: 'Gärdet',
    festival: 'Lollapalooza',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Punctus_interrogativus_from_Bern%2C_B%C3%BCrgerbibliothek_Cod._162%2C_f._15r.jpg',
  },
  {
    name: 'Afrojack',
    date: '2023-06-30',
    time: '22:45',
    place: 'Gärdet',
    festival: 'Lollapalooza',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Punctus_interrogativus_from_Bern%2C_B%C3%BCrgerbibliothek_Cod._162%2C_f._15r.jpg',
  },
  {
    name: 'Kygo',
    date: '2023-06-31',
    time: '??',
    place: 'Stockholm',
    festival: 'Lollapalooza',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Kygo_%2828481718120%29_%282%29.jpg',
  },
  {
    name: 'Lil Nas',
    date: '2023-06-31',
    time: '??',
    place: 'Stockholm',
    festival: 'Lollapalooza',
    city: 'Stockholm',
    img: '',
  },
  {
    name: 'Fatboy Slim',
    date: '2023-06-31',
    time: '??',
    place: 'Stockholm',
    festival: 'Lollapalooza',
    city: 'Stockholm',
    img: '',
  },
  {
    name: 'Sofi Tukker',
    date: '2023-06-31',
    time: '??',
    place: 'Stockholm',
    festival: 'Lollapalooza',
    city: 'Stockholm',
    img: '',
  },
  {
    name: 'Iann Dior',
    date: '2023-06-31',
    time: '??',
    place: 'Stockholm',
    festival: 'Lollapalooza',
    city: 'Stockholm',
    img: '',
  },
  {
    name: 'Mumford and Sons',
    date: '2023-07-01',
    time: '??',
    place: 'Stockholm',
    festival: 'Lollapalooza',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/20/MS2015.jpg',
  },
  {
    name: 'Olivia Lobato',
    date: '2023-07-01',
    time: '??',
    place: 'Stockholm',
    festival: 'Way Out West',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/20/MS2015.jpg',
  },
  {
    name: 'Aurora',
    date: '2023-08-10',
    time: '??',
    place: 'Stockholm',
    festival: 'Way Out West',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/20/MS2015.jpg',
  },
  {
    name: 'Tove Lo',
    date: '2023-07-11',
    time: '??',
    place: 'Stockholm',
    festival: 'Way Out West',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/20/MS2015.jpg',
  },
  {
    name: 'Blur',
    date: '2023-07-11',
    time: '??',
    place: 'Stockholm',
    festival: 'Way Out West',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/20/MS2015.jpg',
  },
  {
    name: 'Blur',
    date: '2023-07-11',
    time: '??',
    place: 'Stockholm',
    festival: 'Way Out West',
    city: 'Stockholm',
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/20/MS2015.jpg',
  },
];

const upcomingConcerts = [];

export { upcomingConcerts, concerts };
export type { ConcertProps };
