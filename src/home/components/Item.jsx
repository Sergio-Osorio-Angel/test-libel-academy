export const Item = ({url, description, title}) => {
    return (
        <div className="item-list">
            <img className="img-item" src={url} alt={title} />
            <h4 className="desc-item">{description}</h4>
            <h3 className="tl-item">{title}</h3>
        </div>
    )
}
