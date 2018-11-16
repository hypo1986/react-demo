import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = (props) => {
  if (props.error) {
    return <div>Error! <button onClick={props.retry}>Retry</button></div>
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>
  } else if (props.pastDelay) {
    return <div>Loading...</div>
  } else {
    return null
  }
}

const loadableOption = {
  delay: 300,
  timeout: 1000,
  loading: Loading
}

const routers = [
  {
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('pages/home/index.js'),
      loading: Loading,
      delay: loadableOption.delay,
      timeout: loadableOption.timeout
    })
  },
  {
    path: '/home',
    exact: true,
    component: Loadable({
      loader: () => import('pages/home/index.js'),
      loading: Loading,
      delay: loadableOption.delay,
      timeout: loadableOption.timeout
    })
  },
  {
    path: '/scheme/:orderId',
    exact: true,
    component: Loadable({
      loader: () => import('pages/Scheme/Scheme.jsx'),
      loading: Loading,
      delay: loadableOption.delay,
      timeout: loadableOption.timeout
    })
  },
  {
    path: '/just/:orderId/:userFamilyRequestId',
    exact: true,
    component: Loadable({
      loader: () => import('pages/justNeed/justNeed.jsx'),
      loading: Loading,
      delay: loadableOption.delay,
      timeout: loadableOption.timeout
    })
  },
  {
    path: '/family/:orderId',
    exact: true,
    component: Loadable({
      loader: () => import('pages/FamilyAnalysis/index.jsx'),
      loading: Loading,
      delay: loadableOption.delay,
      timeout: loadableOption.timeout
    })
  },
  {
    path: '/details/:orderId/:userFamilyRequestId/:riskId',
    exact: true,
    component: Loadable({
      loader: () => import('pages/Details/index.jsx'),
      loading: Loading,
      delay: loadableOption.delay,
      timeout: loadableOption.timeout
    })
  },
  {
    path: '/analysis/:orderId/:userFamilyRequestId/:adviseType',
    exact: true,
    component: Loadable({
      loader: () => import('pages/Analysis/index.jsx'),
      loading: Loading,
      delay: loadableOption.delay,
      timeout: loadableOption.timeout
    })
  },
  {
    path: '/notification/:riskId',
    exact: true,
    component: Loadable({
      loader: () => import('pages/Notification/index.jsx'),
      loading: Loading,
      delay: loadableOption.delay,
      timeout: loadableOption.timeout
    })
  },
  {
    path: '/securityDetails/:orderId/:userFamilyRequestId/:riskId',
    exact: true,
    component: Loadable({
      loader: () => import('pages/SecurityDetails/index.jsx'),
      loading: Loading,
      delay: loadableOption.delay,
      timeout: loadableOption.timeout
    })
  },
  {
    path: '/diseaseinfo',
    exact: true,
    component: Loadable({
      loader: () => import('pages/DiseaseInfo/index.jsx'),
      loading: Loading,
      delay: loadableOption.delay,
      timeout: loadableOption.timeout
    })
  },
  {
    path: '/ageinfo',
    exact: true,
    component: Loadable({
      loader: () => import('pages/AgeInfo/index.jsx'),
      loading: Loading,
      delay: loadableOption.delay,
      timeout: loadableOption.timeout
    })
  },
  {
    path: '/medicalinfo',
    exact: true,
    component: Loadable({
      loader: () => import('pages/MedicalInfo/index.jsx'),
      loading: Loading,
      delay: loadableOption.delay,
      timeout: loadableOption.timeout
    })
  },
  {
    path: '/accidentinfo',
    exact: true,
    component: Loadable({
      loader: () => import('pages/AccidentInfo/index.jsx'),
      loading: Loading,
      delay: loadableOption.delay,
      timeout: loadableOption.timeout
    })
  }
]

const Routers = () => (
  <main>
    <Switch>
      {
        routers.map(({ component, path, exact }, index) => {
          return <Route exact={exact} path={path} component={component} key={path} />
        })
      }
    </Switch>
  </main>
)

export default Routers
