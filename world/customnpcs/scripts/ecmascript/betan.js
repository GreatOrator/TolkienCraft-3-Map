var start = 0;
 function dialog_option(event) {
   if (event.player.hasReadDialog(304)) {
     event.npc.executeCommand("/noppes dialog unread @p 304");
     switch (event.option.getSlot()) {
     case 0:
       event.player.startQuest(92);
       //follow
       start = 1;
       //     event.npc.say("follow " + event.player.name);
       event.npc.getRole().setGuiDisabled(true);
       event.npc.getRole().setFollowing(event.player);
       event.npc.getRole().addDays(10);
       break;
     case 1:
       event.npc.getRole().setInfinite(false);
       event.npc.getRole().addDays(-10);
       break;
     }
   }

 }
 var nav_tick = 15;
 function tick(event) {
   //  event.npc.say(event.npc.getRole().getDays());
   if (start == 1) {
     if (!event.npc.isNavigating()) {
       nav_tick--;
     } else {
       nav_tick = 15;
     }
     if (event.npc.timers.has(1)) {
       //do nothing
     } else if (event.npc.getRole().getFollowing() == null) {
       event.npc.timers.start(1, 200, false);
       event.npc.say("Please get me through these cursed Orcs for a ways, friend.");
     } else if (nav_tick <= 0) {
       event.npc.timers.start(1, 600, false);
       event.npc.say("We have tarried for too long, I must go hide.  Find me again when you can!");
     } else if (event.npc.getRole().getFollowing().hasFinishedQuest(92)) {
       event.npc.timers.start(1, 40, false);
	   event.npc.say("Thanks, friend, I should be able to make it back to the farm on my own from here!");
       event.npc.say("Oh yes... please tell my wife I'm all right if you see her before I do. Our farm is south a ways in the Bree-fields.");
     }
   }
 }
 function timer(event) {
   if (event.id == 1) {
     event.npc.getRole().setInfinite(false);
     event.npc.getRole().addDays(-1000);
     event.npc.setPosition(event.npc.getHomeX(), event.npc.getHomeY(), event.npc.getHomeZ());
     start = 0;
     nav_tick = 15;
   }
 }