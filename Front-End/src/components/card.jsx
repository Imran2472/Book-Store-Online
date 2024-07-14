import React from 'react'

function card({item}) {
  return (
    <>
    <div className="card bg-base-100 w-100 shadow-xl">
  <figure>
    <img
      src={item.image} />
  </figure>
  <div className="card-body max-[1000px]:px-3 max-[1000px]:py-5">
    <h2 className="card-title justify-between max-[650px]:text-base max-[400px]:text-[14px] max-[351px]:text-[12px]">
      {item.name}
      <div className="badge badge-secondary max-[650px]:px-1 py-1 max-[650px]:text-[9px] max-[351px]:text-[7px] max-[351px]:px-[1px] max-[351px]:py-[1px] max-[351px]:rounded-[5px] max-[351px]:h-[12px]">{item.category}</div>
    </h2>
    <p className="max-[650px]:text-xs max-[650px]:leading-4 max-[400px]:text-[10px] max-[351px]:text-[9px]">{item.disc}</p>
    <div className="card-actions justify-between pt-4 items-center">

      <div className="badge badge-outline max-[400px]:text-[10px] max-[334px]:text-[10px] max-[334px]:px-[2px] max-[334px]:py-[2px] max-[334px]:h-[15px] max-[334px]:w-[15px]">{item.price}</div>
      <div className="badge badge-outline max-[400px]:text-[12px] max-[334px]:text-[9px] max-[334px]:px-[4px] max-[334px]:py-[2px]">buy now</div>
    </div>
  </div>
</div>
    </>
  )
}

export default card
