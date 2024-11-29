// Iterator pattern - Loop over some collection of objects and return one at a time

const items = [1, "devsage", false, 1.24]

function Iterator(items) {
    this.items = items
    this.index = 0
    this.hasNext = () => this.index < this.items.length  // 1st way
    this.next = () => this.items[this.index++] // 1st way
}

// Iterator.prototype = {   // 2nd way
//     hasNext: function() {
//         return this.index < this.items.length
//     },
//     next: function() {
//         return this.items[this.index++]
//     }
// }

const iter = new Iterator(items)

while (iter.hasNext()) {
    console.log(iter.next())
}