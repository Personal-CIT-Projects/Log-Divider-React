import {Button, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useDivider} from "../../../Functions/Dividers/guiderAppReview";
import guiderAppReviewFormat from "../../../Functions/Formats/guiderAppReviewFormat";
import {useClipboard} from "../../../Functions/Hooks/Clipboard";
import {ContentArea} from "../../Particles/ContentArea";
import {numberWithCommas} from "../../../Functions/number";

export default function GuiderApplication() {
    const [input, setInput] = useState("")
    const divider = useDivider()
    const clipboard = useClipboard()
    const format = guiderAppReviewFormat(divider.country, divider.login.length, divider.getPlaytime())

    if (divider.loading) return <>Loading...</>

    async function parseClipboard() {
        divider.execute(await clipboard.get())
    }

    async function executeDivider() {
        divider.execute(input)
    }

    async function pasteFormatToClipboard() {
        await clipboard.put(format)
    }

    return <>
        <ParseInfo input={input}/>
        <TextField value={input} sx={{width: "100%", m: 1}} rows={7} multiline
                   onChange={e => setInput(e.target.value)}/>
        <Button color={"warning"} onClick={async () => setInput(await clipboard.get())}>Paste clipboard</Button>
        <Button onClick={parseClipboard} sx={{mx: 5}}>Parse clipboard</Button>
        <Button color={"secondary"} onClick={executeDivider}>Parse input</Button>
        <Button color={"success"} sx={{mx: 5}} onClick={pasteFormatToClipboard}>Copy Format</Button>
        <TextField sx={{width: "100%", m: 1}} multiline value={format}/>
        <Grid container>
            <ContentArea title={"Login"} content={divider.login}/>
            <ContentArea title={"Country"} content={divider.country}/>
        </Grid>
    </>
}

function ParseInfo({input}: { input: string }) {
    return <Typography variant={"h5"} sx={{p: 1}}>
        {input.length === 0 ?
            <>Insert your
                logfile</> : <>{numberWithCommas(input.length)} characters, {numberWithCommas(input.split("\n").length)} lines</>
        }
    </Typography>
}
