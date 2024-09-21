import { useEffect, useRef } from 'react'
import './animatedSvg.css'

const AnimatedSVG = () => {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    // Get the total path length
    // const path = svg.querySelector('path')
    // const pathLength = path.getTotalLength()
    // console.log('Path Length:', pathLength)
    // -----------------------------------

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0] // Only one element, so take the first
        if (entry.isIntersecting) {
          svg.classList.add('animate')
        } else {
          svg.classList.remove('animate')
        }
      },
      { threshold: 0.5 }
    )

    if (svg) {
      observer.observe(svg)
    }

    // Clean the observer when the component unmounts
    return () => {
      if (svg) {
        observer.unobserve(svg)
      }
    }
  }, [])

  return (
    <>
      <div className='containerSvg'>
        <svg
          className='squiggle'
          ref={svgRef}
          width='1145'
          height='384'
          viewBox='0 0 1145 384'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.5 343.5C108 299.5 214.383 188.5 235 113C270.5 -17.0001 176.5 5.5 168 65.5L126.5 366.5C130.833 318.5 156.839 240.381 172.5 219.5C193.5 191.5 268 157.5 268 254C263.5 299 244 336.5 264.5 354.5C280 372 347.7 380.2 424.5 301C488.5 233 447 149.5 388.5 204.5C360.604 230.727 342.964 332.967 417 355.5C497.5 380 595 272 611 250.5C653.5 193.391 711.5 14 639.5 18.9999C565.325 24.1509 557 223 563 267.5C569 312 595 412.5 712.5 325C759 286.5 820 190.5 839 105.5C864.157 -7.04496 785.5 -2 760 74.5C751.239 100.784 725.817 170.923 727.5 239.5C729.5 321 798.398 438.397 880.5 308C897.5 281 905.192 167.056 993.5 183C1065.5 196 1065.69 322.5 979.5 354.5C896 385.5 865.5 209.5 966.5 187C993 183 994.6 182.1 1045 200.5C1076.5 212 1093.5 213.5 1127.5 165'
            stroke='url(#paint0_linear_2_11)'
            strokeWidth='35'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <defs>
            <linearGradient
              id='paint0_linear_2_11'
              x1='17'
              y1='382.5'
              x2='1127.5'
              y2='192.094'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#3CB5F1' />
              <stop offset='0.175523' stopColor='#CF2AF0' />
              <stop offset='0.378345' stopColor='#BE0B0B' />
              <stop offset='0.57642' stopColor='#F78E18' />
              <stop offset='0.826786' stopColor='#DEE34A' />
              <stop offset='1' stopColor='#69EF72' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  )
}

export default AnimatedSVG
