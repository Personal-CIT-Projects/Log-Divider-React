export default function cbReviewFormat(nick:string, account:string, chatCount:number, playtime:{start: number, end: number, calculated: number, loginHits: number}, internalChatCount:number, actionsMade:number) : string {
    let result = ``
    result += `\n[b]Name: [/b]${nick}`
    result += `\n[b]Account: [/b]${account}`
    result += `\n[b]Login hits: [/b]${playtime.loginHits}`
    result += `\n[b]Team chat hits: [/b]${chatCount}`
    result += `\n[b]CB chat: [/b]${internalChatCount}`
    result += `\n[b]Actions made: [/b]${actionsMade}`
    result += `\n[b]Played hours in the last review: [/b](${playtime.end}-${playtime.start})/60= ${playtime.calculated}h`
    result += `\n[b]Additional notes: [/b]`
    result += `\n[hr]`

    return result
}
