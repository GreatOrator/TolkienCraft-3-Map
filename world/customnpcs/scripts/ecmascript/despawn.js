function tick(event){
	if(npc.getAge() > 6000){
		npc.despawn();
	}
}