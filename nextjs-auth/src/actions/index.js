import connectToDB from "@/database"
import User from "@/models"

export async function registerUser(formData) {
    await connectToDB()
    try {
        const { userName, email, password } = formData
        const checkUser = await User.findOne({ email })
        if (checkUser) {
            return {
                success: false,
                message: "User already exists! Please try with another email"
            }
        }
    }
    catch (error) {
        console.log(error)
        return {
            message: "Something Error Occured",
            success: false,
        }
    }
}