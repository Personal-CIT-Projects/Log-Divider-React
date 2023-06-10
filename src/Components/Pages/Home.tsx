import {Typography} from "@mui/material";
import RandomCat from "../Particles/CatApi";

export default function Home() {
    //const drawer = useDrawer()
    return <div style={{/*width: "100vw", height: "100vh", background: "red", zIndex: 500, position: "absolute", top: 0, left: 0*/}}>
        {/*<Button onClick={drawer.toggle}>Open</Button>*/}
        <CitBanner />
        <SmallText />
        <RandomCat />
    </div>
}

function CitBanner() {
    return <img style={{margin: 5}} src={"https://cit.gg/Themes/Analysis_20/images/img/logo.png"}  alt={"citlogo"}/>
}

function SmallText() {
    return <Typography variant={"body1"}>A parser made by Ptole in ReactJS, to make reviews easier.</Typography>
}
