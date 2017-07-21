function init(event) {
	event.block.setBlockModel("minecraft:dark_oak_door");
}

function interact(event) {
	if (event.player.getMainhandItem() != null) {
		if (event.player.getMainhandItem().getDisplayName() == "The key") {
			if ( event.block.getStoreddata().get("door") == 0) {
				event.block.setOpen(true);
				event.block.world.broadcast("close");
				event.block.getStoreddata().put("door",1);
			} else {
					event.block.setOpen(false);
					event.block.world.broadcast("open");
					event.block.getStoreddata().put("door",0);
			}
		} else {
				event.setCanceled(true);
				event.block.world.broadcast("wrong");
		}
	} else {
		event.setCanceled(true);
		event.block.world.broadcast("nothing");
	}
}
