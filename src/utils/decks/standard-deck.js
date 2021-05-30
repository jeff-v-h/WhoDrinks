import { GameTypesEnum } from '../enums';

export const cardContentList = [
  "If you can speak another language, have a drink. Have another if you're fluent.",
  'Take a drink if you are studying or working in either the medical, law or engineering field',
  'Take a drink if you had rice in the past 12 hours',
  'Drink if you are 165cm or shorter',
  'Every lady have a drink',
  'Have a drink if you have a dick.',
  'Whoever has a tattoo must drink for each one they have up to a maximum of 5.',
  'Everyone who has a hidden tattoo must drink.',
  'If you have scored over 90% or a HD in one of the last 3 exams, drink',
  'If you own a fake brand item, drink',
  "Which player is most addicted to social media? Take 2 sips. If you've checked it in the past hour, take another 2.",
  'Who has had sex in the most exotic location? The person with the most votes can choose someone else to drink with them.',
  'In a drinking contest between the youngest and the oldest players, who would win? The person with the least votes must drink.',
  'Which player is the horniest? The person with the most votes can choose someone to drink. Everyone else should get on their level ;)',
  "Do you sleep on the left or right side of your bed? Players on the team with least amount must drink. Also drink if you don't have a specific side",
  'Drink if you have an online bio that includes a flag.',
  'Which player had sex at the youngest? That person must drink.',
  'Have a thumb war with another player. The loser drinks. Both drink if neither of you know how to have one.',
  "Drink if you've ever lied to the police. Drink another if you don't tell us what you lied about.",
  "Drink if you've participated in a charity run.",
  'Which player has the best smile? The person with the most votes drinks.',
  'Everyone else guess the time. The person with the closest time chooses someone to drink. The person with the farthest time must drink.',
  'Which player has the sexiest voice? The person with the most votes drinks.',
  "Drink if you've ever been kicked out of a club.",
  "Drink if you've ever been given a speeding ticket. Also drink if you don't have a driver licence.",
  'The two players who have known each other the longest take a drink together.',
  'Take a drink for every pet you have.',
  'The player with the smallest shoe size takes a drink.',
  "Drink if you haven't eaten a vegetable and a fruit today",
  'Drink if you have roomates - one drink for each one you have',
  'Drink if you had a swimming pool growing up, you lucky bastard.',
  'Whoever does the best impression of me gives out 2 drinks.',
  'Every player who was born in late September take a drink. Did you ever realise that your parents probably did it over the christmas break?',
  "If you've ever had to get stitches, take a drink.",
  "If you've ever had chicken pox, drink.",
  'Drink if you have to go to work or class in the morning.',
  'Starting on your left, each person says a letter to spell out the word "guarantee". If it isn\'t spelled correctly, everyone drinks.',
  "Take a drink if you've ever seen 'Sausage Party'.",
  "Drink twice if you've ever fooled around at the cinemas.",
  'Drink if you were ever attached to your blankie as a child.',
  'Drink if your family has more than 3 members in it.',
  'All players lay their phones on the table. The first person to receive a push notification drinks.',
  'Every player over 180cm takes a drink. Take another for each 10cm you are taller than this.',
  'The person who had caffeine most recently must have a drink.',
  'Quick: last person to slap their own ass drinks.',
  'Players who currently have lip balm with them, open up those moisturised lips and take a sip.',
  "If you've ever flown first class, choose a pleb to have a drink.",
  'On the count of three, players point at the person most likely to order a salad. Whoever has the most fingers pointed at them drinks.',
  'Drink if you own any Bitcoin. If you own any Dogecoin, have another drink.',
  'All players who have wireless earbuds must drink.',
  "Drink if you've never seen a Lord of the Rings movie.",
  "If you're not following a Kardashian on Instagram, drink.",
  'If you have more than 2 piercings, take a drink.',
  "If you've ever dyed your hair blonde, drink.",
  "Everybody guess my phone's battery percentage. The person closest chooses someone to drink.",
  "If you've ever woken yourself up from your snore or fallen out of bed during sleep, drink.",
  'All players who have stickers on their laptops must drink.',
  'All players who have been in a share ride in the past month must drink.',
  'Each person who has a crack on their phone screen must drink.',
  'Each player must take a drink for each additonal layer of clothing they have on after the first.',
  'Whoever has a picture of a dog, cat, baby or toddler on their phone background must drink.',
  'Every person with non-black hair must drink.',
  'If you play some sort of sport on a weekly basis, drink.',
  "Drink if you're in a serious relationship. Now share a kiss while everyone else says 'Get a room!'",
  "Have a drink if you've ever had a Tumblr or MySpace.",
  'Drink if you ever took piano or keyboard lessons as a kid.',
  'Drink if you think pineapple tastes good on pizza.',
  "Every player who has both their hands touching have a sip. Have another if you're touching someone elses hand.",
  'Everyone point at the player on the count of three. Each person drinks for the amount of fingers pointed at them.',
  'Everyone touch your ass with both hands! The slowest person drinks.',
  'The host of the party chooses a player to drink twice.',
  'Everyone drinks once for every Apple product they own.',
  "Take a drink if you've ever been to a three day music festival.",
  "Drink if you've ever been to Oktoberfest. Take another drink if you didn't wear a lederhosen or dirndl.",
  "If you've ever been to Coachella, take a sip for each day you've been.",
  'Vote for the person who is most likely to have a motivational quote on an online bio. This person must drink.',
  'Drink if you hit the snooze button more than once on most mornings.',
  'Everyone must help the person to their left take a a drink by pouring a sip directly into their mouth.',
  "Choose another player to high five. If your palms don't match up well enough on the first hit, both of you must drink. Everyone else makes the call.",
  'The person with the most criminal looking photo ID must drink.',
  'Take a drink if you have had sex in the past 48 hours.',
  'The first player to take a picture of me gets to choose 2 people to drink.',
  'Every player with dyed hair takes a drink.',
  "If you've been on a road trip longer than 4 hours, you know what to do.",
  "If you've been on a flight layover for more than 10 hours, drink.",
  'First player to guess a song that you hum correctly gives out 2 drinks, but if no one guesses correctly in 15 seconds, you must drink.',
  'Everyone who has been non-sober in the past week must take a drink.',
  'Drink if you believe there are aliens somewhere out in space.',
  "Everyone votes who they think is the most likely to die first in a horror movie. That person must have a drink and enjoy it like there's no tomorrow.",
  'Which player is most likely to skip a day of showering? The person with the most votes drinks.',
  'Every player takes a drink for each year they had any form of dental aligners (such as braces).',
  'Everyone must have one drink for every teacher, lecturer or tutor they have had a crush on.',
  'Drink if you read or watched the news today.',
  'Which person is most likely to get lost while in a new city? That person must drink.',
  'If you have never read a Harry Potter book from start to finish, drink.',
  'The player with the most fractures in their lifetime can give out one drink for each one they have had.',
  'Drink if you enjoy drawing or painting',
  'If your name is Tony, William, Michael, Joanna, Katherine or Jennifer, drink.',
  'Players with at least one earring on must drink.',
  'Drink if you cooked for yourself yesterday. Good on you for adulting.',
  'Everyone who has texted their ex in the last month must have a drink.',
  "Drink if you've ever invested in shares.",
  "Drink if you've been fired from a job before.",
  "Drink if you're not wearing a bra.",
  "Take a drink if you don't know how old your dad is. Take another if you don't know how old your mum is.",
  "Drink if you've used a pad or tampon in the past week.",
  'Give out a drink for each ex-girlfriend/boyfriend you have ever had.',
  'All players who have an iPad or any other brand of Tablet must drink.',
  'Players must drink for each other person wearing the same coloured underwear.',
  "Every player who doesn't know how to swim must drink.",
  "Drink if you've ever sneakily thrown up on a night of drinking and then continued to party.",
  "Drink if you've ever stayed overnight at a farm.",
  'Everyone who owns a vape must drink.',
  "Have a sip if you've ever touched a cow or horse.",
  "Each person must drink if they've ever been to class non- or hungover.",
  "Take three sips if you have the fullest drink. No one cares if you've just gotten a new drink.",
  "All players who are using someone else's Netflix account must drink.",
  "Any player who doesn't know what 'Lick, sip, suck' refers to must drink.",
  'If you own an Android, drink',
  'All players younger in age than you must drink.',
  'Every person born on the same month as you drinks',
  'Whoever had to drink last round drinks again. Suck it!',
  'The last person who had a cigarette drinks.',
  'If you had pasta this week, drink',
  'Reverse the rotation of the game. Drink for being the person who picked this card.',
  "If you don't eat beef or pork, drink.",
  'Everyone say their favourite sex position. Whoever has the same answer should cheers and drink together.',
  "Drink if you've ever lost over $50 on a single bet. Sucks to be you.",
  'The player whose drink is most full must drink 3 times. Time to catch up, buddy.',
  'Male players take a drink for each female player in the room.',
  'Drink if you are friends with your mum on Facebook.',
  "All players who are touching their phone right now take 2 sips. If you're looking at it take 4 instead.",
  'Whoever knows how to roll a joint must drink.',
  'Everyone who has ever sent or received a dick pic must have a drink.',
  'Drink if you drank yesterday as well.',
  'Go around the circle saying the alphabet backward. Whoever screws up drinks.',
  'Players wearing a black piece of clothing must drink.',
  "Drink if you've ever done Molly at a festival.",
  "Drink if you've ever had a swim at The Great Barrier Reef.",
  "If you've ever been on a hike, take a sip.",
  'All players who have been to the gym in the past 48 hours drink, then show us your guns.',
  "Go around and each person must try to rub their stomach with a circular motion with one hand and tap the top of their head repeatedly with the other. Whoever doesn't get it right on the first go or within 5 seconds must drink.",
  "The player controlling the music right now must drink. If there's no music, the host must drink.",
  'The player who got this game started gives out three drinks.',
  'Pasta or Pizza? Everyone vote and the losing team drinks.',
  'Everyone vote on whether they enjoy Friends or Seinfeld more. Losing team drinks.',
  'If you work in healthcare, take a few moments for yourself to have a drink.',
  'Play scissors, paper, rock with someone and the remaining players bet on who will win. Losers take a drink of shame together.',
  'All players must reveal their first ever email address. The person with the most embarrassing one must drink.',
  'Which would you rather give up, oral sex or your favourite food? The group with the least amount of people drink.',
  'Take a drink if you own a leather jacket.',
  'Whoever has a dimple must drink for being so bloody cute.',
  'The youngest player drinks. If your parents started having sex sooner, you might not have been the youngest.',
  'Everyone give you the middle finger. Last person to do so drinks.',
  "Drink if you've ever walked in on your parents doing it.",
  'Which player is most likely to be hungover at work? The person with the most votes drinks.',
  'Take turns naming disney movies. The first person to repeat or not answer in 5 seconds drinks.',
  'The tallest player and the shortest player hug. Drink if you want to, but sometimes a hug is all you need.',
  "If you don't have an Instagram account, drink.",
  'Any person with an innie belly button drinks.',
  'You must swap a piece of clothing with the person to your left and wear it until the end of this game and then both of you drink.',
  'If you are the youngest sibling, drink.',
  'Have a drink if you do yoga or pilates.',
  'Japanese or Italian food? The losing team drinks.',
  'Red or white wine? Losing team drinks twice.',
  'Drink if you own a University jumper.',
  'Onions or no onions on a hot dog? Losing team drinks.',
  'The next player to answer a question you ask must drink.',
  'Females take a drink for each male in the room.',
  'Any player who has lost a phone or had one stolen in the past 3 years must drink.',
  'Drink if you have a kid.',
  'Drink if you only speak English.',
  'Go around and name different kinds of fish. First one to screw up drinks.',
  "Drink if you've ever studied or worked abroad in Europe.",
  'If you took the highest level maths in high school, drink for being a smart ass.',
  'Go around and name superheroes who have a movie made about them. Drink if you screw up.',
  "If you've finished a book in the past 3 months, drink",
  'Drink if you represented your high school competitively in a sport.',
  "Each person who isn't wearing any underwear gives 3 sips to someone. Cheers to freedom!",
  'Drink if you have at least one pet.',
  'Quick: last person to touch one of their own nipples must drink.'
];

const standardDeck = {
  id: '605320d3ee13192611b07a76',
  name: 'Standard',
  cards: cardContentList,
  tags: [GameTypesEnum.standard, GameTypesEnum.preMade]
};

export default standardDeck;
