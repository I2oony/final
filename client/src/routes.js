import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import {LessonsPage} from "./pages/LessonsPage";
import {ForumPage} from "./pages/ForumPage";
import {AuthPage} from "./pages/AuthPage";

export  const useRoutes = isAuthenticated => {
    if(isAuthenticated) {
        return (
            <Switch>
                <Route path="/lessons" exact>
                    <LessonsPage/>
                </Route>
                <Route path="/forum" exact>
                    <ForumPage/>
                </Route>
                <Redirect to="/lessons"/>
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
};