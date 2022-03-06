import { PrismaClient } from "@prisma/client"
import { NextApiHandler } from "next"

const handler: NextApiHandler = async (req, res) => {
  const prisma = new PrismaClient()
  const users = await prisma.line_users.findMany({})
  res.status(200).json({users})
}

export default handler