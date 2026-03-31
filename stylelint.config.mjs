export default {
    plugins: ["stylelint-order"],
    rules: {
        "order/properties-order": [
            // Posición
            ["position", "top", "right", "bottom", "left", "z-index", "inset"],
            // Display
            ["display", "visibility", "opacity", "overflow", "overflow-x", "overflow-y", "content"],
            // Caja
            ["width", "min-width", "max-width", "height", "min-height", "max-height"],
            // Espaciado
            ["margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left"],
            // Flex/Grid
            ["flex", "flex-direction", "flex-wrap", "flex-grow", "flex-shrink", "flex-basis", "justify-content", "justify-items", "justify-self", "align-content", "align-items", "align-self", "gap", "row-gap", "column-gap", "grid", "grid-template", "grid-template-columns", "grid-template-rows", "grid-column", "grid-row"],
            // Tipografía
            ["font-family", "font-size", "font-weight", "font-style", "line-height", "letter-spacing", "text-align", "text-decoration", "text-transform", "white-space", "word-break", "color"],
            // Fondo
            ["background", "background-color", "background-image", "background-size", "background-position", "background-repeat"],
            // Borde
            ["border", "border-top", "border-right", "border-bottom", "border-left", "border-width", "border-style", "border-color", "border-radius", "outline", "outline-offset"],
            // Efectos
            ["box-shadow", "filter", "backdrop-filter", "-webkit-backdrop-filter", "transform", "transform-origin", "transition", "animation"],
            // Interacción
            ["cursor", "pointer-events", "user-select", "resize", "appearance"]
        ]
    }
};