export default function translatorReviewFormat(nick:string, account:string, translationCount:number, loginHits:number, playtime:{start: number, end: number, calculated: number}) {
    return `[b]Nick: [/b]${nick}
[b]Account: [/b] ${account}
[b]Login hits: [/b] ${loginHits}
[b]Hours played: [/b](${playtime.end}-${playtime.start})/60=${playtime.calculated}h
[b]Submissions: [/b] ${translationCount}
[b]Language progress: INSERT_MANUALLY[/b] 
[b]Notes: INSERT_MANUALLY[/b] 
[hr]`
}
