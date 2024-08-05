-- --------------------------------------------------------
-- Servidor:                     localhost
-- Versão do servidor:           9.0.0 - MySQL Community Server - GPL
-- OS do Servidor:               Linux
-- HeidiSQL Versão:              12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Copiando dados para a tabela terradegoshen_development_database.categories: ~4 rows (aproximadamente)
INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
	('28ef978e-a978-494f-bfa2-453252af79f0', 'Camiseta', '2024-07-18 15:49:30.000000', '2024-07-18 15:49:31.000000'),
	('28ef978e-a978-494f-bfa2-453252af79f1', 'Calças', '2024-07-18 15:49:30.000000', '2024-07-18 15:49:31.000000'),
	('28ef978e-a978-494f-bfa2-453252af79f2', 'Sapatos', '2024-07-18 15:49:30.000000', '2024-07-18 15:49:31.000000'),
	('28ef978e-a978-494f-bfa2-453252af79f3', 'Íntimos', '2024-07-18 15:49:30.000000', '2024-07-18 15:49:31.000000');

-- Copiando dados para a tabela terradegoshen_development_database.ColorRefProduct: ~3 rows (aproximadamente)
INSERT INTO `ColorRefProduct` (`ColorsId`, `ProductsId`) VALUES
	('40133a36-7cd6-4c1c-bb30-6f6bf22e1842', '08dca75e-02e3-4216-8b56-0b0c60d6d8b4'),
	('40133a36-7cd6-4c1c-bb30-6f6bf22e1842', '08dca75e-0b9c-465c-87b2-5cf15bc5d1e1'),
	('40133a36-7cd6-4c1c-bb30-6f6bf22e1842', '08dca75e-0d10-47f0-8206-86508a35728f'),
	('40133a36-7cd6-4c1c-bb30-6f6bf22e1842', '08dca76b-ce21-479a-8dc9-8731929de47d');

-- Copiando dados para a tabela terradegoshen_development_database.colors: ~2 rows (aproximadamente)
INSERT INTO `colors` (`id`, `image_id`, `value`, `created_at`, `updated_at`) VALUES
	('40133a36-7cd6-4c1c-bb30-6f6bf22e1842', NULL, 'Red', '2024-07-18 15:50:05.000000', '2024-07-18 15:50:06.000000'),
	('40133a36-7cd6-4c1c-bb30-6f6bf22e1843', NULL, 'Green', '2024-07-18 15:50:05.000000', '2024-07-18 15:50:06.000000'),
	('40133a36-7cd6-4c1c-bb30-6f6bf22e1844', NULL, 'Blue', '2024-07-18 15:50:05.000000', '2024-07-18 15:50:06.000000');

-- Copiando dados para a tabela terradegoshen_development_database.images: ~3 rows (aproximadamente)
INSERT INTO `images` (`id`, `product_id`, `is_cover`, `url`, `created_at`, `updated_at`) VALUES
	('08dca75e-02e3-4259-8b4b-636237c5c418', '08dca75e-02e3-4216-8b56-0b0c60d6d8b4', 1, 'https://storage.googleapis.com/mrffilipe_bucket/s3aatvyx.nv3', '2024-07-18 19:15:39.697774', '2024-07-18 19:15:39.697774'),
	('08dca75e-0b9c-46b4-829a-9e75c019958e', '08dca75e-0b9c-465c-87b2-5cf15bc5d1e1', 1, 'https://storage.googleapis.com/mrffilipe_bucket/zoo050sh.zqn', '2024-07-18 19:15:54.333680', '2024-07-18 19:15:54.333680'),
	('08dca75e-0d10-4838-8d7d-a18ab16034a5', '08dca75e-0d10-47f0-8206-86508a35728f', 1, 'https://storage.googleapis.com/mrffilipe_bucket/u41ggjio.2jh', '2024-07-18 19:15:56.772061', '2024-07-18 19:15:56.772061'),
	('08dca76b-ce21-4bb1-8572-0f7260ae81c5', '08dca76b-ce21-479a-8dc9-8731929de47d', 1, 'https://storage.googleapis.com/mrffilipe_bucket/bueeozxt.4mh', '2024-07-18 20:54:24.145006', '2024-07-18 20:54:24.145006');

-- Copiando dados para a tabela terradegoshen_development_database.products: ~4 rows (aproximadamente)
INSERT INTO `products` (`id`, `name`, `description`, `price`, `background_text`, `category_id`, `quantity_in_stock`, `created_at`, `updated_at`) VALUES
	('08dca75e-02e3-4216-8b56-0b0c60d6d8b4', 'Camiseta Gola Polo V', 'Qualquer descrição serve aqui', 129.9, 'Goshen', '28ef978e-a978-494f-bfa2-453252af79f0', 10, '2024-07-18 19:15:39.697771', '2024-07-18 19:15:39.697771'),
	('08dca75e-0b9c-465c-87b2-5cf15bc5d1e1', 'Camiseta Gola Polo V', 'Qualquer descrição serve aqui', 129.9, 'Goshen', '28ef978e-a978-494f-bfa2-453252af79f0', 10, '2024-07-18 19:15:54.333678', '2024-07-18 19:15:54.333678'),
	('08dca75e-0d10-47f0-8206-86508a35728f', 'Camiseta Gola Polo V', 'Qualquer descrição serve aqui', 129.9, 'Goshen', '28ef978e-a978-494f-bfa2-453252af79f0', 10, '2024-07-18 19:15:56.772060', '2024-07-18 19:15:56.772060'),
	('08dca76b-ce21-479a-8dc9-8731929de47d', 'Camiseta Gola Polo V', 'Qualquer descrição serve aqui', 129.9, 'Goshen', '28ef978e-a978-494f-bfa2-453252af79f0', 10, '2024-07-18 20:54:24.145000', '2024-07-18 20:54:24.145000');

-- Copiando dados para a tabela terradegoshen_development_database.ProductSizeRef: ~4 rows (aproximadamente)
INSERT INTO `ProductSizeRef` (`ProductsId`, `SizesId`) VALUES
	('08dca75e-02e3-4216-8b56-0b0c60d6d8b4', '1a2466d5-b1a3-4203-9848-efe1860004c9'),
	('08dca75e-0b9c-465c-87b2-5cf15bc5d1e1', '1a2466d5-b1a3-4203-9848-efe1860004c9'),
	('08dca75e-0d10-47f0-8206-86508a35728f', '1a2466d5-b1a3-4203-9848-efe1860004c9'),
	('08dca76b-ce21-479a-8dc9-8731929de47d', '1a2466d5-b1a3-4203-9848-efe1860004c9');

-- Copiando dados para a tabela terradegoshen_development_database.sizes: ~2 rows (aproximadamente)
INSERT INTO `sizes` (`id`, `value`, `created_at`, `updated_at`) VALUES
	('1a2466d5-b1a3-4203-9848-efe1860004c8', 'M', '2024-07-18 15:50:28.000000', '2024-07-18 15:50:29.000000'),
	('1a2466d5-b1a3-4203-9848-efe1860004c9', 'Gg', '2024-07-18 15:50:28.000000', '2024-07-18 15:50:29.000000');

-- Copiando dados para a tabela terradegoshen_development_database.__EFMigrationsHistory: ~0 rows (aproximadamente)
INSERT INTO `__EFMigrationsHistory` (`MigrationId`, `ProductVersion`) VALUES
	('20240718184823_FirstMigration', '8.0.6');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
