
var normalVer = document.getElementsByClassName("normal-ver")
var mobileVer = document.getElementsByClassName("mobile-ver")


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	normalVer[0].style.display = "none";
        mobileVer[0].style.display = "block";
    	console.log("DETECTED: MOBILE")
} else {
        normalVer[0].style.display = "block";
        mobileVer[0].style.display = "none";
    	console.log("DETECTED: DESKTOP")
}