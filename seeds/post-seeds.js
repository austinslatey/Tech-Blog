const { Post } = require('../models');

const postdata = [
  {
    title: "Make It Stick: The Science of Successful Learning",
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: "White Fragility: Why It's So Hard for White People to Talk About Racism",
    post_url: 'https://nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: "Algorithms of Oppression: How Search Engines Reinforce Racism",
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'The Pragmatic Programmer: Your Journey To Mastery',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'Can you think of any technology that has only made the world worse? How about a piece of technology that has only made the world better?',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'Is teaching a skill that can be taught?',
    post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Why Would Tech Ever Be Bannedworldwide?',
    post_url: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'How Gen-z Has Rediscovered Computers',
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'Crazy Ideas About Computers You Would Like To Try Again',
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: '10 Computers All Girls Hate',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Keep Calm And Think About Computers',
    post_url: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_url: 'Computers And Smoking Nowadays',
    user_id: 8
  },
  {
    title: '5 Stories About Ai That Are Simply Not True',
    post_url: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'The Incredible Story Of Ai',
    post_url: 'https://gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Ai Adventure',
    post_url: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'Would You Rather Choose Ai Or Workout?',
    post_url: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Crazy Ideas About Ai You Would Like To Try Again',
    post_url: 'https://shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: 'This Is Why People Love The Cloud',
    post_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'The Myths And Realities Of The Cloud',
    post_url: 'https://java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
