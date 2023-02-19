$('#simpleButton2').click(function() {
    alert('Save both the sea and turtles through this website!');
    window.location.assign('https://www.seeturtles.org/');
});

if (/Mobi/.test(navigator.userAgent)) {
    alert("You are using a mobile device to view this website, it is not recommended and may cause the website to look scuffed.");
    alert("このウェブサイトはモバイル端末でご覧いただいていますが、推奨環境ではありませんし、スカスカに見えることがあります。");
}

console.log(window.location.pathname, "にいます");