'use client'
import { Label } from "@/components/ui/label"
import { initialSignUpFormData, userRegistrationformControls } from "../utils"
import { Button } from "@/components/ui/button"

import CommonFormElement from "@/components/form-element/page"
import { useState } from "react"


function SignUp() {
    function handleSignUpBtnValid() {
        return Object.keys(signUpFormData).every(key => signUpFormData[key] !== '')
    }
    const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData)
    console.log(signUpFormData)
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
                                    setSignUpFormData({ ...signUpFormData, [event.target.name]: event.target.value, })
                                }} />

                        }
                    </div>

                )
                }
                <Button disabled={!handleSignUpBtnValid()} className="disabled:opacity-65" type="submit">Sign Up</Button>
            </form >

        </div >
    )
}
export default SignUp