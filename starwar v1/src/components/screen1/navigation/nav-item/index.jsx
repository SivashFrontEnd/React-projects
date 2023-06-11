
export default function NavItem({title, icon, click}) {
    return (
        <li 
        className="navigation__item" 
        onClick={(e)=>{click(e, title)}}>
            <img src={icon}  alt={title}/>
            <div>{title}</div>
        </li>
        )
}