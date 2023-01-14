export const navVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            type: 'tween',
            delay: 0.2,
            duration: 0.5,
            ease: 'easeOut',
        }
    } 
}

export const menuVariants = {
    hidden: {
        scale: 0,
        opacity: 1,
        borderRadius: 500,
        transition: {
            type: 'tween',
            duration: 0.2,
            delay: 0.3
        }
    },
    show: {
        scale: 1,
        opacity: 1,
        borderRadius: 0,
        transition: {
            type: 'tween',
            duration: 0.2,
        }
    }
}

export const menuLinkVariants = {
    hidden: { 
        opacity: 0,
        transition: {
            type: 'tween',
            duration: 0.2
        }
    },
    show: { 
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.2,
            delay: 0.3
        }
    }
}

export const downButtonVariants = {
    show: {
        y: [0, -20, 20, -5, 0, 0 , 0],
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

export const imageVariants = {
    hidden: {
        opacity: 0,
        y: "20%"
    },
    show: {
        opacity: 1,
        y: "10%",
        transition: {
            type: 'tween',
            delay: 0.625,
            duration: 0.75,
            ease: 'easeOut',
        }
    }
}

export const slideInVariants = (type, delay, duration) => ({
    hidden: {
        y: "10%",
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        }
    }
})

export const showVariants = (type, delay, duration) => ({
    hidden: { opacity: 0 },
    show: { 
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        }
    },
})

export const expandScaleVariants = (scale) => ({
    hidden: { scale: 1 },
    show: { scale }
})

export const cardSliderVariants = (width, idx, position) => ({
    hidden: {},
    show: {
        left: width > 640 ? `${(idx - position) * 450}px` : `${(idx - position) * 100}vw`,
    }
})

export const testimonialSliderVariants = () => ({
    hidden: direction => {
        return {
            x: direction > 0 ? "100vw" : "-100vw"
        }
    },
    show: {
        y: 0,
        x: 0,
        transition: {
            duration: 0.5
        }
    },
    exit: direction => {
        return {
            x: direction > 0 ? "-100vw" : "100vw",
            transition: {
                duration: 0.5
            }
        }
    }
})

export const hoverButton = {
    hidden: {
        scale: 1
    },
    show: {
        scale: 0.9,
        background: "#075FE4"
    }
}

export const arrowRightVariants = {
    hidden: {
        x: 0
    },
    show: {
        x: 5
    }
}
  
export const underlineVariants = {
    hidden: {
        background: "#5D6C83"
    },
    show: {
        background: "#FFF"
    }
}