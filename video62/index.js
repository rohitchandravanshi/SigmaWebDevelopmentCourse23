/*Create a business name generator by combining list of objectives and shop name and another words using JavaScript and do not use array.

Adjective:
Crazy
Amazing
Fire 

Shop name
Engine
Foods
Garments

Another Words:
Bros
Limited
Hub

*/

function generateBusinessName() {
    const adjectives = 'Crazy Amazing Fire'.split(' ');
    const shopNames = 'Engine Foods Garments'.split(' ');
    const otherWords = 'Bros Limited Hub'.split(' ');
  
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const shopNameIndex = Math.floor(Math.random() * shopNames.length);
    const otherWordIndex = Math.floor(Math.random() * otherWords.length);
  
    return adjectives[adjectiveIndex] + ' ' + shopNames[shopNameIndex] + ' ' + otherWords[otherWordIndex];
  }
  