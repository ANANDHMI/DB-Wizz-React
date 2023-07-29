import { useState } from 'react'
import './ToggleSwitch.css'

export const ToggleSwitch = ({ label, toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <div >
        <label className="toggle-switch-label">
            <input type="checkbox" defaultChecked={isToggled} onClick={callback} className="toggle-switch-input"/>
            <span className="toggle-switch-span"/>
            <strong className="toggle-switch-strong">{label}</strong>
        </label>
        </div>
    )
}