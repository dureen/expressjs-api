-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 02, 2023 at 01:31 AM
-- Server version: 10.9.4-MariaDB
-- PHP Version: 8.1.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel-breeze`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `title`, `slug`, `content`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 3, 'Quae aut et est enim id pariatur excepturi.', 'quae-aut-et-est-enim-id-pariatur-excepturi', 'Voluptatem distinctio quod nobis ex error impedit fuga. Voluptates illo veniam sequi et. Natus voluptatem est aut dolor nemo ut dolores ut. Similique tenetur magnam nobis voluptas dolore error veritatis.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(2, 2, 'Minima delectus odit nesciunt rem vero deleniti quaerat qui.', 'minima-delectus-odit-nesciunt-rem-vero-deleniti-quaerat-qui', 'Est quis omnis aut maiores possimus aut excepturi. Vero quis dolores eligendi aliquid. Eos sunt quidem doloremque eius. Nemo perferendis asperiores quia animi est aut. Tempora facere consequatur sunt consequatur quo nihil.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(3, 3, 'Placeat nihil illum ex quo quod non.', 'placeat-nihil-illum-ex-quo-quod-non', 'Quibusdam eum et aut voluptas rem voluptatem. Libero eaque perspiciatis repellendus consequatur assumenda optio ex asperiores. Exercitationem ipsum amet hic quia in eum qui.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(4, 3, 'Dolore ut harum nesciunt.', 'dolore-ut-harum-nesciunt', 'Velit consequatur id magni animi non. Et voluptas fugit eligendi voluptatem impedit.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(5, 2, 'Nulla culpa officia in sunt molestiae ut.', 'nulla-culpa-officia-in-sunt-molestiae-ut', 'Earum itaque necessitatibus dolorem placeat recusandae dicta. Voluptatem molestiae veritatis commodi dolores sapiente. Quas voluptatem aspernatur iusto id et. Dolores rerum aut quos.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(6, 3, 'Officiis quia placeat omnis sint voluptates consectetur deleniti cupiditate.', 'officiis-quia-placeat-omnis-sint-voluptates-consectetur-deleniti-cupiditate', 'Vitae voluptatum quaerat nihil similique. Deleniti tempore totam fuga occaecati. Ipsum aut labore sint corrupti laboriosam aut laudantium. Quisquam eligendi rem laborum architecto ipsum provident tempore.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(7, 2, 'Nihil velit non necessitatibus.', 'nihil-velit-non-necessitatibus', 'Facere qui qui ex nesciunt. Quasi et accusantium rerum nesciunt corrupti. Adipisci totam deleniti libero ea. Ipsum temporibus consequatur ad sit quia nemo numquam.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(8, 2, 'Vel nam qui quibusdam rerum veritatis tempora.', 'vel-nam-qui-quibusdam-rerum-veritatis-tempora', 'Quasi repudiandae aut mollitia incidunt. Consequatur blanditiis ad necessitatibus. Assumenda recusandae omnis dolorem ut quos. Unde veritatis rerum qui similique illo.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(9, 1, 'Repudiandae ducimus dolor similique eius quia et voluptatum.', 'repudiandae-ducimus-dolor-similique-eius-quia-et-voluptatum', 'Modi nihil ullam voluptate. Vitae et atque debitis eveniet. Vero cum quos voluptatibus recusandae quia et voluptatem. Quo temporibus voluptas commodi facere accusamus commodi voluptas. Possimus optio ut alias.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(10, 3, 'Enim repellendus iusto consequatur incidunt dolores et.', 'enim-repellendus-iusto-consequatur-incidunt-dolores-et', 'Rerum et in molestiae adipisci ut distinctio nemo nemo. Aut facere rem eum explicabo. Repellat aut nam delectus et. Earum distinctio excepturi ratione et porro et ut.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(11, 1, 'Voluptas ut qui accusantium dicta quasi tempore.', 'voluptas-ut-qui-accusantium-dicta-quasi-tempore', 'Harum inventore ut omnis tempora a qui. Impedit sit aut illo nisi totam labore.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(12, 2, 'Necessitatibus nostrum nemo occaecati rerum distinctio sed.', 'necessitatibus-nostrum-nemo-occaecati-rerum-distinctio-sed', 'Voluptatibus sit accusamus quasi fuga. Voluptas sequi ut quod aut qui.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(13, 1, 'Eaque quas atque blanditiis fugit nihil.', 'eaque-quas-atque-blanditiis-fugit-nihil', 'Sed est debitis officiis inventore. Quisquam hic aut quo in culpa dolorem quod maxime. Ipsa earum ratione omnis ut rerum voluptatem suscipit facilis.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(14, 2, 'Ut similique ullam atque.', 'ut-similique-ullam-atque', 'Error cumque fuga qui qui numquam. Ut quasi perspiciatis illum aperiam odit recusandae sint error. Error debitis beatae officiis porro accusamus magnam sed.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(15, 4, 'Eveniet facilis quia iste.', 'eveniet-facilis-quia-iste', 'Ex eum voluptatem est architecto quia ducimus aut. Perferendis quod autem velit. Non aut laboriosam hic possimus cum ipsam accusantium accusamus.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(16, 2, 'Et exercitationem iusto asperiores debitis eaque repellendus.', 'et-exercitationem-iusto-asperiores-debitis-eaque-repellendus', 'Omnis sint itaque sint. Ipsam sed esse consequuntur quas.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(17, 2, 'Et nesciunt aliquid accusamus quis.', 'et-nesciunt-aliquid-accusamus-quis', 'Accusamus aut occaecati explicabo id consequuntur sit sint illo. Velit culpa quo repellendus expedita.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(18, 3, 'Corporis sunt a impedit sequi animi eius.', 'corporis-sunt-a-impedit-sequi-animi-eius', 'Et eos animi illum aspernatur similique. Quibusdam sit quod sed odit autem aut vel.', 0, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(19, 3, 'Asperiores similique consectetur facere ab alias.', 'asperiores-similique-consectetur-facere-ab-alias', 'Asperiores velit eos ut quis est architecto enim illum. Explicabo nemo totam qui sed. Omnis quasi non aut aut iure distinctio voluptatibus. Rerum quasi facere quos reiciendis.', 1, '2022-11-30 06:24:10', '2022-11-30 06:28:28', NULL),
(20, 2, 'Quam ratione iure nihil.', 'quam-ratione-iure-nihil', 'Nam quis repudiandae ad veniam quis ea. Consequatur veniam officiis nostrum ab. Sunt eveniet ut est id et quisquam ut ut.', 1, '2022-11-30 06:24:10', '2022-11-30 06:28:28', NULL),
(21, 1, 'Labore nihil voluptatem ullam nam repellendus qui facilis.', 'labore-nihil-voluptatem-ullam-nam-repellendus-qui-facilis', 'Itaque eveniet et officiis. Accusantium odio quaerat et veniam. Eaque quos est voluptatibus perspiciatis blanditiis iste rerum. Possimus et est enim rerum doloribus.', 1, '2022-11-30 06:24:10', '2022-11-30 06:28:28', NULL),
(22, 2, 'Non debitis voluptatem eos quo eos quia.', 'non-debitis-voluptatem-eos-quo-eos-quia', 'Asperiores aliquam excepturi veritatis architecto ullam incidunt in. Velit quia ipsa aut et deleniti enim. Libero natus facilis rerum harum amet nulla nesciunt at.', 1, '2022-11-30 06:24:10', '2022-11-30 06:28:28', NULL),
(23, 4, 'Qui commodi suscipit ea aspernatur ipsum quas.', 'qui-commodi-suscipit-ea-aspernatur-ipsum-quas', 'Nemo itaque suscipit laboriosam aut. Quo deserunt aut non assumenda harum. Qui autem enim sit dicta dicta impedit. Earum aut rerum consequatur amet.', 1, '2022-11-30 06:24:10', '2022-11-30 06:28:28', NULL),
(24, 1, 'Aperiam quasi est omnis omnis ex.', 'aperiam-quasi-est-omnis-omnis-ex', 'Dolores pariatur hic sequi esse laboriosam enim nihil. Et dolorum neque architecto. Officia ut et aliquam non veniam sint sint. Nulla iste iusto aliquam delectus rerum repellat eos.', 1, '2022-11-30 06:24:10', '2022-11-30 06:28:28', NULL),
(25, 2, 'Voluptas pariatur sed ut totam reprehenderit.', 'voluptas-pariatur-sed-ut-totam-reprehenderit', 'Repudiandae praesentium qui illum vero sit consequatur dignissimos. Doloremque deleniti est maxime. Iure consectetur commodi quae officia quo optio aspernatur. Rem pariatur voluptates repellat.', 1, '2022-11-30 06:24:10', '2022-11-30 06:28:28', NULL),
(26, 3, 'Corrupti animi non corporis maiores.', 'corrupti-animi-non-corporis-maiores', 'Nihil eos harum molestiae omnis sequi. Voluptatem dolorum quis asperiores soluta labore velit. Excepturi qui voluptatum odio in.', 1, '2022-11-30 06:24:10', '2022-11-30 06:28:28', NULL),
(27, 1, 'Labore voluptatem ut nam cupiditate aut.', 'labore-voluptatem-ut-nam-cupiditate-aut', 'Odit consequuntur reprehenderit error repellendus et. In quaerat blanditiis aliquam. Est natus distinctio rem et ut.', 1, '2022-11-30 06:24:10', '2022-11-30 06:28:28', NULL),
(28, 4, 'Qui quo molestias repellat enim ad.', 'qui-quo-molestias-repellat-enim-ad', 'Explicabo sit molestiae cum ipsam. Officiis magni molestiae sit aspernatur porro soluta ab harum. Ut sed sequi aut beatae dolore. Exercitationem possimus ut est qui saepe.', 1, '2022-11-30 06:24:10', '2022-11-30 06:28:28', NULL),
(29, 3, 'Nulla minima accusamus velit molestiae hic ad.', 'nulla-minima-accusamus-velit-molestiae-hic-ad', 'Eos consequatur facere quis qui. Cumque commodi sit facilis mollitia. Quae maxime voluptates perspiciatis impedit corporis.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(30, 3, 'Suscipit numquam et voluptates voluptatem.', 'suscipit-numquam-et-voluptates-voluptatem', 'Culpa soluta ea laudantium natus. Sapiente eius asperiores culpa omnis voluptatum voluptate veniam. Debitis est ut voluptatem. Ut est sint cupiditate autem sunt.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(31, 2, 'At eos tempore quia minima.', 'at-eos-tempore-quia-minima', 'Eos consequatur quia totam natus aut soluta illo. Incidunt sed tempora nostrum dolor voluptas. Eum dolor ut dolores voluptatem itaque ut.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(32, 1, 'Ea enim laborum et officia architecto id.', 'ea-enim-laborum-et-officia-architecto-id', 'Impedit maxime maiores nesciunt provident perferendis quisquam omnis. Mollitia harum laboriosam sed est quas totam autem.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(33, 1, 'Reprehenderit voluptatum ut possimus sunt voluptatum et eum temporibus.', 'reprehenderit-voluptatum-ut-possimus-sunt-voluptatum-et-eum-temporibus', 'Voluptatum at sit deleniti soluta quod. Officiis perspiciatis quia eveniet. Consequuntur asperiores aut commodi nisi consequatur sed cupiditate. Dolorem voluptatibus sunt sit dolorum aperiam corrupti odio.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(34, 1, 'Ut rem distinctio qui ad odit illum a.', 'ut-rem-distinctio-qui-ad-odit-illum-a', 'Facilis adipisci illo et odio non. Ut eum inventore rem consequatur. Dolor deserunt ipsum dignissimos laudantium fugiat.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(35, 2, 'Qui libero fugit voluptatem unde.', 'qui-libero-fugit-voluptatem-unde', 'Praesentium consequatur qui et sed est sunt saepe voluptas. Quia ullam non veritatis reprehenderit hic perferendis. Quia incidunt ad beatae magnam autem doloremque. Odit suscipit accusamus non occaecati distinctio. Nam qui et sit recusandae sapiente quia.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(36, 2, 'Voluptatum accusamus deserunt qui consectetur velit.', 'voluptatum-accusamus-deserunt-qui-consectetur-velit', 'Ea sit incidunt enim et quas. Magni asperiores excepturi itaque nesciunt id saepe sit. In aut dolores ducimus expedita odit itaque.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(37, 1, 'Labore soluta vero mollitia aut.', 'labore-soluta-vero-mollitia-aut', 'Soluta occaecati aperiam ea architecto iste. Rerum consequatur aperiam dolorem rem amet qui. Delectus corrupti corrupti ut.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(38, 1, 'Tenetur et et aut inventore.', 'tenetur-et-et-aut-inventore', 'Quis amet unde tempore quo cum fugiat qui. Libero mollitia veritatis quam voluptatem. Aliquam deleniti ut quia aut perspiciatis et cum. Esse rem vel qui incidunt ipsa.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(39, 4, 'Quod repellat voluptatem id aut quo.', 'quod-repellat-voluptatem-id-aut-quo', 'Quisquam eligendi et deserunt temporibus quo sit. Voluptas neque reprehenderit inventore.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(40, 1, 'Dolorem reiciendis tempora voluptatibus error non.', 'dolorem-reiciendis-tempora-voluptatibus-error-non', 'Ducimus et at eveniet earum amet. Unde sint eius repellendus consequatur et impedit. Explicabo quia porro tempora qui voluptate aut quis quasi. Harum laboriosam maiores quo deleniti unde. Non sed non voluptatem et.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(41, 2, 'Corrupti laboriosam nihil eius deserunt ut suscipit qui.', 'corrupti-laboriosam-nihil-eius-deserunt-ut-suscipit-qui', 'Cupiditate doloremque nulla et quia veritatis maxime a molestias. Tempore eaque perspiciatis illo atque et animi corporis. Impedit et omnis qui incidunt. Sapiente in accusamus ut adipisci voluptatem assumenda velit.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(42, 4, 'Sapiente architecto ipsam velit ut enim numquam ea quae.', 'sapiente-architecto-ipsam-velit-ut-enim-numquam-ea-quae', 'Reprehenderit et eum non sunt libero exercitationem et. Ut expedita exercitationem est beatae quae. Maxime est consectetur aperiam quae voluptatem ex repudiandae aut. Optio porro sit sit dolore ab adipisci.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(43, 3, 'Id odio porro sapiente voluptate dolorem est error.', 'id-odio-porro-sapiente-voluptate-dolorem-est-error', 'Illum ut commodi quis autem. Quod et quis unde dolores nesciunt.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(44, 4, 'Praesentium ut autem ea dolorum omnis.', 'praesentium-ut-autem-ea-dolorum-omnis', 'Error eos architecto eius et. Assumenda ut et ipsa nostrum quod rerum. Ea voluptas qui quo amet nulla quia est.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(45, 3, 'Harum optio cum dolor enim.', 'harum-optio-cum-dolor-enim', 'Veniam perferendis corrupti eaque illo beatae ut. Deleniti quo hic sint maxime voluptas in quibusdam. Ut et officia sequi exercitationem dolorem.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(46, 1, 'Sit deleniti nam error quas.', 'sit-deleniti-nam-error-quas', 'Dignissimos saepe ipsum aut qui voluptatem. Similique et corrupti quo nihil. Ut molestiae impedit ut. Quia velit quas officia sed.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(47, 1, 'Dolore numquam blanditiis possimus dolor amet laboriosam repellendus.', 'dolore-numquam-blanditiis-possimus-dolor-amet-laboriosam-repellendus', 'Mollitia et in quia non quia vitae. Sit cupiditate autem id voluptas perspiciatis. Et nulla ut ad sunt.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(48, 2, 'Libero quo qui atque voluptas odit voluptatem.', 'libero-quo-qui-atque-voluptas-odit-voluptatem', 'Beatae debitis rerum vitae qui blanditiis velit sit. Tempora quo est placeat molestiae ullam.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(49, 1, 'Omnis maxime velit qui qui perferendis qui fuga.', 'omnis-maxime-velit-qui-qui-perferendis-qui-fuga', 'Illum voluptatem iure suscipit omnis. Eius debitis eaque perferendis sint et esse. Odio beatae eaque sunt velit. Tempore aliquam quod cum autem neque delectus error.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(50, 3, 'Autem voluptates impedit magnam sunt nisi quia esse.', 'autem-voluptates-impedit-magnam-sunt-nisi-quia-esse', 'Consequatur voluptatum asperiores dolore rem. Repudiandae porro et et rem aperiam enim non. Maiores eos velit doloremque et. Aliquid unde rerum molestiae explicabo suscipit doloremque blanditiis.', 0, '2022-11-30 06:24:10', '2022-11-30 06:24:10', NULL),
(51, 6, 'sHello', 'hello', '-', 0, '2022-12-12 04:43:57', '2022-12-12 06:17:17', NULL),
(53, 5, 'Tenetur et et aut inventore.', 'tenetur-et-et-aut-inventore-1', 'ok', 1, '2022-12-30 19:26:40', '2022-12-30 19:26:40', NULL),
(54, 5, 'Tenetur et et aut inventore.', 'tenetur-et-et-aut-inventore-2', 'oko', 1, '2022-12-30 20:05:25', '2022-12-30 20:05:25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `level` tinyint(4) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `level`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Super Admin Josh', 'super@super.com', NULL, '$2y$10$dzKUFSUmsxOucazGqFfC2u6kmU3.1yudJSJcigQJ2rdrP0HjPL8Oq', 9, 'j5UrIYABeytZoqlBXcROYfpHt5r9UOEaU7l0QBOyLNGTH14M0vluO7vDUKSl', '2022-11-30 06:24:09', '2022-11-30 10:53:10', NULL),
(2, 'Admin', 'admin@admin.com', NULL, '$2y$10$pJQSwKw91JHkc4iwljHzrudhmy.6uZpigGzE9SLUyyiKX3Vrn1T9i', 2, NULL, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(3, 'User', 'user@user.com', NULL, '$2y$10$uZdI6ML4NQLIItfMuxAiP.hUH.oMErV3wvNCz4eV37bWISPrqSh.W', 1, NULL, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(4, 'Mr. Guest', 'guest@guest.com', NULL, '$2y$10$giDV63.tUx.uQjVXSh380.sL9AgOrhNcQuxyUhqZxxEfPnrQIa.VC', 0, NULL, '2022-11-30 06:24:09', '2022-11-30 06:24:09', NULL),
(5, 'Aiyooo', 'boy@mail.com', NULL, '$2y$10$mzrq85Faxx6yzV7mlvzmdebLO7Hq2FTrcHP.TWbNid34tsZK79de.', 3, NULL, '2022-12-12 02:53:12', '2022-12-30 20:17:45', NULL),
(6, 'Azura', 'super@supe.com', NULL, '$2y$10$vr98s1J7McXO4SK.3ZJsY.yrvxcZ2G95dJ0FYe98RwhN.n1SS/5aW', 1, NULL, '2022-12-12 03:03:58', '2022-12-12 12:34:44', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `posts_slug_unique` (`slug`),
  ADD KEY `posts_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
