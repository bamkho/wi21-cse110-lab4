function everysecond() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(everysecond, 1000);
