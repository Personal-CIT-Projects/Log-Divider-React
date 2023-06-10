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
let tempTeam : string[] = []
let tempInternalChat : string[] = []
let tempCba : string[] = []
let tempCbw : string[] = []

export function useDivider() {
    const [loading, setLoading] = useState(false)
    const [team, setTeam] = useState<string[]>([])
    const [loginMisc, setLoginMisc] = useState<string[]>([])
    const [login, setLogin] = useState<string[]>([])
    const [quitMisc, setQuitMisc] = useState<string[]>([])
    const [internalChat, setInternalChat] = useState<string[]>([])
    const [cba, setCba] = useState<string[]>([])
    const [cbw, setCbw] = useState<string[]>([])

    function execute(input : string, month : string = "") {
        setLoading(true)
        resetArrays()
        const lines = input.split("\n")
        console.log("Parsing "+lines.length+" lines")
        lines.forEach(e => assignLine(e, month))

        setTeam(tempTeam)
        setLoginMisc(tempLoginMisc)
        setLogin(tempLogin)
        setQuitMisc(tempQuitMisc)
        setInternalChat(tempInternalChat)
        setCbw(tempCbw)
        setCba(tempCba)
        setLoading(false)
    }

    function getPlaytime() {
        return {
            start: getFirstLoginPlayTime(loginMisc),
            end: getLastLogoutPlayTime(quitMisc),
            calculated: getPlaytimeFromArray(loginMisc, quitMisc),
            loginHits: login.length
        }
    }

    function getNick() {
        return getNickFromArray(login)
    }

    function getAccount() : string {
        return getAccountFromArray(login)
    }

    return {execute, loading, team, getPlaytime, getNick, getAccount, cba, cbw, internalChat}
}

function assignLine(line:string, month : string = "") {
    if(month.length > 0 && !line.substring(0,5).includes(month)) return;
    console.log(line.substring(0,5))
    if(line.includes(" LOGIN: ")) tempLogin.push(line)
    if(line.includes(" LOGIN MISC: ")) tempLoginMisc.push(line)
    if(line.includes(" QUIT MISC: ")) tempQuitMisc.push(line)
    if(line.includes("TC: [Criminals]")) tempTeam.push(line)
    if(line.includes(" (CB) ")) tempInternalChat.push(line)
    if(line.includes(" (CBA) ")) tempCba.push(line)
    if(line.includes(" (CBW) ")) tempCbw.push(line)
}

function resetArrays() {
    tempLogin = []
    tempLoginMisc = []
    tempQuitMisc = []
    tempTeam = []
    tempInternalChat = []
    tempCbw = []
    tempCba = []
}
