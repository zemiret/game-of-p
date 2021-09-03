import {
  TypedUseSelectorHook,
  useDispatch as reduxUseDispatch,
  useSelector as reduxUseSelector,
} from 'react-redux';
import {DispatchType, RootState} from 'app/state/store';

export const useDispatch = () => reduxUseDispatch<DispatchType>();
export const useSelector: TypedUseSelectorHook<RootState> = reduxUseSelector;
