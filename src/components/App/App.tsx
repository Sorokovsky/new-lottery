import { FC, memo, StrictMode, Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../constants/router';

const App: FC = () => {
  return (
    <StrictMode>
      <Suspense fallback={'Loading'}>
        <RouterProvider router={router} />
        </Suspense>
    </StrictMode>
  )
}

export default memo(App);