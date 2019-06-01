const breakpoints = {
    mobile: "320px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    laptop4k: "2560px",
}

export const devices = {
    mobile: `(min-width: ${breakpoints.mobile})`,
    tablet: `(min-width: ${breakpoints.tablet})`,
    laptop: `(min-width: ${breakpoints.laptop})`,
    laptopL: `(min-width: ${breakpoints.laptopL})`,
    laptop4k: `(min-width: ${breakpoints.laptop4k})`,
}

