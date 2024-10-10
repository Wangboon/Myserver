"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Utils_1 = require("./Utils");
const cors_1 = __importDefault(require("cors"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const app = (0, express_1.default)();
const port = 3000;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const data = fs_1.default.readFileSync(path_1.default.join(__dirname, 'config.json'), { encoding: 'utf8', flag: 'r' });
const config = JSON.parse(data);
const mongoUri = config.connection;
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', UserRoutes_1.default);
app.get('/', (req, res) => {
    res.send("hello pop");
});
app.get('/addUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = {
        "name": "pop",
        "username": "iampop"
    };
    const result = yield Utils_1.Utils.addUser(data); //3 party jsonplaceholder
    console.log(result);
    res.send(result);
}));
mongoose_1.default.connect(mongoUri).then(() => {
    console.log("connection to Mongo Atlas");
    app.listen(3000, () => {
        console.log("server start at prot 3000");
    });
}).catch(err => {
    console.log("error connect to Mongo Atlas");
});
// app.listen(port, ()=>{
//     console.log('server is '+port);
// })
//web brow localhost:3000?userid=1 <---res          (ts)myserver (addUser) <--res-- (3 party) jsonplace... users
