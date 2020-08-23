import A from '../components/a'
import B from '../components/b'

export const routeConfig = [
    { path: '/',
        component: A,
        indexRoute: { component: A },
        childRoutes: [
            { path: 'about', component: B },
        ]
    }
]