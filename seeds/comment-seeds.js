const { Comment } = require("../models");

const commentdata = [
  {
    comment_text:
      "Him? Friendly? You really don\’t know him well do you? He is an awful person.",
      user_id: 10,
      postId: 19
  },
  {
    comment_text: "Sounds like a good idea, are you author of this post?",
    user_id: 10,
      postId: 18
  },
  {
    comment_text:
      "I like funny memes like: top ten sad anime moments or top ten anime betrayals, etc. Really funny.",
      user_id: 10,
      postId: 17
  },
  {
    comment_text:
      "Any chance that there is something wrong with your keyboard? All other options are not possible.",
      user_id: 10,
      postId: 16
  },
  {
    comment_text:
      "I am actually ashamed, the other day I said hello to complete stranger when I thought that I knew him, I probably looked like silly person.",
      user_id: 10,
      postId: 15
  },
  {
    comment_text:
      "Just finished reading of LOTR, book is awesome, I felt like I was inside Middle Earth : D",
      user_id: 10,
      postId: 14
  },
  {
    comment_text:
      "People, in general, make me nervous, you can never know what to expect from them.",
      user_id: 10,
      postId: 13
  },
  {
    comment_text:
      "Guys just give me little bit of more time, I will find solution and post it in this thread, be patient.",
      user_id: 10,
      postId: 11
  },
  {
    comment_text:
      "What I love the most about 9GAG? Community and their comments, of course, they are so funny : D",
      user_id: 10,
      postId: 12
  },
  {
    comment_text:
      "Raid wipe was so common in Lich King patch, new patches are easier and this is bad thing.",
      user_id: 10,
      postId: 13
  },
  {
    comment_text:
      "What is a panic attack anyway? Why do we experience it at random moments? For no reason at all…",
      user_id: 10,
      postId: 14
  },
  {
    comment_text:
      "Hmmm, you hardly ever did anything in your life and now you wine that you are not successful, really?",
      user_id: 10,
      postId: 15
  },
  {
    comment_text:
      "Do you even understand what caused your problem? You do not have any antivirus on your system and malware damaged your system.",
      user_id: 10,
      postId: 16
  },
  {
    comment_text:
      "People do not read books anymore, they think that reading is not in trend, as if being smart is a matter of being trendy. Some people are so… weird…",
      user_id: 10,
      postId: 17
  },
  {
    comment_text:
      "I just cannot find Adobe flash player offline installer, I looked all over the internet and 0 results.",
      user_id: 8,
      postId: 1
  },
  {
    comment_text: "What you mean by it? You think we do not know about it? LOL",
    user_id: 7,
    postId: 6
  },
  {
    comment_text:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
      user_id: 6,
      postId: 5
  },
  {
    comment_text:
      "Can you put more effort in your work? People can easily see when author is not doing his best.",
      user_id: 5,
      postId: 4
  },
  {
    comment_text:
      "This thread is really interesting, but I was hoping to see information about new Half Life 3.",
      user_id: 4,
      postId: 3
  },
  {
    comment_text:
      "Don't steal, don't lie, don't cheat, don't sell drugs. The government hates competition!",
      user_id: 3,
      postId: 2
  },
  {
    comment_text:
      "We all are so wise, when we talk about other\’s problems and so stupid when we are trying to handle our own problems.",
      user_id: 10,
      postId: 2
  },
  {
    comment_text:
      "Why would you want to improve your PC specs further? You already have a pretty decent one.",
      user_id: 2,
      postId: 1
  },
  {
    comment_text:
      "I know what I\’m saying, you have to delete that exact file if you want to remove soft fully, otherwise it won’t work.",
      user_id: 1,
      postId: 11
  },
  {
    comment_text:
      "How do I prepare for work? I put on my headphones and I enjoy my favorite music while coding scripts.",
      user_id: 11,
      postId: 10
  },
  {
    comment_text:
      "Chewing bubble gum in public is not really nice thing to do, anyway, this is how I see it, you might have a different opinion.",
      user_id: 10,
      postId: 9
  },
  {
    comment_text:
      "My phone is getting too hot and battery dies super fast, should I stop playing games from it?",
      user_id: 9,
      postId: 8
  },
  {
    comment_text:
      "So what are your thoughts about Brexit? Do you think it was bad thing or a good thing?",
      user_id: 8,
      postId: 7
  },
  {
    comment_text:
      "From my point of view you are not right Sam, you made a mistake and you have to fix them yourself. This how I see it…",
      user_id: 7,
      postId: 6
  },
  {
    comment_text:
      "Making some calculation, it will take a while, please be patient and play some Happy Wheels while I'm working.",
      user_id: 6,
      postId: 5
  },
  {
    comment_text:
      "I just bought a couple of stickers for my bag and I am really happy with my purchase, do you guys want to see a picture of it?",
      user_id: 5,
      postId: 4
  },
  {
    comment_text:
      "Hello darkness my old friend, awesome music, I really love Disturbed edition of it.",
      user_id: 4,
      postId: 3
  },
  {
    comment_text:
      "Sorry for dumb questions guys, I am just really new to this subject and a lot of different stuff is still not clear for me, anyway thank you for answering, I really appreciate it.",
      user_id: 3,
      postId: 2
  },
  {
    comment_text:
      "Unity player? What is it? Do I have to install it in order to play your game? Where can I find it?",
      user_id: 2,
      postId: 1
  },
  {
    comment_text:
      "Jane is right, she was 100% right about this issue, follow her guide step by step and you will resolve this bug.",
      user_id: 1,
      postId: 11
  },
  {
    comment_text: "Yes of course, as soon as you fulfill your old promises...",
    user_id: 11,
    postId: 10
  },
  {
    comment_text:
      "Using your article and walkthrough, I am impressed by the results which I achieved so far.",
      user_id: 10,
      postId: 9
  },
  {
    comment_text:
      "Join our community guys, together we can make some difference, together we can achieve more.",
      user_id: 9,
      postId: 8
  },
  {
    comment_text:
      "I do not really need problems right now, I will skip this project for now, need to finish previous one first.",
      user_id: 8,
      postId: 7
  },
  {
    comment_text:
      "Reading books these days is like wearing weird outfit, do you want to know why? Because it attracts too much attention.",
      user_id: 7,
      postId: 6
  },
  {
    comment_text:
      "Guys in case you are into gaming know this, always play educational games and quiz games, they improve your thinking abilities.",
      user_id: 6,
      postId: 5
  },
  {
    comment_text:
      "Which social media pages are you using right now? I use none, because they all violate privacy rules.",
      user_id: 5,
      postId: 4
  },
  {
    comment_text:
      "So you want success in life? It is actually pretty easy, all you have to do is to put the effort into your work.",
      user_id: 4,
      postId: 3
  },
  {
    comment_text:
      "So exciting news today is that there are brand new heroes in Dota, the bad news is that we still lack good players :D",
      user_id: 3,
      postId: 2
  },
  {
    comment_text:
      "Trusting politician is the worst thing you can do, but people are funny, they repeat same mistake.",
      user_id: 2,
      postId: 1
  },
  {
    comment_text:
      "Diving is like visiting another world, another reality, it totally blows my mind every single time.",
      user_id: 1,
      postId: 11
  },
  {
    comment_text:
      "Which movie is your favorite one? I think mine is The Book Thief. I really admired death monologues in it.",
      user_id: 11,
      postId: 10
  },
  {
    comment_text: "Love you guys, keep up good work. Write more often please.",
    user_id: 10,
    postId: 9
  },
  {
    comment_text:
      "I rarely use caps lock for typing, but when I do, I express my anger this way, IS THAT CLEAR FOR YOU?",
      user_id: 8,
      postId: 8
  },
  {
    comment_text:
      "It will take me forever to write another article about this subject, can you please visit my YouTube channel and find a video titled: How to use PHPMyAdmin? Thanks.",
      user_id: 5,
      postId: 7
  },
  {
    comment_text:
      "Fun fact, it is okay to have different opinion and it is okay to talk about it.",
      user_id: 2,
      postId: 6
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
