import * as io from "socket.io-client"
import { BackendHost } from "../constent/backend"
export default io.connect(BackendHost)