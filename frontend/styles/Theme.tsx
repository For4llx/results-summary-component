
import { DefaultTheme } from 'styled-components';

const Theme: DefaultTheme = {
    layout: {
        mobile: "480px",
        desktop: "1440px",
    },

    colors: {
        primary: {
            lightRed: "hsl(0, 100%, 67%)",
            orangeyYellow: "hsl(39, 100%, 56%)",
            greenTeal: "hsl(166, 100%, 37%)",
            cobaltBlue: "hsl(234, 85%, 45%)"

        },
        gradients: {
            lightSlateBlue: "hsl(252, 100%, 67%)",
            lightRoyalBlue: "hsl(241, 81%, 54%)",
            violetBlue: "hsla(256, 72%, 46%, 1)",
            persianBlue: "hsla(241, 72%, 46%, 0)"
        },
        neutral: {
            white: "hsl(0, 0%, 100%)",
            palePlue: "hsl(221, 100%, 96%)",
            lightLavender: "hsl(241, 100%, 89%)",
            darkFrayBlue: "hsl(224, 30%, 27%) "
        }
    },
    typography: {
        fontSize: {
            m: "24px",
            l: "32px",
            xl: "72px",
            body: "18px"
        }
    }
};

export { Theme };