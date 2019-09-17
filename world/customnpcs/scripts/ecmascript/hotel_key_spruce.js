//// for key that will wear out
var npctype = EntityType.class.getField('NPC').get('');
var rangeDetect = 4;
var trigger;
var key_life = 20; // number of times the key can be used
var key_name = "SpruceDoor" // change for each door
  //
function init(event) {
  event.block.setBlockModel("minecraft:spruce_door");
  if (event.block.getStoreddata().get("key_life") == null || event.block.getStoreddata().get("key_life") < 0) {
    event.block.getStoreddata().put("key_life", key_life);
  }
  trigger = event.block.world.getNearbyEntities(event.block.x, event.block.y, event.block.z, rangeDetect, npctype);
}
function interact(event) {

  var item = event.player.getMainhandItem();
  var Islocked = event.block.getStoreddata().get("Islocked");
  if (item == null || item.getDisplayName() != key_name) {
    if (Islocked) {
      event.player.world.broadcast(" the door is locked ");
      event.setCanceled(true);
    }
  } else {
    if (Islocked) {

      event.player.world.broadcast(" the door is unlocked");
      event.block.getStoreddata().put("Islocked", 0);
      event.block.getStoreddata().put("key_life", event.block.getStoreddata().get("key_life") - 1);
      event.player.world.broadcast(event.block.getStoreddata().get("key_life"));
      keylife(event);
    } else {

      event.player.world.broadcast(" the door is locked ");
      event.block.getStoreddata().put("Islocked", 1);
      event.block.getStoreddata().put("key_life", event.block.getStoreddata().get("key_life") - 1);
      keylife(event);
    }
    event.setCanceled(true);
  }
}
function keylife(event) {
  if (event.block.getStoreddata().get("key_life") < 0) {
    event.player.world.broadcast("your key is worn out ");
    trigger[0].executeCommand("/clear " + event.player.name + " variedcommodities:key -1 -1 {display:{Name:" + key_name + "}}");
    trigger[0].executeCommand("/give " + event.player.name + " variedcommodities:key2 1 0 {display:{Name:Broken}}");
    event.block.getStoreddata().put("key_life", key_life);
    event.setCanceled(true);
  }
}
