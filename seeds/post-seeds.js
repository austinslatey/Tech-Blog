const { Post } = require('../models');

const postdata = [
  {
    title: "Make It Stick: The Science of Successful Learning",
    content: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: "White Fragility: Why It's So Hard for White People to Talk About Racism",
    content: 'https://nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: "Algorithms of Oppression: How Search Engines Reinforce Racism",
    content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'The Pragmatic Programmer: Your Journey To Mastery',
    content: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
    content: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'Can you think of any technology that has only made the world worse? How about a piece of technology that has only made the world better?',
    content: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'Is teaching a skill that can be taught?',
    content: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Why Would Tech Ever Be Bannedworldwide?',
    content: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'How Gen-z Has Rediscovered Computers',
    content: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'Crazy Ideas About Computers You Would Like To Try Again',
    content: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: '10 Computers All Girls Hate',
    content: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Keep Calm And Think About Computers',
    content: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'Computers And Smoking Nowadays',
    user_id: 8
  },
  {
    title: '5 Stories About Ai That Are Simply Not True',
    content: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'The Incredible Story Of Ai',
    content: 'https://gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Ai Adventure',
    content: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'Would You Rather Choose Ai Or Workout?',
    content: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Crazy Ideas About Ai You Would Like To Try Again',
    content: 'https://shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: 'This Is Why People Love The Cloud',
    content: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'The Myths And Realities Of The Cloud',
    content: 'https://java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
