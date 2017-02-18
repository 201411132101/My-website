var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) 
	{
        document.title = '我藏好了哦';
        clearTimeout(titleTime);
    }
    else 
	{
        document.title = '被你发现了';
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 500);
    }
});