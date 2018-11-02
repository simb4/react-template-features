export const width = () => {
    var d = document.documentElement;
    var width = window.innerWidth || d.clientWidth;
    return width;
}

export const isSmall = () => width() <= 480;

export const isMedium = () => 480 < width() && width() <= 768;

export const isLarge = () => width() > 768;