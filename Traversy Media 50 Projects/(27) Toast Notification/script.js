const toasts = document.getElementById('toasts')
const buttons = document.getElementById('button')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = [
    'error',
    'info',
    'success',
]

buttons.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : randomType())

    notif.innerHTML = message ? message : randomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000);
}

function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function randomType() {
    return types[Math.floor(Math.random() * types.length)]
}