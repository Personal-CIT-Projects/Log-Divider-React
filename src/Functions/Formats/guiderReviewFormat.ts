export default function guiderReviewFormat(nick:string, account:string, mycCount:number, warpCount:number, playtime:{start: number, end: number, calculated: number}) {
    return `[b]Nick: [/b]${nick}
[b]Account: [/b] ${account}
[b]Hours played: [/b](${playtime.end}-${playtime.start})/60=${playtime.calculated}h
[b]MYC Hits: [/b] ${mycCount}
[b]Warps hits: [/b] ${warpCount}
[b]Issues: [/b] 
[hr]`
}
