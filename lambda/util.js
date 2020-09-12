const characters = ['thais', 'lena', 'janete', 'alexandre'];

module.exports.getCharacter = function getCharacter(love) {

    if (!love) return 'characterNotFound';
    return characters[characters.indexOf(love.toLowerCase())];
}