import { Websocket } from '@typetron/websockets'

const TypetronWebSockets = async () => {
    const socket = new Websocket('ws://localhost:8001')

    const someOtherResponse = await socket.request('welcome')
    console.log('some other response ->', someOtherResponse)

    socket.on('welcome').subscribe(response => {
        console.log('Backend response', response)
    })
    socket.emit('welcome')

}
TypetronWebSockets()

// const JavascriptAPI = () => {
//
//     const socket = new WebSocket('ws://localhost:8001')
//
//     socket.onopen = () => {
//
//         socket.onmessage = message => {
//             const response = JSON.parse(message.data)
//             console.log('Backend response', response.message)
//         }
//
//         socket.send(JSON.stringify({event: 'welcome'}))
//     }
//
// }
// JavascriptAPI()
