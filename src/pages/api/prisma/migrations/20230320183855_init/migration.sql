-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Disponible', 'Ocupado', 'Ausente', 'Desconectado');

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Disponible',

    CONSTRAINT "User_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "user_email" TEXT NOT NULL,
    "contact_email" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("user_email","contact_email")
);

-- CreateTable
CREATE TABLE "Chat" (
    "sender_email" TEXT NOT NULL,
    "receiver_email" TEXT NOT NULL,
    "message_id" INTEGER NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("sender_email","receiver_email")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chat_message_id_key" ON "Chat"("message_id");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_contact_email_fkey" FOREIGN KEY ("contact_email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_receiver_email_fkey" FOREIGN KEY ("receiver_email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_sender_email_fkey" FOREIGN KEY ("sender_email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_message_id_fkey" FOREIGN KEY ("message_id") REFERENCES "Message"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
