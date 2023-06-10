import {Route, Switch} from "react-router";
import Home from "../../Pages/Home";
import SOReview from "../../Pages/StateOfficials/SOReview";
import Admin from "../../Pages/Admin";
import Account from "../../Pages/Account";
import GuiderReview from "../../Pages/Guiders/Review";
import GuiderApplication from "../../Pages/Guiders/Application";
import SOApplication from "../../Pages/StateOfficials/SOApplication";
import Application from "../../Pages/Staff/Application";
import CBReview from "../../Pages/CriminalBoss/CBReview";
import TranslatorReview from "../../Pages/Translators/Review";
import CBApplication from "../../Pages/CriminalBoss/CBApplication";
import useAdmin from "../../../Functions/Hooks/AdminMode";

export default function MainRouter() {
    const {isAdmin} = useAdmin()

    return <Switch>
        <Route path="/Parser/SO/Application" component={SOApplication}/>
        <Route path="/Parser/SO/Review" component={SOReview}/>
        <Route path="/Parser/CB/Review" component={CBReview}/>
        <Route path="/Parser/CB/Application" component={CBApplication}/>
        <Route path="/Parser/Guiders/Application" component={GuiderApplication}/>
        <Route path="/Parser/Guiders/Review" component={GuiderReview}/>
        <Route path="/Parser/Translators/Review" component={TranslatorReview}/>
        {isAdmin && <Route path="/Parser/Admin/Application" component={Application}/>}
        {isAdmin && <Route path="/Parser/Admin" component={Admin}/>}
        <Route path="/Parser/Account" component={Account}/>
        <Route path="/" component={Home}/>
    </Switch>
}
