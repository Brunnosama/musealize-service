import { Route, Routes as RDRoutes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicOnlyRoute } from './components/PublicOnlyRoute';
import { HomeView } from './views/Home';
import { LoginView } from './views/Login';
import { NewEstimateView } from './views/NewEstimate';
import { NotFoundView } from './views/NotFound'
import { RegisterView } from './views/Register';

export function Routes() {
    return (
        <RDRoutes>
            <Route path='/' element={<HomeView />} />
            <Route path='*' element={<NotFoundView />} />

            <Route
                path='/cadastro'
                element={
                    <PublicOnlyRoute>
                        <RegisterView />
                    </PublicOnlyRoute>
                }
            />
            <Route
                path='/login'
                element={
                    <PublicOnlyRoute>
                        <LoginView />
                    </PublicOnlyRoute>
                }
            />

            <Route
                path='/novo-roteiro'
                element={
                    <PrivateRoute>
                        <NewEstimateView />
                    </PrivateRoute>

                } />
        </RDRoutes>
    );
}