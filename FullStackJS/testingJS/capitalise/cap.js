function capitalise(str) {
    str = str.replace(str[0],str[0].toUpperCase());
    console.log(str);
    return str;
}

module.exports = capitalise;