import io from 'socket.io-client';

export default class SocketConfig {
	static SOCKET = io('http://localhost:3000/');
}
