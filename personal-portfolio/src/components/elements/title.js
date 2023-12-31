import './title.scss'

const Title = (props) => {
    return <div className="title">
        <h1>{props.children}</h1>
        <div className='underline'/>
    </div>
}

export default Title