// This is a simple, reusable label component.
export default function Label({ children, className }) {
    return <label className={className}>{children}</label>;
}