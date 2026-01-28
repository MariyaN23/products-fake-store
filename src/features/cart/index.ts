import { slice } from './cartReducer';
import * as cartSelectors from './cartSelectors';

const cartReducer = slice.reducer

export {
    cartReducer,
    cartSelectors,
}
