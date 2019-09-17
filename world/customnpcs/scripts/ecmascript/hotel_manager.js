function dialog_option(event) {
 if (event.player.hasReadDialog(21)) {
    switch (event.option.getSlot()) {
    case 0:
    if (event.player.removeItem("tolkienmobs:item_coin_bronze",0,2)) {
      event.npc.executeCommand("/give "+event.player.name+ " variedcommodities:key 1 0 {display:{Name:DarkOak}}");
    }else {
      event.npc.say("you don't have enough money");
      }
      event.npc.executeCommand("/noppes dialog unread @p 21");
      break;
    case 1:
       if (event.player.removeItem("tolkienmobs:item_coin_silver",0,2)) {
      event.npc.executeCommand("/give "+event.player.name+ " variedcommodities:key 1 0 {display:{Name:SpruceDoor}}");
       } else {
      event.npc.say("you don't have enough money");
      }
      event.npc.executeCommand("/noppes dialog unread @p 21");
      break;
    case 2:
     if (event.player.removeItem("tolkienmobs:item_coin_gold",0,2)) {
      event.npc.executeCommand("/give "+event.player.name+ " variedcommodities:key 1 0 {display:{Name:BirchDoor}}");
     }else {
      event.npc.say("you don't have enough money");
      }
      event.npc.executeCommand("/noppes dialog unread @p 21");
      break;
    }
  }
}

