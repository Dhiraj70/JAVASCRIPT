const sentense = "The quick brown fox jumps over the lazy dog"
const word = "fox2"

console.log(sentense.includes(word))

console.log(`The word "${word}" ${sentense.includes(word)? 'is' : 'is not'} in the sentense`)