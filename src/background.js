import { CONTEXT, DB, Group } from './lib'

browser.runtime.onInstalled.addListener(() => {
    // tab context menu
    browser.menus.create({
        id: CONTEXT.NEW_GROUP,
        title: 'Add tab to new group',
        contexts: ['tab']
    })

    browser.menus.onClicked.addListener(async (info, tab) => {
        if (info.menuItemId === CONTEXT.NEW_GROUP) {
            const groupCount = await DB.count(DB.GROUPS)
            const title = `Group ${groupCount + 1}`
            const params = new URLSearchParams({
                iconcolor: '#00b3f4',
                title
            })
            const groupHead = await browser.tabs.create({
                index: tab.index,
                title,
                active: false,
                discarded: true,
                url: `tab-manager.html?${params.toString()}`,
            })
            groupHead.width = 40
            
            // await Storage.insert(DB.GROUPS, Group({ tabId: groupHead.id }))
        }
    })

    browser.tabs.onActivated.addListener((info) => {
        console.log(info)

    })
    
    browser.runtime.onMessage.addListener((message, send) => {
        
    })
})

// const extWindow = browser.extension.getBackgroundPage()
// extWindow.addEventListener('load', () => {
//     console.log('hi')
// })

//     fetch('https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg')
//         .then(res => res.blob())
//         .then(blob => {
//             const url = URL.createObjectURL(blob)
//             const img = new Image()
//             img.src = url
//             console.log(url)
//         })
