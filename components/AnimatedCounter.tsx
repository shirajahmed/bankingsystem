'use client'
 import CountUp from "react-countup"

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className="w-full"><CountUp
    decimal=","
    decimals={2}
    prefix="Rs"
    end={amount}/></div>
  )
}

export default AnimatedCounter