'use client'
import { Label } from "@/components/ui/label"
import { initialSignUpFormData, userRegistrationformControls } from "../utils"
import CommonFormElement from "@/components/form-element/page"
import { useState } from "react"

function SignUp() {
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData)
    return (
        <div> <h1> Please Do Registration</h1>
            <form>
                {userRegistrationformControls.map(controlItem =>
                    <div>
                        <Label>
                            {controlItem.label}
                        </Label>{
                            <CommonFormElement
                                value={signUpFormData[controlItem.name]} currentItem={controlItem} onChange={event => {
                                    setSignUpFormData({ ...signUpFormData, userName: event.target.value, })
                                }} />

                        }
                    </div>

                )
                }
            </form >

        </div >
    )
}
export default SignUp