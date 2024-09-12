import { useState } from 'react'
import './App.css'
import Card from './assets/components/Card'

function App() {
  return (
    <>
    <h3 className='little-title'>Featured Social Media Websites</h3>
      <div className="container-1">
        <Card title ='Facebook' subtitle='Facebook' description='Facebook is the biggest social online plataform' />
        <Card title = 'Twitter' subtitle='Twitter' description='Twitter is the biggest social online plataform'/>
        <Card title = 'Instagram' subtitle='Instagram' description='Instagram is the biggest social online plataform'/>
        <Card title = 'Youtube' subtitle='Youtube' description='Youtube is the biggest social online plataform'/>
        <Card title = 'Tiktok'  subtitle='Tiktok' description='Tiktok is the biggest social online plataform'/>
        <Card title = 'Snapchat' subtitle='Snapchat' description='Snapchat is the biggest social online plataform'/>
        <Card title = 'Telegram' subtitle='Telegram' description='Telegram is the biggest social online plataform'/>
        <Card title = 'Whatsapp' subtitle='Whatsapp' description='Whatsapp is the biggest social online plataform'/>
        <Card title = 'Pinterest' subtitle='Pinteres' description='Pinterest is the biggest social online plataform'/>
      </div>
   </>
  )
}

export default App
