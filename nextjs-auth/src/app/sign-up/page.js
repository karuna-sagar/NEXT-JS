import { Label } from "@/components/ui/label"
import { userRegistrationformControls } from "../utils"

function SignUp() {
    return (
        <div> <h1> Please Do Registration</h1>
            <form>
                {userRegistrationformControls.map(controlItem
                    < div >
                    <Label>
                        {controlItem.label}
                    </Label>{
                    controlItem.inputType === "input" ? <input type={controlItem.inputType} />
                }
            </div>
    )
}
        </form >
        
        </div >
    )
}
export default SignUp