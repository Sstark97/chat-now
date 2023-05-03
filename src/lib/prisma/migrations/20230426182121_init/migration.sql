/*
  Warnings:

  - You are about to drop the column `message_id` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `receiver_id` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `sender_id` on the `Chat` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chat_id` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_message_id_fkey";

-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_receiver_id_fkey";

-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_sender_id_fkey";

-- DropIndex
DROP INDEX "Chat_message_id_key";

-- AlterTable
ALTER TABLE "Chat" DROP COLUMN "message_id",
DROP COLUMN "receiver_id",
DROP COLUMN "sender_id";

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "author_id" TEXT NOT NULL,
ADD COLUMN     "chat_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ChatUsers" (
    "chat_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "ChatUsers_pkey" PRIMARY KEY ("chat_id","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ChatUsers_chat_id_key" ON "ChatUsers"("chat_id");

-- AddForeignKey
ALTER TABLE "ChatUsers" ADD CONSTRAINT "ChatUsers_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatUsers" ADD CONSTRAINT "ChatUsers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "ChatUsers"("chat_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
