'use client';
import dynamic from 'next/dynamic';


const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false
})

export default function Home() {
  return (
    <main>
      <div className="h-[300vh]">
        <div className = "h-screen sticky top-0">
          <Scene /> 
        </div>
      </div>
      <div className="h-screen"></div>
    </main>
  )
}