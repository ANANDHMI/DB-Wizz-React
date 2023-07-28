import { useState } from 'react'
import './ToggleSwitch.css'

export const ToggleSwitch = ({ label, toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <di>
        <label>
            <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span />
            <strong>{label}</strong>
        </label>
        </di>
    )
}