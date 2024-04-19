import prisma from "../src/libs/prisma";
import { hash } from "bcrypt"
import { Roles } from "@prisma/client";

async function main() {

  const EMAIL = process.env.FIRST_ADMIN_EMAIL || "ampharos321@hotmail.com"
  const PASSWORD = process.env.FIRST_ADMIN_PASSWORD || "Lotus3160"

  const password = await hash(PASSWORD, 10)

  const admin = await prisma.user.create({
    data: {
      email: EMAIL,
      password: password,
      role: Roles.ADMIN
    }
  })

  if(!admin) throw new Error("Error creating user")

  console.log(admin)
}

main().then(() => console.log("Finished")).catch((e) => console.log(e))