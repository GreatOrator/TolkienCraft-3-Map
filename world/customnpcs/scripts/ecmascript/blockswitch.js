function tick(e){

 var nearbyEntities = e.block.world.getNearbyEntities(e.block.getX(), e.block.getY(), e.block.getZ(), 10, 1);
 for (var i = 0; i < nearbyEntities.length; i++) {
   var player = nearbyEntities[i];
var questID = 300; //quest ID
   if(player.hasFinishedQuest(questID)){
   e.block.setModel("minecraft:iron_block");
            e.block.setScale(1, 1, 1);
            e.block.setIsPassible(2);
       
            }else{
            e.block.setModel("minecraft:barrier");

            e.block.setIsPassible(1);
 } 
}
}