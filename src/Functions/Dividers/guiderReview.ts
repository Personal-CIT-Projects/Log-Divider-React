import {useState} from "react";
import {
    getAccountFromArray,
    getFirstLoginPlayTime,
    getLastLogoutPlayTime,
    getNickFromArray,
    getPlaytimeFromArray
} from "./getBasicLogInfo";

let tempLogin : string[] = []
let tempLoginMisc : string[] = []
let tempQuitMisc : string[] = []
let tempMyc : string[] = []
let tempWarps : string[] = []

export function useDivider() {
    const [loading, setLoading] = useState(false)
    const [myc, setMyc] = useState<string[]>([])
    const [warps, setWarps] = useState<string[]>([])
    const [loginMisc, setLoginMisc] = useState<string[]>([])
    const [login, setLogin] = useState<string[]>([])
    const [quitMisc, setQuitMisc] = useState<string[]>([])

    function execute(input : string, month : string = "") {
        setLoading(true)
        resetArrays()
        const lines = input.split("\n")
        console.log("Parsing "+lines.length+" lines")
        lines.forEach(e => assignLine(e, month))

        setMyc(tempMyc)
        setWarps(tempWarps)
        setLoginMisc(tempLoginMisc)
        setLogin(tempLogin)
        setQuitMisc(tempQuitMisc)
        setLoading(false)
    }

    function getPlaytime() {
        return {
            start: getFirstLoginPlayTime(loginMisc),
            end: getLastLogoutPlayTime(quitMisc),
            calculated: getPlaytimeFromArray(loginMisc, quitMisc)
        }
    }

    function getNick() {
        return getNickFromArray(login)
    }

    function getAccount() : string {
        return getAccountFromArray(login)
    }

    return {execute, loading, warps, myc, getPlaytime, getNick, getAccount}
}

function assignLine(line:string, month : string = "") {
    if(month.length > 0 && !line.substring(0,5).includes(month)) return;
    console.log(line.substring(0,5))
    if(line.includes(" LOGIN: ")) tempLogin.push(line)
    if(line.includes(" LOGIN MISC: ")) tempLoginMisc.push(line)
    if(line.includes(" QUIT MISC: ")) tempQuitMisc.push(line)
    if(line.includes(" (MYC ")) tempMyc.push(line)
    if(line.includes(" (GUIDE WARP) ") && line.includes("warped to")) tempWarps.push(line)
}

function resetArrays() {
    tempLogin = []
    tempLoginMisc = []
    tempQuitMisc = []
    tempMyc = []
    tempWarps = []
}
