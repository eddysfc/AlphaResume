import React from 'react'

const ProgressSidebar = () => {
  return (
    <div className='flex flex-col w-1/4 h-screen bg-alpha-blue items-center'>
        <div className='text-white text-xl tracking-wider font-bold pt-12'>模拟面试</div>
        <div className='text-white text-xl tracking-wider font-bold pt-12'>1. 完善信息</div>
        <div className='text-white text-xl tracking-wider font-bold pt-12'>2. 面试中</div>
        <div className='text-white text-xl tracking-wider font-bold pt-12'>3. 综合评估</div>
        <div className='text-white text-xl tracking-wider font-bold pt-12'>4. 分区详细评估</div>
      </div>
  )
}

export default ProgressSidebar