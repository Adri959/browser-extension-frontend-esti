
import ToggleSwitch from './ToggleSwitch'

const ExtensionCard = (props) => {
  return (
    <div className='extensionCard'>
        <div className='cardHeader'>
            <img src={props.logo} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
        <div className="buttons">
            <button>Remove</button>
            <ToggleSwitch isActive={props.isActive}/>
        </div>
    </div>
  )
}

export default ExtensionCard