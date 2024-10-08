
import {hashSync} from "bcrypt";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User',
                email: 'user@test.ru',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin',
                email: 'admin@test.ru',
                password: hashSync('111111', 10),
                verified: new Date(),
                role: 'ADMIN',
            },
        ]
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
}

async function main() {
    try {
        await down()
        await up()
    } catch (e) {
        console.log(e)
    }
}

main().then(async ()=>{
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})