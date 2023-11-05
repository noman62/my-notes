import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [hovered1, setHovered1] = useState(false)
  const [hovered2, setHovered2] = useState(false)
  const [hovered3, setHovered3] = useState(false)
  const [hovered4, setHovered4] = useState(false)
  const [hovered5, setHovered5] = useState(false)
  const [hovered6, setHovered6] = useState(false)
  const [hovered7, setHovered7] = useState(false)
  const [hovered8, setHovered8] = useState(false)
  const [hovered9, setHovered9] = useState(false)
  const [hovered10, setHovered10] = useState(false)
  const [hovered11, setHovered11] = useState(false)

  return (
    <div>
      <div className='container'>
        <div
          className={`shadow-none vertical p-1 mb-2 bg-light rounded ${
            hovered1 ? 'hovered' : ''
          }`}
          onMouseEnter={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
        >
          {hovered1 && <input type='checkbox' className='checkbox' />}
          <img src='/Image/image3.png' alt='Image 1' />
        </div>
        {/* Add more image divs here with their own state variables */}
        <div
          className={`shadow-none p-1 mb-2 bg-light rounded ${
            hovered2 ? 'hovered' : ''
          }`}
          onMouseEnter={() => setHovered2(true)}
          onMouseLeave={() => setHovered2(false)}
        >
          {hovered2 && <input type='checkbox' className='checkbox' />}
          <img src='/Image/image2.png' alt='Image 2' />
        </div>
        <div
          className={`shadow-none p-1 mb-2 bg-light rounded ${
            hovered3 ? 'hovered' : ''
          }`}
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
        >
          {hovered3 && <input type='checkbox' className='checkbox' />}
          <img src='/Image/image3.png' alt='Image 3' />
        </div>
        <div
          className={`shadow-none p-1 mb-2 bg-light rounded ${
            hovered4 ? 'hovered' : ''
          }`}
          onMouseEnter={() => setHovered4(true)}
          onMouseLeave={() => setHovered4(false)}
        >
          {hovered4 && <input type='checkbox' className='checkbox' />}
          <img src='/Image/image3.png' alt='Image 3' />
        </div>
        <div
          className={`shadow-none p-1 mb-2 bg-light rounded ${
            hovered5 ? 'hovered' : ''
          }`}
          onMouseEnter={() => setHovered5(true)}
          onMouseLeave={() => setHovered5(false)}
        >
          {hovered5 && <input type='checkbox' className='checkbox' />}
          <img src='/Image/image3.png' alt='Image 3' />
        </div>
        <div
          className={`shadow-none p-1 mb-2 bg-light rounded ${
            hovered6 ? 'hovered' : ''
          }`}
          onMouseEnter={() => setHovered6(true)}
          onMouseLeave={() => setHovered6(false)}
        >
          {hovered6 && <input type='checkbox' className='checkbox' />}
          <img src='/Image/image3.png' alt='Image 3' />
        </div>
        <div
          className={`shadow-none p-1 mb-2 bg-light rounded ${
            hovered7 ? 'hovered' : ''
          }`}
          onMouseEnter={() => setHovered7(true)}
          onMouseLeave={() => setHovered7(false)}
        >
          {hovered7 && <input type='checkbox' className='checkbox' />}
          <img src='/Image/image3.png' alt='Image 3' />
        </div>
        <div
          className={`shadow-none p-1 mb-2 bg-light rounded ${
            hovered8 ? 'hovered' : ''
          }`}
          onMouseEnter={() => setHovered8(true)}
          onMouseLeave={() => setHovered8(false)}
        >
          {hovered8 && <input type='checkbox' className='checkbox' />}
          <img src='/Image/image3.png' alt='Image 3' />
        </div>
        <div
          className={`shadow-none p-1 mb-2 bg-light rounded ${
            hovered9 ? 'hovered' : ''
          }`}
          onMouseEnter={() => setHovered9(true)}
          onMouseLeave={() => setHovered9(false)}
        >
          {hovered9 && <input type='checkbox' className='checkbox' />}
          <img src='/Image/image3.png' alt='Image 3' />
        </div>
        <div
          className={`shadow-none p-1 mb-2 bg-light rounded ${
            hovered10 ? 'hovered' : ''
          }`}
          onMouseEnter={() => setHovered10(true)}
          onMouseLeave={() => setHovered10(false)}
        >
          {hovered10 && <input type='checkbox' className='checkbox' />}
          <img src='/Image/image3.png' alt='Image 3' />
        </div>
        <div
          className={`shadow-none p-1 mb-2 bg-light rounded ${
            hovered11 ? 'hovered' : ''
          }`}
          onMouseEnter={() => setHovered11(true)}
          onMouseLeave={() => setHovered11(false)}
        >
          {hovered11 && <input type='checkbox' className='checkbox' />}
          <img src='/Image/image3.png' alt='Image 3' />
        </div>
      </div>
    </div>
  )
}

export default Header
