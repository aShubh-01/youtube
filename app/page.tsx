"use client"
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { useState } from 'react'

export default function Home() {

  const [sidebar, setSidebar] = useState(false);
  // hidden by defualt

  const sidebarSwitch = () => {
    setSidebar((prev) => !prev);
  }

  return (
    <>
      <Header sidebarSwitch={sidebarSwitch} />
      <section  className={`fixed top-0 left-0 rounded-md transform transition-transform duration-500 ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar sidebarSwitch={sidebarSwitch} />
      </section>

    </>
  )
}
