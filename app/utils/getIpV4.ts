import { Users } from "../models/User";

export const lastLoginIp = async (user: any, ip: any, status: any) => {
    console.log(user, ip, status)
    await Users.findByIdAndUpdate(user._id, {
        last_ip: ip,
        last_seen: new Date(),
        available: status
    })
}

export const lastSeendStatus = async (id: any, status: any) => {
    await Users.findOneAndUpdate({
        _id: id
    }, {
        last_seen: new Date(),
        available: status
    })
}