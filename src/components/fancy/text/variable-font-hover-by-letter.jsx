"use client"

import { useEffect, useMemo, useCallback } from "react"
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

  // Memoize split letters
  const letters = useMemo(() => label.split(""), [label])

  const mergeTransition = useCallback(
    (baseTransition) => ({
      ...baseTransition,
      delay: stagger(staggerDuration, {
        from: staggerFrom,
      }),
    }),
    [staggerDuration, staggerFrom]
  )

  // Memoize debounced function
  const handleHoverChange = useMemo(
    () => debounce(
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
    ),
    [animate, toFontVariationSettings, fromFontVariationSettings, mergeTransition, transition]
  )

  useEffect(() => {
    handleHoverChange(isHovered)
    return () => handleHoverChange.cancel()
  }, [isHovered, handleHoverChange])

  return (
    <motion.span
      className={className}
      ref={scope}
      onClick={onClick}
      {...props}
    >
      <span className="sr-only">{label}</span>

      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre letter"
          aria-hidden="true"
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default VariableFontHoverByLetter