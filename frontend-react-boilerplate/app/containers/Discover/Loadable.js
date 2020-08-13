/**
 *
 * Asynchronously loads the component for Discover
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
