const { Post } = require('../models');


const postdata = [
  {
    title: 'The Pragmatic Programmer: Your Journey To Mastery',
    content: 'The best computer programs are those that make you more productive. You don\'t have to be a techie to use them, and you don\'t have to pay for them either.',
    user_id: 4
  },
  {
    title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
    content: 'Technology is an important part of work today, including software, hardware, and social media. Learn to use technology to improve your productivity and save time.',
    user_id: 7
  },
  {
    title: 'How Gen-z Has Rediscovered Computers',
    content: 'Gen-Z is a new generation of users who value their privacy and believe that technology is their best friend and worst enemy. This guide provides tips and tricks that will help you connect with these users.',
    user_id: 9
  },
  {
    title: 'Ai Adventure',
    content: 'Gather \'round Bots! We are going on an adventure!',
    user_id: 7
  },
  {
    title: "Algorithms of Oppression: How Search Engines Reinforce Racism",
    content: 'We all know that Google is an amazing search engine. But what if it was a hostile search engine that targeted you and your friends with highly personalized ads? This is the case with AdSense, Google/s original search engine which was replaced by Google Search.',
    user_id: 1,

  },
  {
    title: 'The Myths And Realities Of The Cloud',
    content: 'Is there a wizard up there or something?',
    user_id: 7
  },
  {
    title: '10 Computers All Girls Hate',
    content: 'Almost everybody hates computers, but nobody can explain you why. And today, more than ever, it is important to understand computers and the way they work.',
    user_id: 3
  },
  {
    title: 'Keep Calm And Think About Computers',
    content: 'Why is it that we humans so often seem to be on the verge of some kind of disaster?',
    user_id: 10
  },
  {
    title: 'Computers And Smoking Nowadays',
    content: 'I just cannot believe my eyes.',
    user_id: 8
  },
  {
    title: 'This Is Why People Love The Cloud',
    content: 'It is fluffy, and sometimes, they look like recognizable figures.',
    user_id: 6
  },
  {
    title: 'Crazy Ideas About Ai You Would Like To Try Again',
    content: 'These ideas may compute!',
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
