import React , {useEffect , useState} from 'react'
import { View, Text } from 'react-native'
import { io } from "socket.io-client";
        

export default function SocketTest() {

    const socket = io('http://192.168.0.101:3000');
        
    const [connectionState , setConnectionState] = useState('waiting for connection')

    const connectToSocket = () =>{

        socket.on("connect", () => {
            console.log( 'socket id' , socket.id); // x8WIv7-mJelg7on_ALbx

            // join room 



            socket.emit('joinRoom', {id: 'abc'});



          });



          socket.onAny((event) => {
            console.log(`${event.name} was called with data: `, event.items);
        });

          socket.on('message', msg=>{
              alert(`new message ${msg.content}`)
          })
    }


    useEffect(()=>{
        connectToSocket()
        return(()=>{
            socket.disconnect();
        })
    },[])


    return (
        <View>
            <Text>Test</Text>
            <Text>{connectionState}</Text>
        </View>
    )
}
