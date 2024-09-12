import './Card.css'

export default function Card({ title, description, subtitle }) {
    return (
        <>
            <div className="card">
                <h3 className='card-title'>{title}</h3>
                <p className="subtitle">{subtitle}</p>
                <p className='card-descripition'>{description}</p>
            </div>
        </>
    )
}
