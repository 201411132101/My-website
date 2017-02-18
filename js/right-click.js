function mouseDown()
{
	if(event.button == 0)
		mylove.pause();
	if(event.button == 2){
		mylove.load();
		mylove.play();
	}
}