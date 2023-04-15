import React from 'react'
import { hot } from 'react-hot-loader/root'
import './main.global.css'
import { CardsList } from './shared/components/CardsList'
import { Content } from './shared/modules/Content'
import { Head } from './shared/modules/Head'
import { Layout } from './shared/pages/Layout'

function AppComponent() {
  return (
  <Layout>
    <Head />
    <Content>
      <CardsList />
    </Content>
  </Layout>
  )
}

export const App = hot(AppComponent)


