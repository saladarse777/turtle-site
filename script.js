$('#simpleButton2').click(function() {
    alert('Save both the sea and turtles through this website!');
    window.location.assign('https://www.seeturtles.org/');
});

if (/Mobi/.test(navigator.userAgent)) {
    alert("This website is not supported for mobile yet, it may look jank.");
    alert("このウェブサイトはまだモバイルに対応していません、それは悪い書式になる可能性があります。");
}

console.log(window.location.pathname, "にいます");