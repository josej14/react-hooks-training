const pad = (num) => {
    const string = `0${num}`;
    return string.slice(-2);
};

const formatCountDown = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;

    return `${pad(min)}:${pad(sec)}`;
};

export { formatCountDown }
