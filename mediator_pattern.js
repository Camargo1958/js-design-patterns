// Mediator pattern - A class that mediates communication between different objects
// Mediator is a class that coordinates the communication between different objects and ensures that they are working together in a way that is compatible with each other

function Member(name) {
    this.name = name
    this.chatroom = null
    this.send = function(msg, toMember) {
        this.chatroom.send(msg, this, toMember)
    }
    this.recieve = function(msg, fromMember) {
        console.log(`${fromMember.name} to ${this.name}: ${msg}`)
    }
}

function Chatroom() {
    let members = {}
    this.addMember = function(member) {
        members[member.name] = member
        member.chatroom = this
    }
    this.send = function(msg, fromMember, toMember) {
        if(toMember) {
            toMember.recieve(msg, fromMember)
        } else { // Broadcast
            for(let m in members) {
                if(members[m] !== fromMember) {
                    members[m].recieve(msg, fromMember)
                }
            }
        }
    }
}

const chat = new Chatroom()
const m1 = new Member('John')
const m2 = new Member('Jane')
const m3 = new Member('Bob')
const m4 = new Member('Alice')    
chat.addMember(m1)
chat.addMember(m2)
chat.addMember(m3)
chat.addMember(m4)
m1.send('Hi', m2)
m2.send('Hello', m1)
m3.send('How are you?', m1)
m1.send('I am fine', m3)
m2.send('Everybody is fine') // Broadcast