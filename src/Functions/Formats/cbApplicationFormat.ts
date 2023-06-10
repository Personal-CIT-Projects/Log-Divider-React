export default function cbApplicationFormat(nick:string, account:string, teamChat:string[], playtime:{start: number, end: number, calculated: number, loginHits:number}) : string {
    let result = ""
    result += `[b]Name: [/b]${nick}`
    result += `\n[b]Account: [/b]${account}`
    result += `\n[b]Login hits: [/b]${playtime.loginHits}`
    result += `\n[b]Team chat hits: [/b]${teamChat.length}[spoiler]${teamChat.join('\n')}[/spoiler] `
    result += `\n[b]Played hours in the last 2 months: [/b](${playtime.end}-${playtime.start})/60= ${playtime.calculated}h`
    result += `\n[b]Security check: [/b][spoiler][/spoiler] `
    result += `\n[b]Additional notes: [/b][spoiler][/spoiler] `

    return result
}
