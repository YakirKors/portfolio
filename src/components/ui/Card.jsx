function Card({ className = '', as: Component = 'article', children }) {
  return <Component className={`card ${className}`.trim()}>{children}</Component>
}

export default Card
