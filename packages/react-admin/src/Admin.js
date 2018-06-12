import { CoreAdmin } from '@devel/ra-core';
import {
    Layout as DefaultLayout,
    Loading,
    Login,
    Logout,
    Menu,
    NotFound,
} from '@devel/ra-ui-materialui';

const Admin = CoreAdmin;

Admin.defaultProps = {
    appLayout: DefaultLayout,
    catchAll: NotFound,
    loading: Loading,
    loginPage: Login,
    logoutButton: Logout,
    menu: Menu,
};

export default Admin;
