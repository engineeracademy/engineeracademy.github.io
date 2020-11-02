console.log("JavaScript will Show the Number Link On Mobile Devices")
console.log("These Devices will be checked:")
console.log("Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini")
console.log("Thus it will be Hidden on Desktop so No Error on clicking the number incase there is no call app such as skype installed")

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

// alert("Click On the Number to Whatsapp")
