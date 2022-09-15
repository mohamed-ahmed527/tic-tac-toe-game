import React from 'react'

const Oicon = ({color, size}) => {
  return (
    <div className={`icon ${color ? 'icon-' + color : 'icon-yellow'} ${size && 'icon-' + size} `}>
        <svg width="128px" height="128px" viewBox="0 0 128 128" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet"><path d="M64.01 15.06c-34.13 0-55.46 24.1-55.46 53.82c0 29.73 21.33 53.82 55.46 53.82c34.12 0 55.45-24.1 55.45-53.82c-.01-29.73-21.33-53.82-55.45-53.82zm0 81.78c-17.73 0-28.82-12.52-28.82-27.96s11.08-27.96 28.82-27.96c17.73 0 28.81 12.52 28.81 27.96c-.01 15.44-11.09 27.96-28.81 27.96z" clip-rule="evenodd" ></path></svg>
    </div>
  )
}

export default Oicon;