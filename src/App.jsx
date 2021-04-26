/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

// components
import AdminContainer from './components/admin/AdminContainer';

// util
import LoginAdminContainer from 'src/components/admin/content/login/LoginAdminContainer';
import ReloadContainer from "src/components/admin/content/login/ReloadContainer";

function App() {
    return (
        <BrowserRouter>
            {/* <BasicAd/> */}
            <Switch>
                <Route path={'/admin'} component={AdminContainer}/>
                <Route path={'/admin-login'} component={LoginAdminContainer}/>
                <Route path={'/reload'} component={ReloadContainer}/>
                <Route path={'/'} component={AdminContainer}/>
            </Switch>
        </BrowserRouter>
    );
}

export default React.memo(App);
