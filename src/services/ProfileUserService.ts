import prismClient from "src/prisma"

class ProfileUserService {
  async execute(user_id: string) {
    const user = await prismClient.user.findFirst({
      where: {
        id: user_id
      }
    })

    return user
  }
}


export { ProfileUserService }