var hour = new Date().getHours();
var minut = new Date().getMinutes();
if (minut < 10) {
    var all_time = hour + "0" + minut;
} else {
    var all_time = hour + "" + minut;
}
if (all_time >= 830 && all_time < 1005) {
    div1.style.cssText = `background: #C6B17C;`;
    time_les.style.cssText = `top: 130px; display: block;`;
    if (all_time >= 830 && all_time < 840) {
        document.getElementById("time_les").innerHTML = "Розпочинається";
    }
    if (all_time >= 840 && all_time < 915) {
        document.getElementById("time_les").innerHTML = "Триває";
    }
    if (all_time >= 915 && all_time < 921) {
        document.getElementById("time_les").innerHTML = "Перепив";
    }
    if (all_time >= 921 && all_time < 955) {
        document.getElementById("time_les").innerHTML = "Триває";
    }
    if (all_time >= 955 && all_time < 1005) {
        document.getElementById("time_les").innerHTML = "Закінчується";
    }
}
if (all_time >= 1015 && all_time < 1150) {
    div2.style.cssText = `background: #C6B17C;`;
    time_les.style.cssText = `top: 240px; display: block;`;
    if (all_time >= 1015 && all_time < 1025) {
        document.getElementById("time_les").innerHTML = "Розпочинається";
    }
    if (all_time >= 1025 && all_time < 1101) {
        document.getElementById("time_les").innerHTML = "Триває";
    }
    if (all_time >= 1101 && all_time < 1106) {
        document.getElementById("time_les").innerHTML = "Перепив";
    }
    if (all_time >= 1106 && all_time < 1140) {
        document.getElementById("time_les").innerHTML = "Триває";
    }
    if (all_time >= 1140 && all_time < 1150) {
        document.getElementById("time_les").innerHTML = "Закінчується";
    }
}
if (all_time >= 1220 && all_time < 1355) {
    div3.style.cssText = `background: #C6B17C;`;
    time_les.style.cssText = `top: 350px; display: block;`;
    if (all_time >= 1220 && all_time < 1230) {
        document.getElementById("time_les").innerHTML = "Розпочинається";
    }
    if (all_time >= 1230 && all_time < 1306) {
        document.getElementById("time_les").innerHTML = "Триває";
    }
    if (all_time >= 1306 && all_time < 1311) {
        document.getElementById("time_les").innerHTML = "Перепив";
    }
    if (all_time >= 1311 && all_time < 1345) {
        document.getElementById("time_les").innerHTML = "Триває";
    }
    if (all_time >= 1345 && all_time < 1355) {
        document.getElementById("time_les").innerHTML = "Закінчується";
    }
}
if (all_time >= 1405 && all_time < 1540) {
    div4.style.cssText = `background: #C6B17C;`;
    time_les.style.cssText = `top: 466px; display: block;`;
    if (all_time >= 1405 && all_time < 1415) {
        document.getElementById("time_les").innerHTML = "Розпочинається";
    }
    if (all_time >= 1415 && all_time < 1451) {
        document.getElementById("time_les").innerHTML = "Триває";
    }
    if (all_time >= 1451 && all_time < 1456) {
        document.getElementById("time_les").innerHTML = "Перепив";
    }
    if (all_time >= 1456 && all_time < 1530) {
        document.getElementById("time_les").innerHTML = "Триває";
    }
    if (all_time >= 1530 && all_time < 1541) {
        document.getElementById("time_les").innerHTML = "Закінчується";
    }
}
if (all_time >= 1550 && all_time < 1725) {
    div5.style.cssText = `background: #C6B17C;`;
    time_les.style.cssText = `top: 570px; display: block;`;
    if (all_time >= 1550 && all_time < 1600) {
        document.getElementById("time_les").innerHTML = "Розпочинається";
    }
    if (all_time >= 1600 && all_time < 1636) {
        document.getElementById("time_les").innerHTML = "Триває";
    }
    if (all_time >= 1636 && all_time < 1641) {
        document.getElementById("time_les").innerHTML = "Перепив";
    }
    if (all_time >= 1641 && all_time < 1716) {
        document.getElementById("time_les").innerHTML = "Триває";
    }
    if (all_time >= 1716 && all_time < 1726) {
        document.getElementById("time_les").innerHTML = "Закінчується";
    }
}
if (all_time >= 1735 && all_time < 1910) {
    div6.style.cssText = `background: #C6B17C;`;
    time_les.style.cssText = `top: 687px; display: block;`;
    if (all_time >= 1735 && all_time < 1745) {
        document.getElementById("time_les").innerHTML = "Розпочинається";
    }
    if (all_time >= 1745 && all_time < 1820) {
        document.getElementById("time_les").innerHTML = "Триває";
    }
    if (all_time >= 1820 && all_time < 1825) {
        document.getElementById("time_les").innerHTML = "Перепив";
    }
    if (all_time >= 1825 && all_time < 1900) {
        document.getElementById("time_les").innerHTML = "Триває";
    }
    if (all_time >= 1900 && all_time < 1910) {
        document.getElementById("time_les").innerHTML = "Закінчується";
    }
}
/* console.log(all_time) */
