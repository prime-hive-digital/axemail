import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const employees = [
    {
        firstName: "Test",
        lastName: "User",
        pseudoName: "Testing User",
        email: "test@axemail.com",
        password: "phd@123",
    },
];

async function main() {
    for (const emp of employees) {
        const existing = await prisma.user.findUnique({
            where: { email: emp.email },
        });

        if (existing) {
            console.log(`⚠ User already exists: ${emp.email}`);
            continue;
        }

        const hashedPassword = await bcrypt.hash(emp.password, 10);

        await prisma.user.create({
            data: {
                firstName: emp.firstName,
                lastName: emp.lastName,
                pseudoName: emp.pseudoName,
                email: emp.email,
                password: hashedPassword,
                isActive: true,
            },
        });

        console.log(`✅ Employee created: ${emp.email}`);
    }
}

main()
    .catch((e) => {
        console.error("❌ Error seeding employees:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
