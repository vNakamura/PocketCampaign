// @flow

import TimelineLite from 'gsap/TimelineLite';

let previousTimeline;

export default (speak: (text:string) => void) => {
  const tl = new TimelineLite({ delay: 3 });
  if (previousTimeline && previousTimeline.isActive()) previousTimeline.kill();
  previousTimeline = tl;
  tl
  .call(speak, ['Hey there.'])
  .call(speak, [`Wellcome to Pocket Campaign!
    I'm the Tutorial Bot.
    The app is not complete yet, but I'll show you what we have.`], null, '+=3')
  .call(speak, ['First, you can send text messages just like any chat app.'], null, '+=6')
  .call(speak, [`Besides that, you can roll some dice.
    We're here to play RPG, right?`], null, '+=15')
  .call(speak, [`Why don't you try it for yourself?
    Tap the "Roll" button down there and select the notation you want to roll.`], null, '+=6')
  .call(speak, [`You can also tap a notation from the chat to roll it automatically.
    Let's say the GM tells you to roll 3d20+5.
    You just tap it you will roll it. Cool, huh?`], null, '+=25')
  .call(speak, [`That's it for now.
    But we have new features comming soon. Keep an eye at our Github repository for when we have a fully functional version.`], null, '+=10');
};
