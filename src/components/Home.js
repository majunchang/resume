import React from 'react'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='avatar-img'>
        <img src='https://avatars3.githubusercontent.com/u/29618863?s=460&v=4' className='avatar' />
      </div>
      <div className='home-info'>
        <p className='my-name'>马俊昌</p>
        <p className='my-profession'>嘟嘟计算机科技(北京微聚事业部)前端负责人</p>
        <p className='my-word'>（简历模拟） 曾先后就职于街觅（现智慧云尚）、嘟嘟计算机科技等大型互联网公司，加入嘟嘟计算机科技后先后负责过技术平台开发工作，以及H5云平台、H5插件平台等大型B2B、SAAS应用的前端架构工作，具有独立组建并管理研发团队经验，并拥有丰富的开源项目开发和管理经验。在前端工程化实现、React技术研究、Vue技术研究、Nodejs应用开发、移动端开发等方向有丰富的工作经验，并热衷于线下技术交流和分享。</p>
      </div>
    </div>
  )
}

export default Home
