function isColorLightOrDark(color) {
    // Fetched from https://awik.io/determine-color-bright-dark-using-javascript/
    // To learn more: https://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
    if(!color) return "dark"

    let r, g, b, hsp;
    if (color.match(/^rgb/)) {
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        
        r = color[1];
        g = color[2];
        b = color[3];
    } 
    else {
        color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = (color >> 8) & 255;
        b = color & 255;
    }
    
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    if (hsp>130.5) return 'light';
    else return "dark"
}

function findHighestKey({ array, keyName, topAmount, ignore }) {
    return array.filter(app => 
        app[keyName] <= topAmount && 
        !ignore.some(ignoreName => app.name === ignoreName)    
    )
}

function formatUnderscoredString(str) {
    let formattedString = "";
    let lastChar;

    for(const char of str) {
        if(char === "_") formattedString += " "
        else if((lastChar === "_") || lastChar === undefined) formattedString += char.toUpperCase();
        else formattedString += char.toLowerCase();
        lastChar = char
    }
    return formattedString;
}

export {
    isColorLightOrDark,
    findHighestKey,
    formatUnderscoredString
}