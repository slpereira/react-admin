import { CoreAdminRouter } from '@devel/ra-core';
import { Loading } from '@devel/ra-ui-materialui';

const AdminRouter = CoreAdminRouter;

AdminRouter.defaultProps = {
    loading: Loading,
};

export default AdminRouter;
