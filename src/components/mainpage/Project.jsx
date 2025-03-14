import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { FreeMode, Pagination } from 'swiper/modules'
import { RxArrowTopRight } from 'react-icons/rx'
import { ProjectsData } from '../../constants/projects'
import ProjectDetails from './ProjectDetails'
import { useState } from 'react'

import NatureBackground from "../../assets/nature_background.jpg"
import HeroPic from '../../assets/hyouka-icon.png';

const Project = () => {
  const [chosenProject, setChosenProject] = useState(ProjectsData[0]);

  return (
    <div 
      className='bg-cover'
      style={{ 
        backgroundImage: `url(${NatureBackground})`
      }}>
      <div className='backdrop-blur-md'>
        <div 
          className="p-10 flex items-center justify-center flex-col h-fit border-t-2">
          <Swiper
            breakpoints={{
              400: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              700: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              1300: {
                slidesPerView: 3.5,
                spaceBetween: 10,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-[90%] lg:max-w-[80%]"
          >
            {ProjectsData.map((item) => (
              <SwiperSlide onClick={() => setChosenProject(item)}key={item.title}>
                <div className="flex flex-col gap-10 mb-10 lg:mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 overflow-hidden cursor-pointer h-[250px] w-[200px] lg:h-[300px] lg:w-[250px] font-size-2xl">
                  <div
                    className="absolute inset-0.5 bg-cover bg-center bg-blue-400 opacity-70 border-2"
                  />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                  <div className="relative flex flex-col gap-3">
                    <div className='flex justify-center'>
                      <img src={item.icon} alt="" width={65} height={65}
                      className='rounded-full w-half border-1 border-white' />
                    </div>
                    <h1 className="text-m lg:text-xl">{item.title} </h1>
                    <p className="text-xs lg:text-sm">{item.content} </p>
                  </div>
                  <RxArrowTopRight className="absolute bottom-5 left-5 w-[25px] h-[25px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='border-t-2 bg-gray-800 opacity-75'>
          <ProjectDetails project={chosenProject}/>
        </div>
      </div>
    </div>
  )
}

export default Project