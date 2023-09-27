import { DB, Group } from './lib'

const params = new URL(window.location).searchParams
console.log(params.ent)
if (params.has('title')) {
    document.title = params.get('title')
}
    

// window.addEventListener('beforeunload', () => "Are you sure you want to close this group?")
//     fetch('https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg')
//         .then(res => res.blob())
//         .then(blob => {
//             const url = URL.createObjectURL(blob)
//             const img = new Image()
//             img.src = url
//             console.log(url)
//         })
