"use client"

import { useState, useEffect } from "react"
import { debounce } from "lodash"
import { motion, stagger, useAnimate } from "motion/react"

const VariableFontHoverByLetter = ({
  label,
  fromFontVariationSettings = "'wght' 400, 'slnt' -2",
  toFontVariationSettings = "'wght' 800, 'slnt' -10",
  transition = {
    type: "spring",
    duration: 0.6,
  },
  staggerDuration = 0.03,
  staggerFrom = "first",
  className,
  onClick,
  isHovered = false,
  ...props
}) => {
  const [scope, animate] = useAnimate()

  const mergeTransition = (baseTransition) => ({
    ...baseTransition,
    delay: stagger(staggerDuration, {
      from: staggerFrom,
    }),
  })

  const handleHoverChange = debounce(
    (hovering) => {
      animate(
        ".letter",
        { 
          fontVariationSettings: hovering ? toFontVariationSettings : fromFontVariationSettings 
        },
        mergeTransition(transition)
      )
    },
    100,
    { leading: true, trailing: true }
  )

  useEffect(() => {
    handleHoverChange(isHovered)
    return () => handleHoverChange.cancel()
  }, [isHovered])

  return (
    <motion.span
      className={`${className}`}
      ref={scope}
      onClick={onClick}
      {...props}
    >
      <span className="sr-only">{label}</span>

      {label.split("").map((letter, i) => {
        return (
          <motion.span
            key={i}
            className="inline-block whitespace-pre letter"
            aria-hidden="true"
          >
            {letter}
          </motion.span>
        )
      })}
    </motion.span>
  )
}

export default VariableFontHoverByLetter