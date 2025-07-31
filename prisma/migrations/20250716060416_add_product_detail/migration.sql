-- CreateTable
CREATE TABLE `ProductDetail` (
    `id` INTEGER NOT NULL,
    `brand` VARCHAR(191) NULL,
    `color` VARCHAR(191) NULL,
    `chip` VARCHAR(191) NULL,
    `camera` VARCHAR(191) NULL,
    `battery` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ProductDetail` ADD CONSTRAINT `ProductDetail_id_fkey` FOREIGN KEY (`id`) REFERENCES `Product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
