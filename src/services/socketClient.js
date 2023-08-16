import { io } from "socket.io-client";
//const socket = io("https://uptime-check-backend.onrender.com");
const socket = io("http://localhost:3001");
export default socket;
