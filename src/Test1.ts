import { Utils } from "./Utils";
import axios from "axios";

const unit_test = async () => {
    //test1
    if (Utils.add(1, 2) === 3) {
        console.log(0)
    } else {
        console.log('add test1')
        return;
    }
    
    //test2
    if (Utils.add(2, 3) === 5) {
        console.log(0)
    } else {
        console.log('add test2')
        return;
    }

    //test addUser
    const data: any = {
        "name": "pop",
        "username": "iampop"
    }

    try {
        const response: any = await Utils.addUser(data);
        const correct_result: any = { "name": "pop", "username": "iampop" }

        const keys: string[] = Object.keys(correct_result);
        for (const k of keys) {
            if (correct_result[k] !== response[k]) {
                console.log("addUser " + k)
                return
            }
        }
    }
    catch (error) {
        console.log("addUser" + error);
    }


}

unit_test();