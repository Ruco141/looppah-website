/**
 * BackdropBlur Wrapper Component
 *
 * WORKAROUND para bug de backdrop-filter en CSS Modules.
 *
 * ISSUE: backdrop-filter no funciona cuando se aplica via CSS Modules
 * en Chrome 146, Edge, y Firefox con Next.js 16.2.1
 *
 * SÍNTOMAS:
 * - CSS Modules: backdrop-filter se marca como "Invalid property value"
 * - Inline styles: funciona correctamente
 * - Afecta: -webkit-backdrop-filter y backdrop-filter
 *
 * CAUSA RAÍZ: Desconocida. Posible bug en:
 * - Next.js CSS processing pipeline
 * - Interacción entre Framer Motion + CSS Modules
 * - CSS Modules spec implementation
 *
 * SOLUCIÓN TEMPORAL: Este componente aplica backdrop-filter
 * mediante inline styles en lugar de CSS Modules.
 */

export default function BackdropBlur({ children, blur = "25px", className = "", style = {}}) {
    return (
        <div
            className={className}
            style={{
                backdropFilter: `blur(${blur})`,
                WebkitBackdropFilter: `blur(${blur})`,
                ...style
            }}
        >
            {children}
        </div>
    );
}