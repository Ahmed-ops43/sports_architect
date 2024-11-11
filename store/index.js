import { proxy } from "valtio"


export const state = proxy({
    cursorHovered: false,
    cursorText:""
})