import { LoginUserInput, NewUser, StatusCode, User } from "../../../generate/typedef"
import { Users } from "../../../models/User"
import { decrypt, encrypt } from "../../../utils/passwordHandlers"
import { generate } from "../../../utils/tokenHandler"

export const registerUser = async (newUser: NewUser) => {
    const { password, email } = newUser
    const checkUserAlreadyExists = await Users.find({
        email
    })
    if (checkUserAlreadyExists && checkUserAlreadyExists.length > 0) {
        return {
            status: 409,
            StatusCode: StatusCode.CONFLICT,
            message: `User Already exists with ${email}`,
            user: {},
            token: ""
        }
    }
    const encryptedPassword = await encrypt(password)
    newUser.password = encryptedPassword
    const user = new Users(newUser)
    const users: any = await user.save()
    const generateToken = await generate(users)
    return {
        status: 201,
        StatusCode: StatusCode.CREATED,
        message: "User Register sucessfully",
        user: users,
        token: generateToken
    }
}


export const loginUser = async (input: LoginUserInput) => {
    const { password, email } = input
    const currentUser = await Users.find({
        email
    })
    if (currentUser && currentUser.length === 0) {
        return {
            status: 404,
            StatusCode: StatusCode.NOT_FOUND,
            message: `User Account not found with ${email}`,
            user: {},
            token: ""
        }
    }
    const decryptPassword = await decrypt(currentUser[0].password)
    if (decryptPassword === password) {
        const generateToken = await generate(currentUser[0])
        return {
            status: 200,
            StatusCode: StatusCode.OK,
            message: "User Login sucessfully",
            user: currentUser[0],
            token: generateToken
        }
    } else {
        return {
            status: 401,
            StatusCode: StatusCode.UNAUTHORIZED,
            message: `Email/Password doesn't match with ${email}`,
            user: {},
            token: ""
        }
    }
}
export const currentUser = async (context: any) => {
    return await Users.findById(context.user.id)
}

export const allUsers = async (context: any, args: any) => {
    const limit = args.limit || 10
    const offset = args.offset || 0
    const count = await Users.find({}).count({})
    const users = Users.find({}).limit(limit).skip(offset)
    return {
        pagination: {
            limit: limit,
            offset: offset,
            total: count || 0
        },
        users
    }
}