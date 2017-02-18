function mouseDown()
{
	if(event.button == 0)
		music.pause();
	if(event.button == 2){
		music.load();
		music.play();
	}
}